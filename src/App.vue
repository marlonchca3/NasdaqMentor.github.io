<script setup>
import { computed, onMounted, onUnmounted, ref, watch, nextTick } from 'vue'
import { gsap } from 'gsap'
import { onAuthStateChanged } from 'firebase/auth'
import PnlChart from './PnlChart.vue'
import ProspectTest from './ProspectTest.vue'
import BigFiveTest from './BigFiveTest.vue'
import Dashboard from './Dashboard.vue'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocsFromServer,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  writeBatch,
} from 'firebase/firestore'
import { getStorage, ref as sRef, uploadString, getDownloadURL, deleteObject } from 'firebase/storage'
import { auth, db, loginWithGoogle, logout } from './firebase'

const maxTasks = 10
const user = ref(null)
const authReady = ref(false)
const themeStorageKey = 'nasdaq-mentor-theme'
const theme = ref('dark')

function applyTheme(nextTheme) {
  if (typeof document === 'undefined') {
    return
  }

  document.documentElement.setAttribute('data-theme', nextTheme)
}

function initTheme() {
  if (typeof window === 'undefined') {
    return
  }

  const savedTheme = localStorage.getItem(themeStorageKey)
  if (savedTheme === 'light' || savedTheme === 'dark') {
    theme.value = savedTheme
  } else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    theme.value = prefersDark ? 'dark' : 'light'
  }

  applyTheme(theme.value)
}

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}

// ── Intro / Onboarding ───────────────────────────────────────────
const showIntro = ref(false)

function openIntro() {
  showIntro.value = true
}

function closeIntro() {
  showIntro.value = false
  if (typeof window !== 'undefined') {
    localStorage.setItem('nasdaq-mentor-intro-seen', 'true')
  }
}
const loading = ref(false)
const authError = ref('')
const taskInput = ref('')
const taskError = ref('')
const tasks = ref([])
let unsubscribeTasks = null

// ── Drag & Drop ──────────────────────────────────────────────────
const dragFromIndex = ref(null)
const dragOverIndex = ref(null)

function onDragStart(index) {
  dragFromIndex.value = index
}

function onDragEnter(index) {
  if (dragFromIndex.value !== null) {
    dragOverIndex.value = index
  }
}

function onDragEnd() {
  dragFromIndex.value = null
  dragOverIndex.value = null
}

async function onDrop(toIndex) {
  const fromIndex = dragFromIndex.value
  dragFromIndex.value = null
  dragOverIndex.value = null

  if (fromIndex === null || fromIndex === toIndex) {
    return
  }

  const newTasks = [...tasks.value]
  const [moved] = newTasks.splice(fromIndex, 1)
  newTasks.splice(toIndex, 0, moved)
  tasks.value = newTasks

  if (user.value) {
    await saveOrder()
  }
}

async function saveOrder() {
  const batch = writeBatch(db)
  tasks.value.forEach((task, index) => {
    batch.update(doc(db, 'users', user.value.uid, 'tasks', task.id), { order: index })
  })
  await batch.commit()
}

// ── TTS ──────────────────────────────────────────────────────────
const ttsEnabled = ref(true)
// Restaurar preferencia de voz
if (typeof window !== 'undefined') {
  const savedTts = localStorage.getItem('ttsEnabled')
  if (savedTts !== null) {
    ttsEnabled.value = savedTts === 'true'
  }
}
const ttsSpeaking = ref(false)

const ttsReady = ref(false)
const ttsUnlocked = ref(false)
let ttsVoicesChangedHandler = null
let clockInterval = null
const cooldownNow = ref(Date.now())
const importantNewsMuteTasksUntil = ref(0)
const importantNewsWindowMinutes = 15

function unlockTts() {
  if (!('speechSynthesis' in window) || ttsUnlocked.value) {
    return
  }

  try {
    const warmup = new SpeechSynthesisUtterance('')
    warmup.volume = 0
    window.speechSynthesis.speak(warmup)
    window.speechSynthesis.cancel()
    ttsUnlocked.value = true
  } catch {
    // Keep locked; user can try again on next interaction.
  }
}

function toggleTts() {
  ttsEnabled.value = !ttsEnabled.value
  if (typeof window !== 'undefined') {
    localStorage.setItem('ttsEnabled', ttsEnabled.value)
    if (ttsEnabled.value) {
      unlockTts()
    }
    if (!ttsEnabled.value && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      ttsSpeaking.value = false
    }
  }
}

function getSpanishVoice() {
  const voices = window.speechSynthesis.getVoices()
  return (
    voices.find((v) => v.lang === 'es-ES') ||
    voices.find((v) => v.lang.startsWith('es')) ||
    null
  )
}

function speak(text) {
  if (!('speechSynthesis' in window) || !ttsEnabled.value) {
    return
  }

  unlockTts()
  window.speechSynthesis.resume()
  window.speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)

  const voice = getSpanishVoice()
  if (voice) {
    utterance.voice = voice
  }

  utterance.lang = 'es-ES'
  utterance.volume = 1
  utterance.rate = 0.95
  utterance.onstart = () => { ttsSpeaking.value = true }
  utterance.onend = () => { ttsSpeaking.value = false }
  utterance.onerror = () => { ttsSpeaking.value = false }

  // Chrome bug: cancel() + speak() in same tick can silently fail
  setTimeout(() => {
    window.speechSynthesis.speak(utterance)
  }, 50)
}

function buildSpeechText() {
  const completed = tasks.value.filter((task) => task.completed)
  const pending = tasks.value.filter((task) => !task.completed)

  const parts = []

  if (completed.length) {
    parts.push(`Tareas completadas: ${completed.map((t) => t.title).join('. ')}.`)
  }

  if (pending.length) {
    parts.push(`Tareas pendientes: ${pending.map((t) => t.title).join('. ')}.`)
  }

  if (!parts.length) {
    return 'No hay tareas registradas para hoy.'
  }

  return parts.join(' ')
}

function getAlertDateTime(alert) {
  const [yr, mo, dy] = String(alert.date || '').split('-').map(Number)
  const [hh, mm] = String(alert.time || '').split(':').map(Number)

  if (![yr, mo, dy, hh, mm].every(Number.isFinite)) {
    return null
  }

  return new Date(yr, mo - 1, dy, hh, mm, 0, 0)
}

function hasImportantNewsNow() {
  if (alertsPaused.value) {
    return false
  }

  const nowMs = Date.now()
  if (nowMs < importantNewsMuteTasksUntil.value) {
    return true
  }

  return newsAlerts.value.some((alert) => {
    if (alert.fired) {
      return false
    }

    const alertTime = getAlertDateTime(alert)
    if (!alertTime) {
      return false
    }

    const diffMin = (alertTime.getTime() - nowMs) / 60000
    return diffMin >= 0 && diffMin <= importantNewsWindowMinutes
  })
}

function buildImportantNewsSpeech(text) {
  const message = `Atencion, noticia importante: ${text}.`
  return `${message} ${message} ${message}`
}

function startClock() {
  clockInterval = setInterval(() => {
    cooldownNow.value = Date.now()
    checkNewsAlerts()

    if (!ttsEnabled.value) {
      return
    }

    // Chrome pauses speechSynthesis in background tabs — keep it alive
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume()
    }

    const now = new Date()
    if (now.getSeconds() === 0 && now.getMinutes() % 5 === 0) {
      if (hasImportantNewsNow()) {
        return
      }
      speak(buildSpeechText())
    }
  }, 1000)
}

function stopClock() {
  if (clockInterval) {
    clearInterval(clockInterval)
    clockInterval = null
  }
}

function speakNow() {
  if (ttsEnabled.value) {
    unlockTts()
    speak(buildSpeechText())
  }
}

function initTts() {
  if (!('speechSynthesis' in window)) {
    return
  }

  // Some browsers return [] for voices initially; do not block TTS UI.
  ttsReady.value = true

  const tryInit = () => {
    const voices = window.speechSynthesis.getVoices()
    if (voices.length > 0) {
      ttsReady.value = true
    }
  }

  tryInit()
  ttsVoicesChangedHandler = tryInit
  window.speechSynthesis.addEventListener('voiceschanged', ttsVoicesChangedHandler)
}

const progressFillRef = ref(null)

const completedCount = computed(() => tasks.value.filter((task) => task.completed).length)
const pendingCount = computed(() => tasks.value.length - completedCount.value)
const progressValue = computed(() => {
  if (!tasks.value.length) {
    return 0
  }

  return Math.round((completedCount.value / tasks.value.length) * 100)
})

// ── Pomodoro (local only, no Firestore) ─────────────────────────
const focusMinutes = 25
const shortBreakMinutes = 5
const longBreakMinutes = 15

const pomodoroGoalHours = ref(4)
const pomodoroPhase = ref('focus')
const pomodoroTimeLeft = ref(focusMinutes * 60)
const pomodoroRunning = ref(false)
const pomodoroSyncing = ref(false)
const pomodoroSyncLabel = ref('')
const closedBlocks = ref(0)
const focusAccumulatedSeconds = ref(0)
let pomodoroInterval = null
let pomodoroSyncTimeout = null

const phaseLabelMap = {
  focus: 'Concentracion',
  shortBreak: 'Descanso corto',
  longBreak: 'Descanso largo',
}

function getPhaseSeconds(phase) {
  if (phase === 'focus') return focusMinutes * 60
  if (phase === 'shortBreak') return shortBreakMinutes * 60
  return longBreakMinutes * 60
}

function formatClock(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

const phaseLabel = computed(() => phaseLabelMap[pomodoroPhase.value])
const phaseBadgeText = computed(() => {
  if (pomodoroPhase.value === 'focus') return `${focusMinutes}/${shortBreakMinutes}`
  if (pomodoroPhase.value === 'shortBreak') return `Descanso corto ${shortBreakMinutes}m`
  return `Descanso largo ${longBreakMinutes}m`
})
const clockText = computed(() => formatClock(pomodoroTimeLeft.value))
const currentGoalLabel = computed(() => `${pomodoroGoalHours.value}h`)
const focusedNowSeconds = computed(() => {
  if (pomodoroPhase.value !== 'focus') {
    return focusAccumulatedSeconds.value
  }

  const elapsedCurrent = getPhaseSeconds('focus') - pomodoroTimeLeft.value
  return focusAccumulatedSeconds.value + Math.max(elapsedCurrent, 0)
})
const focusProgress = computed(() => {
  const goalSeconds = pomodoroGoalHours.value * 3600
  if (!goalSeconds) return 0
  return Math.min(100, Math.round((focusedNowSeconds.value / goalSeconds) * 100))
})
const focusAccumulatedLabel = computed(() => {
  const hours = Math.floor(focusedNowSeconds.value / 3600)
  const minutes = Math.floor((focusedNowSeconds.value % 3600) / 60)
  return `${hours}h ${String(minutes).padStart(2, '0')}m`
})
const remainingFocusLabel = computed(() => {
  const goalSeconds = pomodoroGoalHours.value * 3600
  const remaining = Math.max(goalSeconds - focusedNowSeconds.value, 0)
  const hours = Math.floor(remaining / 3600)
  const minutes = Math.floor((remaining % 3600) / 60)
  return `${hours}h ${String(minutes).padStart(2, '0')}m`
})

function sendPomodoroNotification(title, body) {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, { body, icon: '/favicon.ico' })
  }
}

function requestNotificationPermission() {
  if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission()
  }
}

function moveToNextPhase({ countCompletedFocus }) {
  if (pomodoroPhase.value === 'focus') {
    if (countCompletedFocus) {
      closedBlocks.value += 1
      focusAccumulatedSeconds.value += getPhaseSeconds('focus')
    }

    if (closedBlocks.value > 0 && closedBlocks.value % 4 === 0) {
      pomodoroPhase.value = 'longBreak'
      pomodoroTimeLeft.value = getPhaseSeconds('longBreak')
      if (countCompletedFocus) {
        speak(`¡Excelente! Completaste 4 bloques de concentración. Toma un descanso largo de ${longBreakMinutes} minutos.`)
        sendPomodoroNotification('¡Descanso largo! 🎉', `Completaste 4 bloques. Descansa ${longBreakMinutes} minutos.`)
      }
      return false
    }

    pomodoroPhase.value = 'shortBreak'
    pomodoroTimeLeft.value = getPhaseSeconds('shortBreak')
    if (countCompletedFocus) {
      speak(`¡Muy bien! Terminaron los 25 minutos. Es hora de descansar ${shortBreakMinutes} minutos.`)
      sendPomodoroNotification('¡Hora de descansar! ⏰', `Terminaron los 25 minutos. Descansa ${shortBreakMinutes} minutos.`)
    }
    return false
  }

  pomodoroPhase.value = 'focus'
  pomodoroTimeLeft.value = getPhaseSeconds('focus')
  if (countCompletedFocus) {
    speak('¡Descanso terminado! Volvemos a concentración por 25 minutos.')
    sendPomodoroNotification('¡A concentrarse! 🎯', 'El descanso terminó. Comienza un nuevo bloque de 25 minutos.')
  }
  return true
}

function getNextFocusSync() {
  const now = new Date()
  const target = new Date(now)

  target.setMilliseconds(0)
  target.setSeconds(0)

  const minutesMod = target.getMinutes() % 5
  const minutesToAdd = (5 - minutesMod) % 5
  const isAlreadySynced = now.getSeconds() === 0 && now.getMilliseconds() === 0 && minutesMod === 0

  if (!isAlreadySynced) {
    target.setMinutes(target.getMinutes() + (minutesToAdd === 0 ? 5 : minutesToAdd))
  }

  return {
    delayMs: Math.max(target.getTime() - now.getTime(), 0),
    label: `${String(target.getHours()).padStart(2, '0')}:${String(target.getMinutes()).padStart(2, '0')}:00`,
  }
}

function clearPomodoroSync() {
  if (pomodoroSyncTimeout) {
    clearTimeout(pomodoroSyncTimeout)
    pomodoroSyncTimeout = null
  }

  pomodoroSyncing.value = false
  pomodoroSyncLabel.value = ''
}

function startPomodoroInterval() {
  if (pomodoroInterval) {
    clearInterval(pomodoroInterval)
  }

  pomodoroInterval = setInterval(() => {
    if (pomodoroTimeLeft.value > 0) {
      pomodoroTimeLeft.value -= 1
      return
    }

    const movedToFocus = moveToNextPhase({ countCompletedFocus: true })
    if (movedToFocus) {
      alignFocusStart()
    }
  }, 1000)
}

function alignFocusStart() {
  clearPomodoroSync()
  const { delayMs, label } = getNextFocusSync()

  if (delayMs === 0) {
    startPomodoroInterval()
    return
  }

  pomodoroSyncing.value = true
  pomodoroSyncLabel.value = label

  if (pomodoroInterval) {
    clearInterval(pomodoroInterval)
    pomodoroInterval = null
  }

  pomodoroSyncTimeout = setTimeout(() => {
    pomodoroSyncing.value = false
    pomodoroSyncLabel.value = ''
    startPomodoroInterval()
  }, delayMs)
}

function stopPomodoro() {
  if (pomodoroInterval) {
    clearInterval(pomodoroInterval)
    pomodoroInterval = null
  }
  clearPomodoroSync()
  pomodoroRunning.value = false
}

function startPomodoro() {
  if (pomodoroRunning.value) {
    return
  }

  requestNotificationPermission()
  pomodoroRunning.value = true

  if (pomodoroPhase.value === 'focus') {
    alignFocusStart()
    return
  }

  startPomodoroInterval()
}

function skipPhase() {
  const movedToFocus = moveToNextPhase({ countCompletedFocus: false })

  if (!pomodoroRunning.value) {
    return
  }

  if (movedToFocus) {
    alignFocusStart()
    return
  }

  clearPomodoroSync()
  startPomodoroInterval()
}

function resetPomodoro() {
  stopPomodoro()
  pomodoroPhase.value = 'focus'
  pomodoroTimeLeft.value = getPhaseSeconds('focus')
  closedBlocks.value = 0
  focusAccumulatedSeconds.value = 0
}

const guestStorageKey = 'nasdaq-mentor-guest-checklist'

// ── Evaluacion ───────────────────────────────────────────────────
// ── Fechas locales según ubicación ──────────────────────────────
function obtenerFechasLocales(dias = 5) {
  const fechas = [];
  for (let i = 0; i < dias; i++) {
    const fecha = new Date();
    fecha.setDate(fecha.getDate() - i);
    fechas.push(fecha.toLocaleString());
  }
  return fechas;
}


// Reloj local reactivo
const relojLocal = ref(new Date().toLocaleString())
let intervaloReloj = null

// Ciudad del usuario
const ciudad = ref('')

async function obtenerCiudadPorCoords(lat, lon) {
  try {
    const resp = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&accept-language=es`)
    const data = await resp.json()
    // Buscar ciudad, pueblo o localidad
    ciudad.value = data.address.city || data.address.town || data.address.village || data.address.hamlet || data.address.state || 'Desconocida'
  } catch {
    ciudad.value = 'Desconocida'
  }
}

function detectarCiudad() {
  if (!navigator.geolocation) {
    ciudad.value = 'No disponible'
    return
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      obtenerCiudadPorCoords(pos.coords.latitude, pos.coords.longitude)
    },
    () => {
      ciudad.value = 'No disponible'
    },
    { enableHighAccuracy: false, timeout: 6000 }
  )
}

onMounted(() => {
  intervaloReloj = setInterval(() => {
    relojLocal.value = new Date().toLocaleString()
  }, 1000)
  detectarCiudad()
})

onUnmounted(() => {
  if (intervaloReloj) clearInterval(intervaloReloj)
})

const evalOneR = ref(5)
const evalObjetivo = ref(58000)
const maxDailyLossUSD = ref(15)
const maxDailyLossInput = ref('15')
const evalCalculatorBalance = ref(0)
const evalCalculatorTarget = ref(0)
// Riesgo por trade en USD (antes era porcentaje)
const evalCalculatorRiskAmount = ref(1)
const evalCalculatorTrades = ref(1)
const tradesList = ref([])
const firestoreTradesList = ref([])
const ninjaExecutionList = ref([])
const ninjaTradesList = ref([])
const pnlChartRef = ref(null)
const chartFileInput = ref(null)
const uploadTargetDate = ref(null)
const chartsList = ref([])
const guestCharts = ref([])
const showChartsModal = ref(false)
const modalCharts = ref([])
const previewChart = ref(null)
const showNotesModal = ref(false)
const dayNotes = ref([])

function parseCalcNumber(value) {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : 0
}

function clampDailyLoss(value) {
  return Math.min(1000000, Math.max(1, Math.round(value * 100) / 100))
}

function onMaxDailyLossInput(event) {
  const value = event.target.value
  maxDailyLossInput.value = value

  if (value === '') {
    return
  }

  const parsed = Number(value)
  if (!Number.isFinite(parsed)) {
    return
  }

  maxDailyLossUSD.value = clampDailyLoss(parsed)
}

function commitMaxDailyLossInput() {
  if (maxDailyLossInput.value === '') {
    maxDailyLossInput.value = String(maxDailyLossUSD.value)
    return
  }

  const parsed = Number(maxDailyLossInput.value)
  if (!Number.isFinite(parsed)) {
    maxDailyLossInput.value = String(maxDailyLossUSD.value)
    return
  }

  const clamped = clampDailyLoss(parsed)
  maxDailyLossUSD.value = clamped
  maxDailyLossInput.value = String(clamped)
}
const pendingTrades = ref([])
const savingTrade = ref(false)
const savingChart = ref(false)
const riskDebug = ref({
  source: 'idle',
  checkedAt: '',
  currentSessionUsd: 0,
  currentLossUsedUSD: 0,
  maxDailyLossUSD: 0,
  blocked: false,
  pendingCount: 0,
  serverCount: 0,
  lockMessage: '',
})
const tradeInput = ref('')
const tradeError = ref('')
const tradeDate = ref(formatDateForInput(new Date()))
const tradeSession = ref('Sesion')
const tradeNote = ref('')
const tradeExitTactic = ref('')
const editingTradeId = ref(null)
const editingTradeDraft = ref(null)
const calendarMonth = ref(new Date(new Date().getFullYear(), new Date().getMonth(), 1))
let unsubscribeEval = null
let unsubscribeEvalTrades = null
let unsubscribeNinjaExecutions = null
let unsubscribeEvalCharts = null
let evalSaveTimer = null

const weekdayLabel = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM']
const exitTacticOptions = [
  'Objetivo alcanzado',
  'Stop alcanzado',
  'Operación a ninguna parte',
  'Comenzaba a invertirse',
  'No podía resistir el dolor',
  'Operación basura, no debí entrar',
]

function formatDateForInput(date) {
  const local = new Date(date)
  local.setMinutes(local.getMinutes() - local.getTimezoneOffset())
  return local.toISOString().slice(0, 10)
}

function formatDateCell(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return '--'
  }

  return `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`
}

function formatTimeFromDate(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return ''
  }
  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
}

function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.round(Number(ms || 0) / 1000))
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  if (hours > 0) {
    return `${hours}h ${String(minutes).padStart(2, '0')}m`
  }

  if (minutes > 0) {
    return `${minutes}m ${String(seconds).padStart(2, '0')}s`
  }

  return `${seconds}s`
}

function normalizeDate(value) {
  if (typeof value === 'string') {
    const localDateMatch = value.match(/^(\d{4})-(\d{2})-(\d{2})$/)
    if (localDateMatch) {
      const [, year, month, day] = localDateMatch
      return new Date(Number(year), Number(month) - 1, Number(day), 12, 0, 0, 0)
    }
  }

  const d = value instanceof Date ? value : new Date(value)
  if (Number.isNaN(d.getTime())) {
    return null
  }

  return d
}

function normalizeFirestoreDate(value) {
  if (!value) return null

  if (value instanceof Date) {
    return value
  }

  if (typeof value?.toDate === 'function') {
    return normalizeDate(value.toDate())
  }

  return normalizeDate(value)
}

function getInstrumentPointValue(instrument = '') {
  const symbol = String(instrument).toUpperCase()

  if (symbol.startsWith('MNQ')) return 2
  if (symbol.startsWith('NQ')) return 20
  if (symbol.startsWith('MES')) return 5
  if (symbol.startsWith('ES')) return 50
  if (symbol.startsWith('MYM')) return 0.5
  if (symbol.startsWith('YM')) return 5
  if (symbol.startsWith('M2K')) return 5
  if (symbol.startsWith('RTY')) return 50

  return 1
}

function normalizeNinjaAction(action = '') {
  return String(action).replace(/\s+/g, '').toLowerCase()
}

function getNinjaExecutionDate(execution) {
  return normalizeDate(execution.executionTime || execution.createdAt)
}

function isNinjaEntryAction(action) {
  return action === 'buy' || action === 'sellshort'
}

function getNinjaSideFromAction(action) {
  if (action === 'buy') return 'LONG'
  if (action === 'sellshort') return 'SHORT'
  return ''
}

function createNinjaTradeDraft(execution, action, executionDate) {
  return {
    side: getNinjaSideFromAction(action),
    instrument: execution.instrument || '',
    startedAt: executionDate,
    endedAt: executionDate,
    entryQuantity: 0,
    exitQuantity: 0,
    entryValue: 0,
    exitValue: 0,
    commission: 0,
    executionIds: [],
    orderIds: [],
  }
}

function addNinjaExecutionToDraft(draft, execution, action, executionDate) {
  const quantity = Math.abs(Number(execution.quantity || 0))
  const price = Number(execution.price || 0)
  const commission = Number(execution.commission || 0)

  if (!quantity || !Number.isFinite(price)) {
    return
  }

  draft.endedAt = executionDate || draft.endedAt
  draft.commission += Number.isFinite(commission) ? Math.abs(commission) : 0
  draft.executionIds.push(String(execution.executionId || execution.id || ''))

  if (execution.orderId) {
    draft.orderIds.push(String(execution.orderId))
  }

  if (draft.side === 'LONG') {
    if (action === 'buy') {
      draft.entryQuantity += quantity
      draft.entryValue += price * quantity
    } else if (action === 'sell') {
      draft.exitQuantity += quantity
      draft.exitValue += price * quantity
    }
    return
  }

  if (draft.side === 'SHORT') {
    if (action === 'sellshort') {
      draft.entryQuantity += quantity
      draft.entryValue += price * quantity
    } else if (action === 'buytocover') {
      draft.exitQuantity += quantity
      draft.exitValue += price * quantity
    }
  }
}

function buildClosedNinjaTrade(draft) {
  const closedQuantity = Math.min(draft.entryQuantity, draft.exitQuantity)
  if (!closedQuantity) {
    return null
  }

  const entryPrice = draft.entryValue / draft.entryQuantity
  const exitPrice = draft.exitValue / draft.exitQuantity
  const pointValue = getInstrumentPointValue(draft.instrument)
  const grossPnl = draft.side === 'LONG'
    ? (exitPrice - entryPrice) * closedQuantity * pointValue
    : (entryPrice - exitPrice) * closedQuantity * pointValue
  const pnl = grossPnl - draft.commission
  const rBase = Number.isFinite(evalOneR.value) && evalOneR.value > 0 ? evalOneR.value : 1
  const startedAt = draft.startedAt || draft.endedAt || new Date()
  const endedAt = draft.endedAt || startedAt
  const durationMs = Math.max(0, endedAt.getTime() - startedAt.getTime())
  const executionKey = draft.executionIds.filter(Boolean).join('_') || `${draft.instrument}_${endedAt.getTime()}`

  return {
    id: `ninja-${executionKey}`,
    source: 'ninjatrader',
    r: pnl / rBase,
    rBase,
    session: 'NinjaTrader',
    rules: 1,
    note: `${draft.instrument || 'Instrumento'} ${draft.side} ${pnl >= 0 ? 'WIN' : 'LOSS'}`,
    exitTactic: pnl >= 0 ? 'WIN' : 'LOSS',
    tradeDate: endedAt,
    createdAt: endedAt,
    clientId: null,
    compliance: null,
    chartUrl: null,
    instrument: draft.instrument,
    side: draft.side,
    contracts: closedQuantity,
    entryPrice,
    exitPrice,
    pnl,
    commission: draft.commission,
    durationMs,
    result: pnl >= 0 ? 'WIN' : 'LOSS',
    executionIds: draft.executionIds.filter(Boolean),
    orderIds: [...new Set(draft.orderIds.filter(Boolean))],
  }
}

function buildNinjaTradesFromExecutions(executions) {
  const sortedExecutions = [...executions].sort((a, b) => {
    const ta = getNinjaExecutionDate(a)?.getTime() ?? 0
    const tb = getNinjaExecutionDate(b)?.getTime() ?? 0
    return ta - tb
  })

  const trades = []
  const draftsByInstrument = new Map()

  sortedExecutions.forEach((execution) => {
    const action = normalizeNinjaAction(execution.action)
    const executionDate = getNinjaExecutionDate(execution) || new Date()
    const draftKey = `${execution.account || ''}::${execution.instrument || ''}`
    let draft = draftsByInstrument.get(draftKey) || null

    if (!draft && isNinjaEntryAction(action)) {
      draft = createNinjaTradeDraft(execution, action, executionDate)
      draftsByInstrument.set(draftKey, draft)
    }

    if (!draft) {
      return
    }

    addNinjaExecutionToDraft(draft, execution, action, executionDate)

    if (Number(execution.position || 0) === 0 && draft.exitQuantity > 0) {
      const closedTrade = buildClosedNinjaTrade(draft)
      if (closedTrade) {
        trades.push(closedTrade)
      }
      draftsByInstrument.delete(draftKey)
    }
  })

  return trades
}

function syncCombinedTrades() {
  const nextTrades = user.value
    ? [...firestoreTradesList.value, ...ninjaTradesList.value]
    : tradesList.value

  tradesList.value = nextTrades.sort((a, b) => {
    const ta = normalizeDate(a.createdAt)?.getTime() ?? 0
    const tb = normalizeDate(b.createdAt)?.getTime() ?? 0
    return tb - ta
  })
}

function refreshNinjaTrades() {
  ninjaTradesList.value = buildNinjaTradesFromExecutions(ninjaExecutionList.value)
  syncCombinedTrades()
}

function dateKey(value) {
  const d = normalizeDate(value)
  if (!d) return ''
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function chartsForDate(date) {
  const key = dateKey(date)
  const fromUser = chartsList.value.filter((c) => dateKey(c.createdAt) === key).map((c) => ({
    id: c.id,
    url: c.url,
    name: c.originalName || c.filename || 'chart.png',
    createdAt: c.createdAt,
  }))
  const fromGuest = guestCharts.value.filter((c) => dateKey(c.createdAt) === key).map((c) => ({
    id: c.id,
    // prefer remote URL, fallback to stored dataUrl or thumbnail
    url: c.url || c.dataUrl || c.thumb || null,
    name: c.originalName || c.name || 'upload.png',
    createdAt: c.createdAt,
  }))
  return [...fromUser, ...fromGuest]
}

const monthLabel = computed(() =>
  calendarMonth.value.toLocaleDateString('es-ES', {
    month: 'long',
    year: 'numeric',
  }),
)

const calendarSourceTrades = computed(() => {
  const mergedTrades = [...tradesList.value, ...pendingTrades.value]
  const seenClientIds = new Set()
  const seenIds = new Set()

  return mergedTrades.filter((trade) => {
    if (trade.clientId) {
      if (seenClientIds.has(trade.clientId)) {
        return false
      }
      seenClientIds.add(trade.clientId)
      return true
    }

    const tradeId = String(trade.id || '')
    if (!tradeId) {
      return true
    }

    if (seenIds.has(tradeId)) {
      return false
    }

    seenIds.add(tradeId)
    return true
  })
})

const monthTrades = computed(() => {
  const y = calendarMonth.value.getFullYear()
  const m = calendarMonth.value.getMonth()
  return calendarSourceTrades.value.filter((trade) => {
    const d = normalizeDate(trade.tradeDate || trade.createdAt)
    return d && d.getFullYear() === y && d.getMonth() === m
  })
})

// Suma de R del mes
const evalRMes = computed(() => monthTrades.value.reduce((sum, trade) => sum + trade.r, 0))
// USD del mes: suma de (r * rBase) de cada trade
const evalUsdMes = computed(() => monthTrades.value.reduce((sum, trade) => sum + (trade.r * (trade.rBase ?? evalOneR.value)), 0))
const evalTradesMes = computed(() => monthTrades.value.length)
const evalDiasActivosMes = computed(() => new Set(monthTrades.value.map((trade) => dateKey(trade.tradeDate || trade.createdAt))).size)
const evalDiasVerdesMes = computed(() => {
  const dayTotals = new Map()
  monthTrades.value.forEach((trade) => {
    const key = dateKey(trade.tradeDate || trade.createdAt)
    dayTotals.set(key, (dayTotals.get(key) || 0) + trade.r)
  })
  return Array.from(dayTotals.values()).filter((total) => total > 0).length
})
const evalWinRateMes = computed(() => {
  if (!monthTrades.value.length) return 0
  return Math.round((monthTrades.value.filter((trade) => trade.r > 0).length / monthTrades.value.length) * 100)
})

const calendarDayMap = computed(() => {
  const map = new Map()
  monthTrades.value.forEach((trade) => {
    const key = dateKey(trade.tradeDate || trade.createdAt)
    if (!key) return

    if (!map.has(key)) {
      map.set(key, { r: 0, trades: 0, usd: 0, tradeDetails: [], notes: [] })
    }

    const slot = map.get(key)
    const tradeUsd = trade.r * (typeof trade.rBase === 'number' ? trade.rBase : evalOneR.value)
    slot.r += trade.r
    slot.trades += 1
    slot.usd += tradeUsd
    slot.tradeDetails.push({
      id: trade.id,
      session: trade.session || 'Sesion',
      usd: tradeUsd,
      note: trade.note || '',
      exitTactic: trade.exitTactic || '',
    })
    // Agregar notas al array si existen
    if ((trade.note && trade.note.trim()) || trade.exitTactic) {
      slot.notes.push({
        session: trade.session || 'Sesion',
        usd: tradeUsd,
        note: trade.note || '',
        exitTactic: trade.exitTactic || '',
      })
    }
  })
  return map
})

const calendarCells = computed(() => {
  const year = calendarMonth.value.getFullYear()
  const month = calendarMonth.value.getMonth()
  const firstDay = new Date(year, month, 1)
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstWeekday = (firstDay.getDay() + 6) % 7
  const totalSlots = Math.ceil((firstWeekday + daysInMonth) / 7) * 7
  const cells = []

  for (let index = 0; index < totalSlots; index += 1) {
    const dayNumber = index - firstWeekday + 1
    const inMonth = dayNumber >= 1 && dayNumber <= daysInMonth
    const date = inMonth ? new Date(year, month, dayNumber) : null
    const key = inMonth ? dateKey(date) : ''
    const stats = key ? calendarDayMap.value.get(key) : null

    cells.push({
      key: key || `empty-${index}`,
      inMonth,
      date,
      dayNumber: inMonth ? dayNumber : '',
      r: stats?.r ?? 0,
      trades: stats?.trades ?? 0,
      usd: stats?.usd ?? 0,
      tradeDetails: stats?.tradeDetails ?? [],
      notes: stats?.notes ?? [],
    })
  }

  return cells
})

const calendarWeeks = computed(() => {
  const weeks = []
  for (let i = 0; i < calendarCells.value.length; i += 7) {
    weeks.push(calendarCells.value.slice(i, i + 7))
  }
  return weeks
})

const weeklySummaries = computed(() =>
  calendarWeeks.value.map((week, index) => {
    let r = 0
    let usd = 0
    let trades = 0
    let activeDays = 0
    week.forEach((day) => {
      if (!day.inMonth) return
      // Buscar los trades de ese día
      const tradesForDay = monthTrades.value.filter((trade) => {
        const d = normalizeDate(trade.tradeDate || trade.createdAt)
        return d && d.getDate() === day.date.getDate() && d.getMonth() === day.date.getMonth() && d.getFullYear() === day.date.getFullYear()
      })
      if (tradesForDay.length > 0) {
        activeDays += 1
      }
      trades += day.trades
      r += day.r
      // Sumar USD usando el rBase de cada trade
      usd += tradesForDay.reduce((sum, t) => sum + (t.r * (typeof t.rBase === 'number' ? t.rBase : evalOneR.value)), 0)
    })
    return {
      id: `week-${index + 1}`,
      weekNumber: index + 1,
      r,
      trades,
      activeDays,
      usd,
    }
  })
)

function isToday(date) {
  const today = new Date()
  return (
    date instanceof Date
    && date.getFullYear() === today.getFullYear()
    && date.getMonth() === today.getMonth()
    && date.getDate() === today.getDate()
  )
}

function goPrevMonth() {
  calendarMonth.value = new Date(calendarMonth.value.getFullYear(), calendarMonth.value.getMonth() - 1, 1)
}

function goNextMonth() {
  calendarMonth.value = new Date(calendarMonth.value.getFullYear(), calendarMonth.value.getMonth() + 1, 1)
}

function goCurrentMonth() {
  const now = new Date()
  calendarMonth.value = new Date(now.getFullYear(), now.getMonth(), 1)
}

function clearTradeForm() {
  tradeDate.value = formatDateForInput(new Date())
  tradeSession.value = 'Sesion'
  tradeNote.value = ''
  tradeExitTactic.value = ''
  tradeInput.value = ''
  tradeCompliance.value = null
  emotionalChecklist.value = {}
  emotionalLowScoreLockActive.value = false
  tradeError.value = ''
}

async function deleteCollectionDocsInBatches(collectionRef) {
  const snap = await getDocsFromServer(collectionRef)
  const docs = snap.docs
  const batchSize = 450

  for (let i = 0; i < docs.length; i += batchSize) {
    const batch = writeBatch(db)
    docs.slice(i, i + batchSize).forEach((docSnap) => {
      batch.delete(docSnap.ref)
    })
    await batch.commit()
  }
}

async function clearAllTrades() {
  const confirmed = typeof window !== 'undefined'
    ? window.confirm('¿Seguro que deseas borrar todos los trades guardados? Esta accion no se puede deshacer.')
    : true

  if (!confirmed) {
    return
  }

  tradeError.value = ''

  try {
    if (user.value) {
      const userId = user.value.uid
      const results = await Promise.allSettled([
        deleteCollectionDocsInBatches(collection(db, 'users', userId, 'trades')),
        deleteCollectionDocsInBatches(collection(db, 'users', userId, 'ninjaExecutions')),
      ])
      const failed = results.find((result) => result.status === 'rejected')

      if (failed) {
        console.error('Error al limpiar trades:', failed.reason)
        tradeError.value = 'No se pudieron borrar todos los trades. Despliega las reglas de Firestore actualizadas e intenta de nuevo.'
        return
      }

      pendingTrades.value = []
      firestoreTradesList.value = []
      ninjaExecutionList.value = []
      ninjaTradesList.value = []
      syncCombinedTrades()
    } else {
      tradesList.value = []
      persistEvalTrades()
    }

    clearTradeForm()
  } catch (err) {
    console.error('Error al limpiar trades:', err)
    tradeError.value = 'No se pudieron borrar los trades. Revisa tu conexion o permisos de Firestore.'
  }
}

const evalCalculatorNeededGain = computed(() => Math.max(0, evalCalculatorTarget.value - evalCalculatorBalance.value))
const evalCalculatorNeededGainPct = computed(() => {
  if (!evalCalculatorBalance.value) return 0
  return (evalCalculatorNeededGain.value / evalCalculatorBalance.value) * 100
})
// nota: `evalCalculatorRiskAmount` ahora es un ref en USD, no un cálculo porcentual
const evalCalculatorRewardPerTrade = computed(() => {
  const trades = Math.max(1, Math.round(evalCalculatorTrades.value || 1))
  if (!trades) return 0
  return evalCalculatorNeededGain.value / trades
})
const evalCalculatorRequiredRr = computed(() => {
  const riskAmount = evalCalculatorRiskAmount.value
  if (!riskAmount) return 0
  return evalCalculatorRewardPerTrade.value / riskAmount
})
const evalCalculatorRequiredRewardPct = computed(() => {
  if (!evalCalculatorBalance.value) return 0
  return (evalCalculatorRewardPerTrade.value / evalCalculatorBalance.value) * 100
})
const evalCalculatorRrLabel = computed(() => {
  const rr = evalCalculatorRequiredRr.value
  if (!Number.isFinite(rr)) return '—'
  return `${rr.toFixed(2)}:1`
})
const evalTotalR = computed(() => tradesList.value.reduce((sum, t) => sum + t.r, 0))
const evalTotalUSD = computed(() =>
  tradesList.value.reduce(
    (sum, trade) => sum + (trade.r * (typeof trade.rBase === 'number' ? trade.rBase : evalOneR.value)),
    0,
  ),
)
const evalRestanR = computed(() => {
  if (!evalOneR.value) return 0
  return (evalObjetivo.value - evalTotalUSD.value) / evalOneR.value
})
const evalRestanUSD = computed(() => evalObjetivo.value - evalTotalUSD.value)
const evalProgress = computed(() => {
  if (!evalObjetivo.value) return 0
  return Math.min(100, Math.round((evalTotalUSD.value / evalObjetivo.value) * 100))
})

const riskResetUtcHour = 0

function getRiskSessionStart(referenceMs = Date.now()) {
  const now = new Date(referenceMs)
  const start = new Date(Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    riskResetUtcHour,
    0,
    0,
    0,
  ))

  if (referenceMs < start.getTime()) {
    start.setUTCDate(start.getUTCDate() - 1)
  }

  return start
}

function getNextRiskReset(referenceMs = Date.now()) {
  const next = getRiskSessionStart(referenceMs)
  next.setUTCDate(next.getUTCDate() + 1)
  return next
}

function formatCountdownTo(targetMs, nowMs) {
  const diff = Math.max(0, targetMs - nowMs)
  const totalMinutes = Math.ceil(diff / 60000)
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}

function getTradeTimestamp(trade) {
  return normalizeDate(trade.createdAt || trade.tradeDate)
}

function isTradeInCurrentRiskSession(trade, nowMs = cooldownNow.value) {
  const nzStartMs = getRiskSessionStart(nowMs).getTime()
  const d = getTradeTimestamp(trade)
  if (!d) return false
  return d.getTime() >= nzStartMs
}

function getTradeUsdAmount(trade) {
  return trade.r * (typeof trade.rBase === 'number' ? trade.rBase : evalOneR.value)
}

const evalTradesToday = computed(() => {
  const nowMs = cooldownNow.value
  const riskTrades = [...pendingTrades.value, ...tradesList.value]
  const seenClientIds = new Set()
  const uniqueRiskTrades = riskTrades.filter((trade) => {
    if (!trade.clientId) return true
    if (seenClientIds.has(trade.clientId)) return false
    seenClientIds.add(trade.clientId)
    return true
  })

  return uniqueRiskTrades.filter((t) => isTradeInCurrentRiskSession(t, nowMs))
})
const evalTradesHoy = computed(() => evalTradesToday.value.length)
const evalRHoy = computed(() => evalTradesToday.value.reduce((sum, t) => sum + t.r, 0))
const evalUsdHoy = computed(() =>
  evalTradesToday.value.reduce(
    (sum, trade) => sum + (trade.r * (typeof trade.rBase === 'number' ? trade.rBase : evalOneR.value)),
    0,
  ),
)
const dailyLossUsedUSD = computed(() => Math.max(0, -evalUsdHoy.value))
const dailyLossRemainingUSD = computed(() => Math.max(maxDailyLossUSD.value - dailyLossUsedUSD.value, 0))
const dailyLossProgress = computed(() => {
  if (!maxDailyLossUSD.value) return 0
  return Math.min(100, Math.round((dailyLossUsedUSD.value / maxDailyLossUSD.value) * 100))
})
const dailyLossLimitReached = computed(() =>
  maxDailyLossUSD.value > 0 && dailyLossUsedUSD.value >= maxDailyLossUSD.value,
)
const evalWinRate = computed(() => {
  if (!tradesList.value.length) return 0
  return Math.round((tradesList.value.filter((t) => t.r > 0).length / tradesList.value.length) * 100)
})

// ── Checklist emocional & Disciplina ──────────────────────────────
const emotionalChecklistOptions = [
  {
    key: 'fisico',
    options: [
      { score: 0, label: 'Fisico - mal' },
      { score: 1, label: 'Salud OK, energia, dormir' },
      { score: 2, label: 'Rebosante' },
    ],
  },
  {
    key: 'perdidasDia',
    options: [
      { score: 0, label: 'Perdidas dia' },
      { score: 1, label: 'Dia anterior mixto o sin operar' },
      { score: 2, label: 'Ganancias dia' },
    ],
  },
  {
    key: 'preparacion',
    options: [
      { score: 0, label: 'No preparado' },
      { score: 1, label: 'Medianamente preparado' },
      { score: 2, label: 'Muy preparado' },
    ],
  },
  {
    key: 'animo',
    options: [
      { score: 0, label: 'Desanimado' },
      { score: 1, label: 'Animo regular' },
      { score: 2, label: 'Muy animado' },
    ],
  },
  {
    key: 'ocupacion',
    options: [
      { score: 0, label: 'Muy ocupado' },
      { score: 1, label: 'Con lo normal en el plato' },
      { score: 2, label: 'Libre' },
    ],
  },
]
const emotionalChecklist = ref({})
const emotionalLowScoreLockActive = ref(false)
const tradeCompliance = ref(null)   // 'segui' | 'parcial' | 'fallo' | null
const showBigFiveTest = ref(false)
const weeklyDisciplineBarRef = ref(null)
const operationLockUntil = ref(0)
const operationLockStorageKey = 'nasdaq-mentor-operation-lock-until'
const emotionalChecklistStorageKey = 'nasdaq-mentor-emotional-checklist'

function applyOperationLock(minutes) {
  const nextLockUntil = Date.now() + (minutes * 60 * 1000)
  operationLockUntil.value = Math.max(operationLockUntil.value, nextLockUntil)
}

function loadOperationLock() {
  if (typeof window === 'undefined') {
    return
  }

  const savedLockUntil = Number(localStorage.getItem(operationLockStorageKey))
  if (Number.isFinite(savedLockUntil) && savedLockUntil > Date.now()) {
    operationLockUntil.value = savedLockUntil
    return
  }

  localStorage.removeItem(operationLockStorageKey)
}

function persistOperationLock() {
  if (typeof window === 'undefined') {
    return
  }

  if (operationLockUntil.value > Date.now()) {
    localStorage.setItem(operationLockStorageKey, String(operationLockUntil.value))
  } else {
    localStorage.removeItem(operationLockStorageKey)
  }
}

function loadEmotionalChecklist() {
  if (typeof window === 'undefined') {
    return
  }

  try {
    const raw = localStorage.getItem(emotionalChecklistStorageKey)
    if (!raw) {
      return
    }

    const parsed = JSON.parse(raw)
    if (!parsed || typeof parsed !== 'object') {
      return
    }

    const nextChecklist = {}
    emotionalChecklistOptions.forEach((row) => {
      const value = Number(parsed[row.key])
      if (row.options.some((option) => option.score === value)) {
        nextChecklist[row.key] = value
      }
    })
    emotionalChecklist.value = nextChecklist
  } catch {
    localStorage.removeItem(emotionalChecklistStorageKey)
  }
}

function persistEmotionalChecklist() {
  if (typeof window === 'undefined') {
    return
  }

  localStorage.setItem(emotionalChecklistStorageKey, JSON.stringify(emotionalChecklist.value))
}

const operationLockRemainingMs = computed(() =>
  Math.max(0, operationLockUntil.value - cooldownNow.value),
)

const isOperationLocked = computed(() => operationLockRemainingMs.value > 0 || dailyLossLimitReached.value)

const operationLockCountdown = computed(() => {
  if (!isOperationLocked.value) {
    return ''
  }

  const totalSeconds = Math.ceil(operationLockRemainingMs.value / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})

const emotionalChecklistComplete = computed(() =>
  emotionalChecklistOptions.every((row) => Number.isFinite(emotionalChecklist.value[row.key])),
)

const emotionalChecklistScore = computed(() =>
  emotionalChecklistOptions.reduce((total, row) => {
    const value = emotionalChecklist.value[row.key]
    return total + (Number.isFinite(value) ? value : 0)
  }, 0),
)

const emotionalChecklistStatus = computed(() => {
  if (!emotionalChecklistComplete.value) {
    return {
      label: 'Completa el checklist',
      className: 'emotional-score--pending',
      speakText: '',
    }
  }

  const score = emotionalChecklistScore.value
  if (score < 5) {
    return {
      label: 'No operar',
      className: 'emotional-score--danger',
      speakText: 'Checklist emocional menor a cinco. No operes por treinta minutos.',
    }
  }

  if (score === 7 || score === 8) {
    return {
      label: 'Bien',
      className: 'emotional-score--good',
      speakText: 'Checklist emocional en zona verde. Estas listo para operar.',
    }
  }

  return {
    label: 'Atencion',
    className: 'emotional-score--attention',
    speakText: 'Checklist emocional en zona de atencion. Opera con cuidado.',
  }
})

function selectEmotionalChecklistValue(key, score) {
  emotionalChecklist.value = {
    ...emotionalChecklist.value,
    [key]: score,
  }

  if (!emotionalChecklistComplete.value) {
    emotionalLowScoreLockActive.value = false
    return
  }

  if (emotionalChecklistScore.value < 5) {
    if (!emotionalLowScoreLockActive.value) {
      speak(emotionalChecklistStatus.value.speakText)
      applyOperationLock(30)
      emotionalLowScoreLockActive.value = true
    }
    return
  }

  emotionalLowScoreLockActive.value = false
  speak(emotionalChecklistStatus.value.speakText)
}

function selectTradeCompliance(value) {
  tradeCompliance.value = tradeCompliance.value === value ? null : value

  if (tradeCompliance.value === 'segui') {
    speak('Excelente disciplina. Trade validado.')
  } else if (tradeCompliance.value === 'parcial') {
    speak('Cumplimiento parcial. Revisa qué faltó.')
    applyOperationLock(10)
  } else if (tradeCompliance.value === 'fallo') {
    speak('Alerta de disciplina. Detén la operativa y revisa tus reglas.')
    applyOperationLock(20)
  }
}

function openBigFiveTest() {
  showBigFiveTest.value = true
}

function closeBigFiveTest() {
  showBigFiveTest.value = false
}

async function saveBigFiveResults(testData) {
  if (user.value) {
    try {
      await addDoc(collection(db, 'users', user.value.uid, 'bigfive_tests'), {
        results: testData.results,
        timestamp: testData.timestamp,
        createdAt: serverTimestamp(),
      })
      speak('Resultados del test guardados correctamente.')
    } catch (err) {
      console.error('Error al guardar resultados del test:', err)
    }
  } else {
    // Guardar en localStorage para usuarios no autenticados
    const testResults = JSON.parse(localStorage.getItem('bigfive_tests') || '[]')
    testResults.push(testData)
    localStorage.setItem('bigfive_tests', JSON.stringify(testResults))
  }
}

function getWeekStart() {
  const now = new Date()
  const day = now.getDay()
  const diff = day === 0 ? -6 : 1 - day
  const monday = new Date(now)
  monday.setDate(now.getDate() + diff)
  monday.setHours(0, 0, 0, 0)
  return monday
}

const weeklyTrades = computed(() => {
  const weekStart = getWeekStart()
  return tradesList.value.filter((t) => {
    const d = normalizeDate(t.tradeDate || t.createdAt)
    return d && d >= weekStart
  })
})

const weeklyStats = computed(() => {
  let segui = 0
  let parcial = 0
  let fallo = 0
  weeklyTrades.value.forEach((t) => {
    if (t.compliance === 'segui') segui++
    else if (t.compliance === 'parcial') parcial++
    else if (t.compliance === 'fallo') fallo++
  })
  return { segui, parcial, fallo, total: weeklyTrades.value.length }
})

const weeklyDisciplineScore = computed(() => {
  const { segui, parcial, fallo } = weeklyStats.value
  return segui * 20 + parcial * 10 + fallo * (-20)
})

const weeklyDisciplinePercent = computed(() =>
  Math.max(0, Math.min(100, weeklyDisciplineScore.value)),
)

function getOperationLockMessage() {
  if (operationLockRemainingMs.value > 0) {
    return `Operativa bloqueada. Espera ${operationLockCountdown.value} antes de guardar otro trade.`
  }

  if (emotionalChecklistComplete.value && emotionalChecklistScore.value < 5) {
    return 'Operativa bloqueada por checklist emocional menor a 5. Actualiza el checklist cuando estes en condiciones de operar.'
  }

  if (dailyLossLimitReached.value) {
    const nowMs = cooldownNow.value
    const nextReset = getNextRiskReset(nowMs)
    const waitText = formatCountdownTo(nextReset.getTime(), nowMs)
    return `Operativa pausada por pérdida diaria máxima: llevas -$${dailyLossUsedUSD.value.toFixed(2)} de $${maxDailyLossUSD.value.toFixed(2)}. Se habilita al reinicio diario de riesgo (00:00 UTC), en ${waitText}.`
  }

  return ''
}

const complianceTitle = computed(() => {
  if (tradeCompliance.value === 'segui') return 'Seguí'
  if (tradeCompliance.value === 'parcial') return 'Parcial'
  if (tradeCompliance.value === 'fallo') return 'No seguí'
  return 'Selecciona el cumplimiento del trade'
})

const complianceCopy = computed(() => {
  if (tradeCompliance.value === 'segui') return 'Excelente disciplina. Trade validado.'
  if (tradeCompliance.value === 'parcial') return 'Cumplimiento parcial. Revisa qué faltó.'
  if (tradeCompliance.value === 'fallo') return 'Alerta de disciplina. Detén la operativa y revisa tus reglas.'
  return 'Define si seguiste tus reglas al operar este trade.'
})

const emotionalCopy = computed(() => {
  if (!emotionalChecklistComplete.value) {
    return 'Completa las 5 filas antes de operar. El puntaje define si puedes registrar trades.'
  }

  if (emotionalChecklistScore.value < 5) {
    return 'Puntaje menor a 5: no operes. La operativa queda bloqueada por 30 minutos.'
  }

  if (emotionalChecklistScore.value === 7 || emotionalChecklistScore.value === 8) {
    return 'Puntaje 7-8: zona bien. Mantén la disciplina.'
  }

  return 'Puntaje 5-6 o 9-10: zona de atención. Opera con tamaño y foco controlados.'
})

const lockoutCopy = computed(() => {
  return getOperationLockMessage()
})

const guestEvalKey = 'nasdaq-mentor-guest-eval'
const guestEvalTradesKey = 'nasdaq-mentor-guest-trades'

function loadEval() {
  try {
    const raw = localStorage.getItem(guestEvalKey)
    if (raw) {
      const parsed = JSON.parse(raw)
      evalOneR.value = typeof parsed.oneR === 'number' ? parsed.oneR : 5
      evalObjetivo.value = typeof parsed.objetivo === 'number' ? parsed.objetivo : 58000
      if (typeof parsed.maxDailyLossUSD === 'number') {
        maxDailyLossUSD.value = parsed.maxDailyLossUSD
      } else if (typeof parsed.maxDailyLossR === 'number') {
        maxDailyLossUSD.value = parsed.maxDailyLossR * evalOneR.value
      } else {
        maxDailyLossUSD.value = 15
      }
    }
    const rawTrades = localStorage.getItem(guestEvalTradesKey)
    if (rawTrades) {
      const parsed = JSON.parse(rawTrades)
      tradesList.value = Array.isArray(parsed)
        ? parsed
            .map((t) => ({
              ...t,
              tradeDate: normalizeDate(t.tradeDate),
              createdAt: normalizeDate(t.createdAt) || new Date(),
            }))
            .sort((a, b) => {
              const ta = normalizeDate(a.createdAt)?.getTime() ?? 0
              const tb = normalizeDate(b.createdAt)?.getTime() ?? 0
              return tb - ta
            })
        : []
    }
  } catch {
    // ignore
  }
  // load guest charts from localStorage
  loadGuestCharts()
}

function loadGuestCharts() {
  try {
    const raw1 = localStorage.getItem('nasdaq-mentor-uploaded-charts')
    const raw2 = localStorage.getItem('nasdaq-mentor-saved-charts')
    const arr1 = raw1 ? JSON.parse(raw1) : []
    const arr2 = raw2 ? JSON.parse(raw2) : []
    // normalize to same shape: { id, createdAt: Date, dataUrl, originalName }
    const merged = [...arr1, ...arr2].map((c) => ({
      id: c.id || `guest-${Date.now()}`,
      createdAt: normalizeDate(c.createdAt) || normalizeDate(new Date()),
      // prefer full url, then legacy dataUrl, then thumbnail `thumb`
      dataUrl: c.dataUrl || c.url || c.thumb || null,
      originalName: c.name || c.originalName || 'upload.png',
    }))
    guestCharts.value = merged
  } catch (err) {
    guestCharts.value = []
  }
}

function persistEval() {
  localStorage.setItem(
    guestEvalKey,
    JSON.stringify({ oneR: evalOneR.value, objetivo: evalObjetivo.value, maxDailyLossUSD: maxDailyLossUSD.value }),
  )
}

function persistEvalTrades() {
  localStorage.setItem(
    guestEvalTradesKey,
    JSON.stringify(
      tradesList.value.map((t) => ({
        ...t,
        tradeDate: normalizeDate(t.tradeDate)?.toISOString() ?? t.tradeDate,
        createdAt: t.createdAt instanceof Date ? t.createdAt.toISOString() : t.createdAt,
      })),
    ),
  )
}

async function createThumbnailFromDataUrl(dataUrl, maxWidth = 300) {
  return await new Promise((resolve) => {
    try {
      const img = new Image()
      img.onload = () => {
        const scale = Math.min(1, maxWidth / img.width)
        const canvas = document.createElement('canvas')
        canvas.width = Math.round(img.width * scale)
        canvas.height = Math.round(img.height * scale)
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        const thumbDataUrl = canvas.toDataURL('image/png', 0.8)
        resolve(thumbDataUrl)
      }
      img.onerror = () => resolve(null)
      img.src = dataUrl
    } catch (e) {
      resolve(null)
    }
  })
}

async function savePnlChart() {
  if (savingChart.value) return
  savingChart.value = true
  try {
    await nextTick()
    if (!pnlChartRef.value || typeof pnlChartRef.value.exportChartImage !== 'function') {
      console.warn('PnlChart export function not available')
      return
    }

    const pngDataUrl = await pnlChartRef.value.exportChartImage()
    if (!pngDataUrl) {
      console.warn('No chart image produced')
      return
    }

    // Download suppressed: we keep image in localStorage and optionally upload to Storage
    console.debug('savePnlChart: automatic download suppressed')

    // Save a small thumbnail in localStorage for guests (avoid storing full DataURLs)
    try {
      const key = 'nasdaq-mentor-saved-charts'
      const raw = localStorage.getItem(key)
      const arr = raw ? JSON.parse(raw) : []
      const thumb = await createThumbnailFromDataUrl(pngDataUrl, 300)
      arr.unshift({ id: `chart-${Date.now()}`, createdAt: new Date().toISOString(), thumb })
      // keep last 50
      localStorage.setItem(key, JSON.stringify(arr.slice(0, 50)))
    } catch (err) {
      console.warn('No se pudo guardar la miniatura en localStorage', err)
    }

    // If user is logged, upload to Firebase Storage and save record in Firestore
    if (user.value) {
      try {
        const storage = getStorage()
        const path = `users/${user.value.uid}/charts/pnl-${Date.now()}.png`
        const storageReference = sRef(storage, path)
        await uploadString(storageReference, pngDataUrl, 'data_url')
        const downloadUrl = await getDownloadURL(storageReference)
        await addDoc(collection(db, 'users', user.value.uid, 'charts'), {
          url: downloadUrl,
          filename: path,
          createdAt: serverTimestamp(),
        })
        .then((ref) => console.debug('savePnlChart: chart doc added', ref.id, downloadUrl))
      } catch (err) {
        console.error('Error subiendo gráfico a Storage/Firestore:', err)
      }
    }
  } catch (err) {
    console.error('Error al exportar gráfico:', err)
  } finally {
    savingChart.value = false
  }
}

function triggerChartFilePicker() {
  if (!chartFileInput.value) return
  chartFileInput.value.value = null
  chartFileInput.value.click()
}

function startUploadForDate(date) {
  uploadTargetDate.value = normalizeDate(date)
  triggerChartFilePicker()
}

async function onChartFileSelected(e) {
  const file = e.target.files && e.target.files[0]
  if (!file) return
  if (savingChart.value) return
  savingChart.value = true
  try {
    // read as data URL
    const dataUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result)
      reader.onerror = (err) => reject(err)
      reader.readAsDataURL(file)
    })

    // Local download suppressed (file stored in localStorage and uploaded when logged)
    console.debug('onChartFileSelected: automatic local download suppressed')

    // Save a small thumbnail in localStorage for guests (avoid storing full DataURLs)
    try {
      const key = 'nasdaq-mentor-uploaded-charts'
      const raw = localStorage.getItem(key)
      const arr = raw ? JSON.parse(raw) : []
      const thumb = await createThumbnailFromDataUrl(dataUrl, 300)
      const createdAtDate = uploadTargetDate.value ? new Date(uploadTargetDate.value.getFullYear(), uploadTargetDate.value.getMonth(), uploadTargetDate.value.getDate(), 12, 0, 0) : new Date()
      arr.unshift({ id: `upload-${Date.now()}`, createdAt: createdAtDate.toISOString(), name: file.name, dataUrl, thumb })
      localStorage.setItem(key, JSON.stringify(arr.slice(0, 50)))
    } catch (err) {
      console.warn('No se pudo guardar el archivo en localStorage', err)
    }

    // If logged, upload to Firebase Storage and register in Firestore
    if (user.value) {
      try {
        const storage = getStorage()
        const path = `users/${user.value.uid}/uploads/${Date.now()}-${file.name}`
        const storageRef = sRef(storage, path)
        await uploadString(storageRef, dataUrl, 'data_url')
        const downloadUrl = await getDownloadURL(storageRef)
        const createdAtValue = uploadTargetDate.value ? new Date(uploadTargetDate.value.getFullYear(), uploadTargetDate.value.getMonth(), uploadTargetDate.value.getDate(), 12, 0, 0) : serverTimestamp()
        await addDoc(collection(db, 'users', user.value.uid, 'charts'), {
          url: downloadUrl,
          filename: path,
          originalName: file.name,
          createdAt: createdAtValue,
        })
        .then((ref) => console.debug('onChartFileSelected: chart doc added', ref.id, downloadUrl))
        // clear upload target after successful upload
        uploadTargetDate.value = null
      } catch (err) {
        console.error('Error subiendo archivo a Storage/Firestore:', err)
      }
    }
  } catch (err) {
    console.error('Error leyendo/subiendo archivo:', err)
  } finally {
    savingChart.value = false
    // reset target date if user cancelled or ended
    uploadTargetDate.value = null
  }
}

function stopEvalSubscription() {
  if (unsubscribeEval) {
    unsubscribeEval()
    unsubscribeEval = null
  }
  if (unsubscribeEvalTrades) {
    unsubscribeEvalTrades()
    unsubscribeEvalTrades = null
  }
  if (unsubscribeNinjaExecutions) {
    unsubscribeNinjaExecutions()
    unsubscribeNinjaExecutions = null
  }

  if (typeof unsubscribeEvalCharts !== 'undefined' && unsubscribeEvalCharts) {
    unsubscribeEvalCharts()
    unsubscribeEvalCharts = null
  }

  pendingTrades.value = []
  firestoreTradesList.value = []
  ninjaExecutionList.value = []
  ninjaTradesList.value = []
}

function subscribeToEval(userId) {
  stopEvalSubscription()

  unsubscribeEval = onSnapshot(doc(db, 'users', userId, 'eval', 'settings'), (snap) => {
    if (snap.exists()) {
      const data = snap.data()
      evalOneR.value = data.oneR ?? 5
      evalObjetivo.value = data.objetivo ?? 58000
      if (typeof data.maxDailyLossUSD === 'number') {
        maxDailyLossUSD.value = data.maxDailyLossUSD
      } else if (typeof data.maxDailyLossR === 'number') {
        maxDailyLossUSD.value = data.maxDailyLossR * evalOneR.value
      } else {
        maxDailyLossUSD.value = 15
      }
    }
  }, (err) => {
    console.error('subscribeToEval: eval settings snapshot error', err)
  })

  unsubscribeEvalTrades = onSnapshot(collection(db, 'users', userId, 'trades'), (snap) => {
    const nextTrades = snap.docs
      .map((d) => ({
        id: d.id,
        r: d.data().r ?? 0,
        session: d.data().session ?? 'Sesion',
        rules: d.data().rules ?? 1,
        note: d.data().note ?? '',
        exitTactic: d.data().exitTactic ?? '',
        tradeDate: normalizeFirestoreDate(d.data().tradeDate),
        createdAt: normalizeFirestoreDate(d.data().createdAt) ?? new Date(),
        rBase: d.data().rBase, // leer el valor de R guardado
        clientId: d.data().clientId ?? null,
        compliance: d.data().compliance ?? null,
        chartUrl: d.data().chartUrl ?? null,
      }))
      .sort((a, b) => {
        const ta = normalizeDate(a.createdAt)?.getTime() ?? 0
        const tb = normalizeDate(b.createdAt)?.getTime() ?? 0
        return tb - ta
      })

    firestoreTradesList.value = nextTrades
    syncCombinedTrades()

    const confirmedClientIds = new Set(nextTrades.map((trade) => trade.clientId).filter(Boolean))
    if (confirmedClientIds.size) {
      pendingTrades.value = pendingTrades.value.filter(
        (trade) => !trade.clientId || !confirmedClientIds.has(trade.clientId),
      )
    }
  }, (err) => {
    console.error('subscribeToEval: trades snapshot error', err)
  })

  unsubscribeNinjaExecutions = onSnapshot(collection(db, 'users', userId, 'ninjaExecutions'), (snap) => {
    ninjaExecutionList.value = snap.docs.map((d) => {
      const data = d.data()

      return {
        id: d.id,
        account: data.account ?? '',
        instrument: data.instrument ?? '',
        action: data.action ?? '',
        quantity: Number(data.quantity || 0),
        price: Number(data.price || 0),
        commission: Number(data.commission || 0),
        executionId: data.executionId ?? d.id,
        orderId: data.orderId ?? '',
        orderName: data.orderName ?? '',
        position: Number(data.position || 0),
        marketPosition: data.marketPosition ?? '',
        executionTime: normalizeFirestoreDate(data.executionTime),
        createdAt: normalizeFirestoreDate(data.createdAt) ?? new Date(),
      }
    })

    refreshNinjaTrades()
  }, (err) => {
    console.error('subscribeToEval: ninja executions snapshot error', err)
  })

  // listen to uploaded charts for this user
  unsubscribeEvalCharts = onSnapshot(collection(db, 'users', userId, 'charts'), (snap) => {
    const mapped = snap.docs
      .map((d) => ({
        id: d.id,
        url: d.data().url ?? null,
        filename: d.data().filename ?? null,
        originalName: d.data().originalName ?? null,
        createdAt: normalizeFirestoreDate(d.data().createdAt) ?? new Date(),
      }))
      .sort((a, b) => (a.createdAt?.getTime() ?? 0) - (b.createdAt?.getTime() ?? 0))

    chartsList.value = mapped

    // For docs that only have a storage filename (legacy or missing url), try to resolve a download URL
    try {
      const storage = getStorage()
      mapped.forEach(async (entry) => {
        if (!entry.url && entry.filename) {
          try {
            const storageRef = sRef(storage, entry.filename)
            const dl = await getDownloadURL(storageRef)
            // update the entry in chartsList
            chartsList.value = chartsList.value.map((c) => (c.id === entry.id ? { ...c, url: dl } : c))
            // if modal is open and contains this chart, update modalCharts as well so the image appears
            if (showChartsModal.value && modalCharts.value && modalCharts.value.length) {
              modalCharts.value = modalCharts.value.map((c) => (c.id === entry.id ? { ...c, url: dl } : c))
            }
          } catch (err) {
            // ignore; leave url null
            console.debug('subscribeToEval: could not resolve download URL for', entry.filename, err)
          }
        }
      })
    } catch (e) {
      // ignore
    }

    try {
      console.debug('subscribeToEval: charts snapshot, count=', chartsList.value.length, chartsList.value[0])
    } catch (e) {
      // ignore
    }
  }, (err) => {
    console.error('subscribeToEval: charts snapshot error', err)
  })
}

function openChartsModal(date) {
  modalCharts.value = chartsForDate(date)
  showChartsModal.value = true
}

function closeChartsModal() {
  showChartsModal.value = false
  modalCharts.value = []
}

function openNotesModal(notes) {
  dayNotes.value = notes.map((note) => {
    if (typeof note === 'string') {
      return {
        session: 'Sesion',
        usd: 0,
        note,
        exitTactic: '',
      }
    }

    return {
      session: note.session || 'Sesion',
      usd: Number.isFinite(note.usd) ? note.usd : 0,
      note: note.note || '',
      exitTactic: note.exitTactic || '',
    }
  })
  showNotesModal.value = true
}

function closeNotesModal() {
  showNotesModal.value = false
  dayNotes.value = []
}

function openPreview(chart) {
  previewChart.value = chart
}

function closePreview() {
  previewChart.value = null
}

async function saveEvalSettings() {
  try {
    if (user.value) {
      await setDoc(
        doc(db, 'users', user.value.uid, 'eval', 'settings'),
        { oneR: evalOneR.value, objetivo: evalObjetivo.value, maxDailyLossUSD: maxDailyLossUSD.value },
        { merge: true },
      )
      return
    }
    persistEval()
  } catch (error) {
    authError.value = 'No se pudo sincronizar Meta de evaluacion.'
    console.error(error)
  }
}

function scheduleEvalSettingsSave() {
  if (evalSaveTimer) clearTimeout(evalSaveTimer)
  evalSaveTimer = setTimeout(() => {
    saveEvalSettings()
  }, 800)
}

function flushEvalSettingsSave() {
  if (evalSaveTimer) {
    clearTimeout(evalSaveTimer)
    evalSaveTimer = null
  }

  saveEvalSettings()
}

function handlePageHide() {
  flushEvalSettingsSave()
}

async function addTrade() {
  if (savingTrade.value) {
    return
  }

  savingTrade.value = true

  try {
  const lockMessage = getOperationLockMessage()
  riskDebug.value = {
    ...riskDebug.value,
    source: 'precheck-local',
    checkedAt: new Date().toLocaleTimeString(),
    currentSessionUsd: evalUsdHoy.value,
    currentLossUsedUSD: dailyLossUsedUSD.value,
    maxDailyLossUSD: maxDailyLossUSD.value,
    blocked: Boolean(lockMessage),
    pendingCount: pendingTrades.value.length,
    serverCount: tradesList.value.length,
    lockMessage,
  }
  if (lockMessage) {
    tradeError.value = lockMessage
    return
  }

  if (!emotionalChecklistComplete.value) {
    tradeError.value = 'Debes completar el checklist emocional antes de registrar un trade.'
    return
  }
  if (!tradeCompliance.value) {
    tradeError.value = 'Debes seleccionar el cumplimiento de reglas antes de guardar el trade.'
    return
  }
  const usdVal = parseFloat(tradeInput.value)
  if (!Number.isFinite(usdVal) || usdVal === 0) {
    tradeError.value = 'Debes llenar el campo USD antes de guardar el trade.'
    return
  }

  if (!Number.isFinite(evalOneR.value) || evalOneR.value <= 0) {
    tradeError.value = 'Configura un valor valido en Seleccionador de R ($) para convertir USD a R.'
    return
  }

  const rVal = usdVal / evalOneR.value

  const parsedTradeDate = normalizeDate(tradeDate.value || new Date()) || new Date()

  const payload = {
    r: rVal,
    session: String(tradeSession.value || 'Sesion').slice(0, 40),
    note: String(tradeNote.value || '').slice(0, 140),
    exitTactic: String(tradeExitTactic.value || '').slice(0, 80),
    tradeDate: parsedTradeDate,
    rBase: evalOneR.value, // Guardar el valor de R global al crear el trade
    compliance: tradeCompliance.value,
    emotional: emotionalChecklistStatus.value.label,
    emotionalScore: emotionalChecklistScore.value,
    emotionalChecklist: { ...emotionalChecklist.value },
  }

  // Capturar imagen del chart (si disponible) añadiendo temporalmente el trade al listado
  let chartImage = null
  try {
    const tempId = `tmp-capture-${crypto.randomUUID ? crypto.randomUUID() : Date.now()}`
    tradesList.value.unshift({ id: tempId, ...payload, createdAt: new Date() })
    await nextTick()
    if (pnlChartRef.value && typeof pnlChartRef.value.exportChartImage === 'function') {
      chartImage = await pnlChartRef.value.exportChartImage()
    }
    // remover temporal
    tradesList.value = tradesList.value.filter((t) => t.id !== tempId)
  } catch (err) {
    console.error('Error al capturar imagen del chart:', err)
  }

  payload.chartImage = chartImage

  if (user.value) {
    try {
      const snap = await getDocsFromServer(collection(db, 'users', user.value.uid, 'trades'))
      const serverTrades = snap.docs.map((d) => ({
        r: d.data().r ?? 0,
        rBase: d.data().rBase,
        tradeDate: normalizeFirestoreDate(d.data().tradeDate),
        createdAt: normalizeFirestoreDate(d.data().createdAt) ?? new Date(),
        clientId: d.data().clientId ?? null,
      }))

      const allRiskTrades = [...pendingTrades.value, ...serverTrades]
      const seenClientIds = new Set()
      const dedupedTrades = allRiskTrades.filter((trade) => {
        if (!trade.clientId) return true
        if (seenClientIds.has(trade.clientId)) return false
        seenClientIds.add(trade.clientId)
        return true
      })

      const nowMs = Date.now()
      const currentSessionUsd = dedupedTrades
        .filter((trade) => isTradeInCurrentRiskSession(trade, nowMs))
        .reduce((sum, trade) => sum + getTradeUsdAmount(trade), 0)

      const currentLossUsedUSD = Math.max(0, -currentSessionUsd)
      riskDebug.value = {
        ...riskDebug.value,
        source: 'precheck-firestore',
        checkedAt: new Date().toLocaleTimeString(),
        currentSessionUsd,
        currentLossUsedUSD,
        maxDailyLossUSD: maxDailyLossUSD.value,
        blocked: currentLossUsedUSD >= maxDailyLossUSD.value,
        pendingCount: pendingTrades.value.length,
        serverCount: serverTrades.length,
        lockMessage: currentLossUsedUSD >= maxDailyLossUSD.value ? 'blocked-firestore' : '',
      }
      if (currentLossUsedUSD >= maxDailyLossUSD.value) {
        const nextReset = getNextRiskReset(nowMs)
        const waitText = formatCountdownTo(nextReset.getTime(), nowMs)
        tradeError.value = `Operativa pausada por pérdida diaria máxima: llevas -$${currentLossUsedUSD.toFixed(2)} de $${maxDailyLossUSD.value.toFixed(2)}. Se habilita al reinicio diario de riesgo (00:00 UTC), en ${waitText}.`
        return
      }
    } catch (err) {
      riskDebug.value = {
        ...riskDebug.value,
        source: 'firestore-error',
        checkedAt: new Date().toLocaleTimeString(),
        lockMessage: 'firestore-check-failed',
      }
      tradeError.value = 'No se pudo sincronizar con Firestore para validar el riesgo diario. Intenta de nuevo.'
      console.error('Error al sincronizar riesgo diario desde Firestore:', err)
      return
    }
  }

  if (user.value) {
    const clientId = crypto.randomUUID()
    pendingTrades.value.unshift({
      id: `tmp-${clientId}`,
      ...payload,
      clientId,
      createdAt: new Date(),
    })

    try {
      // If we captured a chart image (data URL), upload to Firebase Storage first
      if (payload.chartImage) {
        try {
          const storage = getStorage()
          const path = `users/${user.value.uid}/trades/${clientId}/pnl.png`
          const storageRef = sRef(storage, path)
          await uploadString(storageRef, payload.chartImage, 'data_url')
          const downloadUrl = await getDownloadURL(storageRef)
          payload.chartUrl = downloadUrl
              console.debug('addTrade: uploaded chart for trade', clientId, downloadUrl)
          // Remove heavy base64 blob before saving in Firestore
          delete payload.chartImage
        } catch (err) {
          console.error('Error subiendo chart al storage dentro de addTrade:', err)
          // proceed without chartUrl
        }
      }

      await addDoc(collection(db, 'users', user.value.uid, 'trades'), {
        ...payload,
        clientId,
        createdAt: serverTimestamp(),
      })
    } catch (err) {
      pendingTrades.value = pendingTrades.value.filter((trade) => trade.clientId !== clientId)
      tradeError.value = 'Error al guardar el trade. Verifica tu conexión o permisos.'
      console.error('Error al guardar trade en Firestore:', err)
      return
    }
  } else {
    tradesList.value.unshift({
      id: crypto.randomUUID(),
      ...payload,
      createdAt: new Date(),
    })
    persistEvalTrades()
  }

  clearTradeForm()
  } finally {
    riskDebug.value = {
      ...riskDebug.value,
      source: 'finally',
      checkedAt: new Date().toLocaleTimeString(),
    }
    savingTrade.value = false
  }
}

function startEditTrade(trade) {
  if (trade.source === 'ninjatrader') {
    tradeError.value = 'Los trades sincronizados desde NinjaTrader se calculan automaticamente y no se editan aqui.'
    return
  }

  editingTradeId.value = trade.id
  editingTradeDraft.value = {
    usd: Number.isFinite(trade.rBase) && trade.rBase > 0
      ? (trade.r * trade.rBase)
      : (trade.r * (trade.rBase ?? evalOneR.value)),
    session: trade.session || 'Sesion',
    note: trade.note || '',
    exitTactic: trade.exitTactic || '',
    tradeDate: formatDateForInput(normalizeDate(trade.tradeDate || trade.createdAt) || new Date()),
  }
}

function cancelEditTrade() {
  editingTradeId.value = null
  editingTradeDraft.value = null
  tradeError.value = ''
}

async function saveEditedTrade(tradeId) {
  const currentTrade = tradesList.value.find((trade) => trade.id === tradeId)
  if (!currentTrade || !editingTradeDraft.value) {
    cancelEditTrade()
    return
  }

  const usdValue = Number.parseFloat(editingTradeDraft.value.usd)
  if (!Number.isFinite(usdValue) || usdValue === 0) {
    tradeError.value = 'Debes ingresar un valor USD válido para guardar el trade.'
    return
  }

  const baseR = Number.isFinite(currentTrade.rBase) && currentTrade.rBase > 0
    ? currentTrade.rBase
    : evalOneR.value

  const parsedTradeDate = normalizeDate(editingTradeDraft.value.tradeDate || new Date()) || new Date()
  const nextPayload = {
    r: usdValue / baseR,
    session: String(editingTradeDraft.value.session || 'Sesion').slice(0, 40),
    note: String(editingTradeDraft.value.note || '').slice(0, 140),
    exitTactic: String(editingTradeDraft.value.exitTactic || '').slice(0, 80),
    tradeDate: parsedTradeDate,
    rBase: baseR,
  }

  if (user.value) {
    try {
      await updateDoc(doc(db, 'users', user.value.uid, 'trades', tradeId), nextPayload)
    } catch (err) {
      console.error('Error al editar trade en Firestore:', err)
      tradeError.value = 'No se pudo actualizar el trade. Revisa tu conexión o permisos.'
      return
    }
  } else {
    tradesList.value = tradesList.value.map((trade) => trade.id === tradeId ? {
      ...trade,
      ...nextPayload,
    } : trade)
    persistEvalTrades()
  }

  editingTradeId.value = null
  editingTradeDraft.value = null
  tradeError.value = ''
}

async function removeTrade(tradeId) {
  const currentTrade = tradesList.value.find((trade) => trade.id === tradeId)
  if (currentTrade?.source === 'ninjatrader') {
    tradeError.value = 'Los trades de NinjaTrader vienen de ejecuciones sincronizadas y no se borran desde el diario manual.'
    return
  }

  if (user.value) {
    await deleteDoc(doc(db, 'users', user.value.uid, 'trades', tradeId))
    return
  }
  tradesList.value = tradesList.value.filter((t) => t.id !== tradeId)
  persistEvalTrades()
}

async function removeChart(chartId) {
  const confirmed = typeof window !== 'undefined' ? window.confirm('Eliminar este gráfico?') : true
  if (!confirmed) return

  // find entry (may be in chartsList or guestCharts)
  const entry = chartsList.value.find((c) => c.id === chartId) || guestCharts.value.find((c) => c.id === chartId) || null

  // Optimistic UI update: remove from lists immediately so user sees real-time change
  chartsList.value = chartsList.value.filter((c) => c.id !== chartId)
  guestCharts.value = guestCharts.value.filter((c) => c.id !== chartId)
  modalCharts.value = modalCharts.value.filter((c) => c.id !== chartId)

  // persist guest localStorage removals
  try {
    const key1 = 'nasdaq-mentor-uploaded-charts'
    const raw1 = localStorage.getItem(key1)
    if (raw1) {
      const arr1 = JSON.parse(raw1).filter((c) => c.id !== chartId)
      localStorage.setItem(key1, JSON.stringify(arr1))
    }
  } catch (e) {
    // ignore
  }
  try {
    const key2 = 'nasdaq-mentor-saved-charts'
    const raw2 = localStorage.getItem(key2)
    if (raw2) {
      const arr2 = JSON.parse(raw2).filter((c) => c.id !== chartId)
      localStorage.setItem(key2, JSON.stringify(arr2))
    }
  } catch (e) {
    // ignore
  }

  // If user is signed in, attempt to delete storage object and Firestore doc (best-effort)
  if (user.value) {
    try {
      if (entry && entry.filename) {
        try {
          const storage = getStorage()
          const storageRef = sRef(storage, entry.filename)
          await deleteObject(storageRef)
        } catch (err) {
          console.debug('removeChart: could not delete storage object', err)
        }
      }

      await deleteDoc(doc(db, 'users', user.value.uid, 'charts', chartId))
    } catch (err) {
      console.error('Error removing chart:', err)
    }
  }
}

function loadTasks() {
  const rawTasks = localStorage.getItem(guestStorageKey)

  if (!rawTasks) {
    tasks.value = []
    return
  }

  try {
    const parsedTasks = JSON.parse(rawTasks)
    tasks.value = Array.isArray(parsedTasks) ? parsedTasks.slice(0, maxTasks) : []
  } catch {
    tasks.value = []
  }
}

function persistTasks() {
  localStorage.setItem(guestStorageKey, JSON.stringify(tasks.value))
}

function stopTaskSubscription() {
  if (unsubscribeTasks) {
    unsubscribeTasks()
    unsubscribeTasks = null
  }
}

function subscribeToTasks(userId) {
  stopTaskSubscription()

  unsubscribeTasks = onSnapshot(collection(db, 'users', userId, 'tasks'), (snapshot) => {
    const docs = snapshot.docs.map((taskDoc) => ({
      id: taskDoc.id,
      title: taskDoc.data().title ?? '',
      completed: Boolean(taskDoc.data().completed),
      order: taskDoc.data().order ?? null,
      createdAt: taskDoc.data().createdAt,
    }))

    docs.sort((a, b) => {
      if (a.order !== null && b.order !== null) return a.order - b.order
      if (a.order !== null) return -1
      if (b.order !== null) return 1
      const ta = a.createdAt?.toMillis() ?? 0
      const tb = b.createdAt?.toMillis() ?? 0
      return tb - ta
    })

    tasks.value = docs
  })
}

async function addTask() {
  const title = taskInput.value.trim()

  if (!title || tasks.value.length >= maxTasks) {
    return
  }

  const wordCount = title.split(/\s+/).filter(Boolean).length
  if (wordCount > 12) {
    taskError.value = 'Cada tarea puede tener maximo 12 palabras.'
    return
  }

  taskError.value = ''

  if (user.value) {
    const batch = writeBatch(db)
    const newRef = doc(collection(db, 'users', user.value.uid, 'tasks'))
    batch.set(newRef, {
      title,
      completed: false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      order: 0,
    })
    tasks.value.forEach((task, index) => {
      batch.update(doc(db, 'users', user.value.uid, 'tasks', task.id), { order: index + 1 })
    })
    await batch.commit()
  } else {
    tasks.value.unshift({
      id: crypto.randomUUID(),
      title,
      completed: false,
    })
  }

  taskInput.value = ''
}

async function toggleTask(taskId) {
  if (user.value) {
    const currentTask = tasks.value.find((task) => task.id === taskId)

    if (!currentTask) {
      return
    }

    await updateDoc(doc(db, 'users', user.value.uid, 'tasks', taskId), {
      completed: !currentTask.completed,
      updatedAt: serverTimestamp(),
    })
    return
  }

  tasks.value = tasks.value.map((task) => {
    if (task.id !== taskId) {
      return task
    }

    return {
      ...task,
      completed: !task.completed,
    }
  })
}

async function removeTask(taskId) {
  if (user.value) {
    await deleteDoc(doc(db, 'users', user.value.uid, 'tasks', taskId))
    return
  }

  tasks.value = tasks.value.filter((task) => task.id !== taskId)
}

async function handleGoogleLogin() {
  loading.value = true
  authError.value = ''

  try {
    await loginWithGoogle()
  } catch (error) {
    authError.value = 'No se pudo iniciar sesion con Google.'
    console.error(error)
  } finally {
    loading.value = false
  }
}

async function handleLogout() {
  loading.value = true
  authError.value = ''

  try {
    await logout()
  } catch (error) {
    authError.value = 'No se pudo cerrar sesion.'
    console.error(error)
  } finally {
    loading.value = false
  }
}

watch(tasks, () => {
  if (!user.value) {
    persistTasks()
  }
}, { deep: true })

watch(emotionalChecklist, () => {
  persistEmotionalChecklist()
}, { deep: true })

watch(operationLockUntil, () => {
  persistOperationLock()
})

watch(taskInput, () => {
  if (taskError.value) {
    taskError.value = ''
  }
})

watch(progressValue, (newVal) => {
  if (progressFillRef.value) {
    gsap.to(progressFillRef.value, {
      width: `${newVal}%`,
      duration: 0.6,
      ease: 'power2.out',
    })
  }
})

watch(weeklyDisciplinePercent, (val) => {
  if (weeklyDisciplineBarRef.value) {
    gsap.to(weeklyDisciplineBarRef.value, { width: `${val}%`, duration: 0.8, ease: 'power2.out' })
  }
})

watch(pomodoroGoalHours, (value) => {
  if (!Number.isFinite(value)) {
    pomodoroGoalHours.value = 4
    return
  }

  pomodoroGoalHours.value = Math.min(24, Math.max(1, Math.round(value)))
})

watch(maxDailyLossUSD, (value) => {
  if (!Number.isFinite(value)) {
    maxDailyLossUSD.value = 15
    return
  }

  const clamped = clampDailyLoss(value)
  if (clamped !== value) {
    maxDailyLossUSD.value = clamped
    return
  }

  maxDailyLossInput.value = String(clamped)
})

watch([evalOneR, evalObjetivo, maxDailyLossUSD], () => {
  scheduleEvalSettingsSave()
})

watch(evalOneR, () => {
  if (ninjaExecutionList.value.length) {
    refreshNinjaTrades()
  }
})

watch(theme, (newTheme) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(themeStorageKey, newTheme)
  }
  applyTheme(newTheme)
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('pagehide', handlePageHide)
  }

  flushEvalSettingsSave()
  stopClock()
  stopPomodoro()
  stopTaskSubscription()
  stopEvalSubscription()
  stopTeamCommentsSubscription()
  syncStop()
  if (syncClockInterval) { clearInterval(syncClockInterval); syncClockInterval = null }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel()
    if (ttsVoicesChangedHandler) {
      window.speechSynthesis.removeEventListener('voiceschanged', ttsVoicesChangedHandler)
      ttsVoicesChangedHandler = null
    }
  }
})

onMounted(() => {
  initTheme()
  loadEmotionalChecklist()
  loadOperationLock()

  if (emotionalChecklistComplete.value && emotionalChecklistScore.value < 5 && operationLockRemainingMs.value > 0) {
    emotionalLowScoreLockActive.value = true
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('pagehide', handlePageHide)

    const rawSchedule = localStorage.getItem(sessionScheduleStorageKey)
    if (rawSchedule) {
      try {
        const parsed = JSON.parse(rawSchedule)
        if (Array.isArray(parsed) && parsed.length) {
          sessionSchedule.value = parsed
            .map((item) => ({
              id: String(item.id || ''),
              label: String(item.label || ''),
              start: String(item.start || ''),
              end: String(item.end || ''),
            }))
            .filter((item) => item.id && item.label)
        }
      } catch {
        sessionSchedule.value = defaultSessionSchedule.map((item) => ({ ...item }))
      }
    }

    const rawPresence = localStorage.getItem(sessionPresenceStorageKey)
    if (rawPresence === 'true' || rawPresence === 'false') {
      sessionPresence.value = rawPresence === 'true'
    }
  }

  initTts()
  window.addEventListener('pointerdown', unlockTts, { once: true })
  startClock()
  loadNewsAlerts()
  syncUpdateClock()
  syncClockInterval = setInterval(syncUpdateClock, 250)

  onAuthStateChanged(auth, (firebaseUser) => {
    stopTaskSubscription()
    stopEvalSubscription()
    stopTeamCommentsSubscription()
    console.debug('onAuthStateChanged uid=', firebaseUser?.uid)
    user.value = firebaseUser
    authReady.value = true

    if (firebaseUser) {
      subscribeToTasks(firebaseUser.uid)
      subscribeToEval(firebaseUser.uid)
      subscribeTeamComments()
      return
    }

    teamComments.value = []
    loadTasks()
    loadEval()
  })

  setTimeout(() => {
    if (progressFillRef.value) {
      gsap.fromTo(
        progressFillRef.value,
        { width: '0%' },
        { width: `${progressValue.value}%`, duration: 0.8, ease: 'power2.out' },
      )
    }
    if (weeklyDisciplineBarRef.value) {
      gsap.fromTo(
        weeklyDisciplineBarRef.value,
        { width: '0%' },
        { width: `${weeklyDisciplinePercent.value}%`, duration: 0.9, ease: 'power2.out' },
      )
    }
  }, 300)
})

// ── Noticias / Alertas ─────────────────────────────────────────
const newsAlerts = ref([])
const newAlertText = ref('')
const newAlertDate = ref(formatDateForInput(new Date()))
const newAlertTime = ref('')
const alertsPaused = ref(false)
const marketNews = ref([])
const marketNewsLoading = ref(false)
const marketNewsError = ref('')
const marketNewsTab = ref('nasdaq')
const marketNewsLastUpdated = ref('')
const NEWS_API_KEY = import.meta.env.VITE_NEWSAPI_KEY || ''

const marketNewsQueries = {
  nasdaq: '(NASDAQ OR "Nasdaq Composite" OR NDX OR QQQ) AND (stock OR market OR earnings)',
  sp500: '("S&P 500" OR SP500 OR SPX OR SPY) AND (stock OR market OR earnings)',
}

function getMarketNewsTitle() {
  return marketNewsTab.value === 'sp500' ? 'S&P 500' : 'Nasdaq'
}

function formatMarketNewsDate(isoDate) {
  const parsed = new Date(isoDate)
  if (Number.isNaN(parsed.getTime())) {
    return 'Fecha desconocida'
  }

  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(parsed)
}

async function fetchNewsApiWithFallback(newsApiUrl) {
  const encodedUrl = encodeURIComponent(newsApiUrl)
  const endpoints = [
    newsApiUrl,
    `https://corsproxy.io/?${encodedUrl}`,
    `https://api.allorigins.win/raw?url=${encodedUrl}`,
  ]

  let lastError = null

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const payload = await response.json()
      if (payload?.status !== 'ok') {
        throw new Error(payload?.message || 'Respuesta inválida de NewsAPI')
      }

      return payload
    } catch (err) {
      lastError = err
    }
  }

  throw lastError || new Error('No se pudo consultar NewsAPI con fallback.')
}

async function fetchMarketNews() {
  marketNewsError.value = ''

  if (!NEWS_API_KEY) {
    marketNews.value = []
    marketNewsError.value = 'Configura VITE_NEWSAPI_KEY en .env para cargar noticias de mercado.'
    return
  }

  marketNewsLoading.value = true

  try {
    const query = marketNewsQueries[marketNewsTab.value] || marketNewsQueries.nasdaq
    const params = new URLSearchParams({
      q: query,
      language: 'en',
      sortBy: 'publishedAt',
      pageSize: '12',
      apiKey: NEWS_API_KEY,
    })
    const newsApiUrl = `https://newsapi.org/v2/everything?${params.toString()}`
    const payload = await fetchNewsApiWithFallback(newsApiUrl)

    marketNews.value = (payload.articles || []).map((article) => ({
      title: String(article.title || 'Sin título'),
      description: String(article.description || article.content || ''),
      source: String(article.source?.name || 'Fuente desconocida'),
      url: String(article.url || '#'),
      image: article.urlToImage || '',
      publishedAt: article.publishedAt || '',
    }))
    marketNewsLastUpdated.value = new Date().toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })
  } catch (err) {
    marketNews.value = []
    marketNewsError.value = 'No se pudo cargar NewsAPI (bloqueo CORS o límite del plan). Intenta de nuevo en unos segundos.'
    console.error('Error cargando noticias de mercado:', err)
  } finally {
    marketNewsLoading.value = false
  }
}

function switchMarketNewsTab(tab) {
  if (tab !== 'nasdaq' && tab !== 'sp500') {
    return
  }

  if (marketNewsTab.value === tab) {
    return
  }

  marketNewsTab.value = tab
  fetchMarketNews()
}

function addNewsAlert() {
  const text = newAlertText.value.trim()
  if (!text || !newAlertDate.value || !newAlertTime.value) return
  newsAlerts.value.push({
    id: crypto.randomUUID(),
    text,
    date: newAlertDate.value,
    time: newAlertTime.value,
    fired: false,
  })
  newAlertText.value = ''
  newAlertDate.value = formatDateForInput(new Date())
  newAlertTime.value = ''
  persistNewsAlerts()
}

function removeNewsAlert(id) {
  newsAlerts.value = newsAlerts.value.filter((a) => a.id !== id)
  persistNewsAlerts()
}

function toggleAlertsPause() {
  alertsPaused.value = !alertsPaused.value
}

function persistNewsAlerts() {
  localStorage.setItem('nasdaq-mentor-news-alerts', JSON.stringify(newsAlerts.value))
}

function loadNewsAlerts() {
  try {
    const raw = localStorage.getItem('nasdaq-mentor-news-alerts')
    if (raw) newsAlerts.value = JSON.parse(raw)
  } catch {
    // ignore
  }
}

function checkNewsAlerts() {
  if (alertsPaused.value) return
  const now = new Date()
  newsAlerts.value.forEach((alert) => {
    if (alert.fired) return

    const alertTime = getAlertDateTime(alert)
    if (!alertTime) return

    const diffMin = (alertTime.getTime() - now.getTime()) / 60000
    if (diffMin <= 15 && diffMin >= 0) {
      alert.fired = true
      importantNewsMuteTasksUntil.value = Math.max(
        importantNewsMuteTasksUntil.value,
        alertTime.getTime() + (2 * 60 * 1000),
      )
      speak(buildImportantNewsSpeech(alert.text))
      persistNewsAlerts()
    }
  })
}

// ── Sincronizador UTC ─────────────────────────────────────────
const syncUtcText = ref('')
const syncDisplay = ref('05:00')
const syncMode = ref(300)
const syncRunning = ref(false)
const syncWaiting = ref(false)
const syncState = ref('Estado: detenido')
let syncEndUtcMs = null
let syncLastSpoken = null
let syncLastAlarmCycle = null
let syncLoopTimeout = null
let syncStartTimeout = null
let syncClockInterval = null

function syncPad2(n) { return String(n).padStart(2, '0') }

function syncFormatMMSS(sec) {
  const s = Math.max(0, Math.floor(sec))
  const m = Math.floor(s / 60)
  const r = s % 60
  return `${syncPad2(m)}:${syncPad2(r)}`
}

function syncUpdateClock() {
  const d = new Date()
  syncUtcText.value = `UTC ${syncPad2(d.getUTCHours())}:${syncPad2(d.getUTCMinutes())}:${syncPad2(d.getUTCSeconds())}`
}

function syncAlarm() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.frequency.value = 650
    osc.connect(gain)
    gain.connect(ctx.destination)
    gain.gain.value = 0.06
    osc.start()
    setTimeout(() => { osc.stop(); ctx.close() }, 800)
  } catch (e) {}
}

function syncSpeak(n) {
  try {
    window.speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(String(n))
    u.lang = 'es-ES'
    window.speechSynthesis.speak(u)
  } catch (e) {}
}

function syncNextBoundaryMs(stepSec) {
  const stepMs = stepSec * 1000
  const now = Date.now()
  const next = Math.ceil(now / stepMs) * stepMs
  return next === now ? now + stepMs : next
}

function syncDescribeAlignment(stepSec) {
  if (stepSec === 300) return 'Estado: esperando UTC (min 0/5/10/15... y seg 00)'
  if (stepSec === 60) return 'Estado: esperando UTC (seg 00)'
  if (stepSec === 120) return 'Estado: esperando UTC (min par y seg 00)'
  return 'Estado: esperando alineación UTC'
}

function syncLoop() {
  if (!syncRunning.value) return
  syncUpdateClock()
  const now = Date.now()
  const remainingSec = Math.ceil((syncEndUtcMs - now) / 1000)
  syncDisplay.value = syncFormatMMSS(remainingSec)

  if (remainingSec <= 10 && remainingSec > 0 && syncLastSpoken !== remainingSec) {
    syncLastSpoken = remainingSec
    syncSpeak(remainingSec)
  }

  if (remainingSec <= 0) {
    const cycleId = syncEndUtcMs
    if (syncLastAlarmCycle !== cycleId) {
      syncLastAlarmCycle = cycleId
      syncAlarm()
    }
    syncEndUtcMs = syncEndUtcMs + syncMode.value * 1000
    syncLastSpoken = null
  }

  const msToNextSecond = 1000 - (now % 1000)
  const delay = Math.min(250, Math.max(20, msToNextSecond + 10))
  syncLoopTimeout = setTimeout(syncLoop, delay)
}

function syncStart() {
  syncStop()
  syncWaiting.value = true
  syncState.value = syncDescribeAlignment(syncMode.value)
  const startUtc = syncNextBoundaryMs(syncMode.value)
  syncEndUtcMs = startUtc + syncMode.value * 1000
  syncDisplay.value = syncFormatMMSS(syncMode.value)
  const msWait = startUtc - Date.now()
  syncStartTimeout = setTimeout(() => {
    syncWaiting.value = false
    syncRunning.value = true
    syncState.value = 'Estado: corriendo'
    syncLastSpoken = null
    syncLastAlarmCycle = null
    syncLoop()
  }, Math.max(0, msWait))
}

function syncStop() {
  syncRunning.value = false
  syncWaiting.value = false
  if (syncStartTimeout) { clearTimeout(syncStartTimeout); syncStartTimeout = null }
  if (syncLoopTimeout) { clearTimeout(syncLoopTimeout); syncLoopTimeout = null }
  syncState.value = 'Estado: detenido'
  syncDisplay.value = syncFormatMMSS(syncMode.value)
  try { window.speechSynthesis.cancel() } catch (e) {}
}

function onSyncModeChange() {
  if (!syncRunning.value && !syncWaiting.value) {
    syncDisplay.value = syncFormatMMSS(syncMode.value)
  }
}

// ── Sesiones de trading + equipo ───────────────────────────────
const sessionScheduleStorageKey = 'nasdaq-mentor-session-schedule'
const sessionPresenceStorageKey = 'nasdaq-mentor-session-presence'
const defaultSessionSchedule = [
  { id: 'london', label: 'Londres', start: '03:00', end: '06:00' },
  { id: 'ny-am', label: 'New York AM', start: '08:30', end: '11:30' },
  { id: 'ny-pm', label: 'New York PM', start: '13:30', end: '16:00' },
]
const sessionSchedule = ref(defaultSessionSchedule.map((item) => ({ ...item })))
const sessionPresence = ref(false)
const teamCommentInput = ref('')
const teamCommentError = ref('')
const teamComments = ref([])
let unsubscribeTeamComments = null

function parseMinutes(hhmm) {
  const [h, m] = String(hhmm || '').split(':').map(Number)
  if (!Number.isFinite(h) || !Number.isFinite(m)) {
    return null
  }
  return (h * 60) + m
}

function formatClockHHMM(date) {
  return new Intl.DateTimeFormat('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(date)
}

const sessionClockText = computed(() => formatClockHHMM(new Date(cooldownNow.value)))

const scheduleWithState = computed(() => {
  const now = new Date(cooldownNow.value)
  const nowMinutes = (now.getHours() * 60) + now.getMinutes()

  return sessionSchedule.value.map((slot) => {
    const startMin = parseMinutes(slot.start)
    const endMin = parseMinutes(slot.end)
    if (startMin === null || endMin === null) {
      return { ...slot, active: false, invalid: true }
    }

    const wraps = endMin <= startMin
    const active = wraps
      ? (nowMinutes >= startMin || nowMinutes < endMin)
      : (nowMinutes >= startMin && nowMinutes < endMin)

    return {
      ...slot,
      active,
      invalid: false,
      wraps,
      startMin,
      endMin,
    }
  })
})

const activeTradingSlot = computed(() => scheduleWithState.value.find((slot) => slot.active) || null)
const canOperateNow = computed(() => Boolean(activeTradingSlot.value))
const sessionStatusLabel = computed(() => (canOperateNow.value ? 'Operativa habilitada' : 'Fuera de horario'))

const nextTradingSlot = computed(() => {
  const now = new Date(cooldownNow.value)
  const nowMinutes = (now.getHours() * 60) + now.getMinutes()

  let best = null
  scheduleWithState.value.forEach((slot) => {
    if (slot.invalid) return
    let minutesUntilStart = slot.startMin - nowMinutes
    if (minutesUntilStart <= 0) {
      minutesUntilStart += 24 * 60
    }
    if (!best || minutesUntilStart < best.minutesUntilStart) {
      best = { label: slot.label, minutesUntilStart }
    }
  })

  return best
})

const nextTradingSlotText = computed(() => {
  if (canOperateNow.value && activeTradingSlot.value) {
    return `Sesion activa: ${activeTradingSlot.value.label}`
  }
  if (!nextTradingSlot.value) {
    return 'Define al menos una sesion valida para operar'
  }

  const mins = nextTradingSlot.value.minutesUntilStart
  const hours = Math.floor(mins / 60)
  const minutes = mins % 60
  return `Proxima sesion: ${nextTradingSlot.value.label} en ${hours}h ${String(minutes).padStart(2, '0')}m`
})

function toggleSessionPresence() {
  sessionPresence.value = !sessionPresence.value
}

function updateSessionTime(slotId, field, value) {
  if (field !== 'start' && field !== 'end') {
    return
  }

  const nextValue = String(value || '').slice(0, 5)
  const slot = sessionSchedule.value.find((item) => item.id === slotId)
  if (!slot) {
    return
  }

  slot[field] = nextValue
}

function stopTeamCommentsSubscription() {
  if (unsubscribeTeamComments) {
    unsubscribeTeamComments()
    unsubscribeTeamComments = null
  }
}

function subscribeTeamComments() {
  stopTeamCommentsSubscription()
  if (!user.value) {
    teamComments.value = []
    return
  }

  const commentsQuery = query(
    collection(db, 'sessionRoomComments'),
    orderBy('createdAt', 'desc'),
    limit(40),
  )

  unsubscribeTeamComments = onSnapshot(commentsQuery, (snapshot) => {
    teamComments.value = snapshot.docs.map((item) => {
      const data = item.data()
      return {
        id: item.id,
        text: String(data.text || ''),
        author: String(data.author || 'Trader'),
        active: Boolean(data.active),
        createdAt: data.createdAt || null,
        uid: data.uid || null,
      }
    })
  }, () => {
    teamCommentError.value = 'No se pudieron cargar los comentarios del equipo.'
  })
}

function formatTeamCommentDate(createdAt) {
  if (!createdAt || typeof createdAt.toDate !== 'function') {
    return 'Ahora'
  }
  const date = createdAt.toDate()
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date)
}

async function sendTeamComment() {
  teamCommentError.value = ''
  const text = teamCommentInput.value.trim()

  if (!user.value) {
    teamCommentError.value = 'Inicia sesion para comentar en el equipo.'
    return
  }

  if (!text) {
    teamCommentError.value = 'Escribe un comentario primero.'
    return
  }

  if (text.length > 220) {
    teamCommentError.value = 'El comentario supera 220 caracteres.'
    return
  }

  await addDoc(collection(db, 'sessionRoomComments'), {
    text,
    author: user.value.displayName || 'Trader',
    uid: user.value.uid,
    active: sessionPresence.value,
    createdAt: serverTimestamp(),
  })

  teamCommentInput.value = ''
}

watch(sessionSchedule, (nextValue) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(sessionScheduleStorageKey, JSON.stringify(nextValue))
  }
}, { deep: true })

watch(sessionPresence, (nextValue) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(sessionPresenceStorageKey, String(nextValue))
  }
})

// ── Sidebar ──────────────────────────────────────────────────────
const sidebarOpen = ref(false)
const ejerciciosOpen = ref(false)
const activeSection = ref('checklist')

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}

function closeSidebarOnMobile() {
  if (window.innerWidth < 768) {
    sidebarOpen.value = false
  }
}

function openSection(id) {
  activeSection.value = id

  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  closeSidebarOnMobile()
}

function openNewTrade() {
  activeSection.value = 'evaluacion'

  nextTick(() => {
    const emotionalChecklist = document.getElementById('checklist-emocional')
    emotionalChecklist?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })

  closeSidebarOnMobile()
}

watch(activeSection, (section) => {
  if (section === 'mercado' && !marketNews.value.length && !marketNewsLoading.value) {
    fetchMarketNews()
  }
})
</script>

<template>

  <div class="app-layout">
    <!-- Top Navbar -->
    <header class="topnav">
      <button class="nav-hamburger" :title="sidebarOpen ? 'Ocultar menú' : 'Mostrar menú'" @click="toggleSidebar">☰</button>
      <span class="nav-brand">📈 NasdaqMentor</span>
      <button
        class="nav-theme-toggle"
        :title="theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
        @click="toggleTheme"
      >
        {{ theme === 'dark' ? '☀️ Claro' : '🌙 Oscuro' }}
      </button>

      <!-- Auth section -->
      <div v-if="authReady" class="nav-auth">
        <template v-if="user">
          <img
            v-if="user.photoURL"
            :src="user.photoURL"
            :alt="user.displayName || 'Usuario'"
            class="nav-avatar"
          />
          <span class="nav-username">{{ user.displayName }}</span>
          <button class="nav-logout" :disabled="loading" @click="handleLogout">Salir</button>
        </template>
        <button v-else class="nav-login" :disabled="loading" @click="handleGoogleLogin">
          {{ loading ? 'Conectando...' : 'Iniciar sesión' }}
        </button>
      </div>
    </header>

    <!-- Sidebar -->
    <nav class="sidebar" :class="{ 'sidebar--open': sidebarOpen }">
      <div class="sidebar-brand">📈 NasdaqMentor</div>
      <ul class="sidebar-menu">
        <li>
          <button class="sidebar-item" :class="{ 'sidebar-item--active': activeSection === 'evaluacion' }" @click="openNewTrade">
            <span class="sidebar-icon">➕</span>
            <span class="sidebar-label">Nuevo trade</span>
          </button>
        </li>
        <li>
          <button class="sidebar-item" :class="{ 'sidebar-item--active': activeSection === 'checklist' }" @click="openSection('checklist')">
            <span class="sidebar-icon">✅</span>
            <span class="sidebar-label">Tareas del día</span>
          </button>
        </li>
        <li>
          <button class="sidebar-item" :class="{ 'sidebar-item--active': activeSection === 'dashboard' }" @click="openSection('dashboard')">
            <span class="sidebar-icon">📈</span>
            <span class="sidebar-label">Dashboard</span>
          </button>
        </li>
        <li>
          <button class="sidebar-item" :class="{ 'sidebar-item--active': activeSection === 'evaluacion' }" @click="openSection('evaluacion')">
            <span class="sidebar-icon">📊</span>
            <span class="sidebar-label">Diario de trading</span>
          </button>
        </li>
        <li>
          <button class="sidebar-item" :class="{ 'sidebar-item--active': activeSection === 'pomodoro' }" @click="openSection('pomodoro')">
            <span class="sidebar-icon">⏱</span>
            <span class="sidebar-label">Pomodoro</span>
          </button>
        </li>
        <li>
          <button class="sidebar-item" :class="{ 'sidebar-item--active': activeSection === 'sincronizador' }" @click="openSection('sincronizador')">
            <span class="sidebar-icon">🔄</span>
            <span class="sidebar-label">Timer UTC</span>
          </button>
        </li>
        <li>
          <button class="sidebar-item" :class="{ 'sidebar-item--active': activeSection === 'noticias' }" @click="openSection('noticias')">
            <span class="sidebar-icon">🔔</span>
            <span class="sidebar-label">Alertas Noticias</span>
          </button>
        </li>
        <li>
          <button class="sidebar-item" :class="{ 'sidebar-item--active': activeSection === 'mercado' }" @click="openSection('mercado')">
            <span class="sidebar-icon">📰</span>
            <span class="sidebar-label">Noticias</span>
          </button>
        </li>
        <li>
          <button
            class="sidebar-item"
            :aria-expanded="ejerciciosOpen"
            @click="ejerciciosOpen = !ejerciciosOpen"
          >
            <span class="sidebar-icon">🗂️</span>
            <span class="sidebar-label">Ejercicios</span>
            <span class="sidebar-caret" :class="{ 'sidebar-caret--open': ejerciciosOpen }">▾</span>
          </button>
          <ul v-if="ejerciciosOpen" class="sidebar-submenu">
            <li>
              <button class="sidebar-subitem" :class="{ 'sidebar-subitem--active': activeSection === 'prospectiva' }" @click="openSection('prospectiva')">
                <span class="sidebar-icon">🧪</span>
                <span class="sidebar-label">Prospectiva</span>
              </button>
            </li>
            <li>
              <a
                class="sidebar-subitem"
                href="https://marlonchca3.github.io/trading.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                @click="closeSidebarOnMobile"
              >
                <span class="sidebar-icon">🕯️</span>
                <span class="sidebar-label">Velas 1</span>
              </a>
            </li>
            <li>
              <a
                class="sidebar-subitem"
                href="https://marlonchca3.github.io/trading1.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                @click="closeSidebarOnMobile"
              >
                <span class="sidebar-icon">🕯️</span>
                <span class="sidebar-label">Velas 2</span>
              </a>
            </li>
            <li>
              <a
                class="sidebar-subitem"
                href="https://marlonchca3.github.io/trading2.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                @click="closeSidebarOnMobile"
              >
                <span class="sidebar-icon">🕯️</span>
                <span class="sidebar-label">Velas 3</span>
              </a>
            </li>
            <li>
              <a
                class="sidebar-subitem"
                href="https://marlonchca3.github.io/trading4.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                @click="closeSidebarOnMobile"
              >
                <span class="sidebar-icon">🕯️</span>
                <span class="sidebar-label">Velas 4</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a class="sidebar-item" href="https://drive.google.com/drive/folders/1tdZns9hj3OIGzw7JsYeJbsOao210fr6v?usp=sharing" target="_blank" rel="noopener noreferrer">
            <span class="sidebar-icon">📚</span>
            <span class="sidebar-label">Libros</span>
          </a>
        </li>
        <li>
          <button class="sidebar-item" @click="openBigFiveTest">
            <span class="sidebar-icon">🧠</span>
            <span class="sidebar-label">Test Emocional</span>
          </button>
        </li>
      </ul>
    </nav>

    <!-- Mobile overlay to close sidebar -->
    <div v-if="sidebarOpen" class="sidebar-overlay" @click="sidebarOpen = false"></div>

    <!-- Main content -->
    <main class="page-shell main-area" :class="{ 'main-area--shifted': sidebarOpen }">
      <div class="floating-actions">
        <button
          class="floating-circle-btn floating-mute-btn"
          :class="{ 'floating-mute-btn--active': ttsEnabled }"
          :title="ttsEnabled ? 'Silenciar voz' : 'Activar voz'"
          @click="toggleTts()"
        >
          <span v-if="ttsSpeaking">🔊</span>
          <span v-else-if="ttsEnabled">🔔</span>
          <span v-else>🔕</span>
        </button>

        <button class="floating-circle-btn intro-help-btn" title="¿Cómo funciona la app?" @click="openIntro">?</button>
      </div>

    <section class="app-card">
      <section v-show="activeSection === 'checklist'">
      <div id="checklist" class="hero-row">
        <div>
          <p class="eyebrow">Checklist</p>
          <h1>Tareas del dia</h1>
          <p class="subcopy">
            Organiza tu enfoque diario y marca tu progreso con una cuenta de Google.
          </p>

        </div>

      </div>

      <p v-if="authError" class="error-banner">{{ authError }}</p>


      <!-- Reloj local moderno y ciudad -->
      <section id="reloj" class="modern-clock">
        <span class="clock-icon">🕒</span>
        <div class="clock-info">
          <span class="clock-label">Hora local</span>
          <span class="clock-time">{{ relojLocal }}</span>
          <span class="clock-city" v-if="ciudad">📍 {{ ciudad }}</span>
        </div>
      </section>

      <div class="stats-row">
        <div class="stat-pill">
          <span>Completadas</span>
          <strong>{{ completedCount }}</strong>
        </div>
        <div class="stat-pill">
          <span>Pendientes</span>
          <strong>{{ pendingCount }}</strong>
        </div>
        <div class="stat-pill">
          <span>Maximo</span>
          <strong>{{ maxTasks }}</strong>
        </div>
      </div>

      <div class="input-row">
        <input
          v-model="taskInput"
          class="task-input"
          type="text"
          maxlength="120"
          placeholder="Ejemplo: Esperar confirmacion en zona"
          @keydown.enter="addTask"
        />
        <button class="primary-button" :disabled="tasks.length >= maxTasks" @click="addTask">
          Agregar
        </button>
      </div>

      <p class="helper-text">Puedes crear hasta {{ maxTasks }} tareas para el dia.</p>
      <p class="helper-text">Cada tarea debe tener maximo 12 palabras.</p>
      <p v-if="taskError" class="error-banner" style="margin-top: 0.5rem;">{{ taskError }}</p>

      <div class="progress-section">
        <div class="progress-header">
          <span>Progreso</span>
          <strong>{{ progressValue }}%</strong>
        </div>

        <div class="progress-3d">
          <div
            ref="progressFillRef"
            class="progress-3d__fill"
            :style="{ width: `${progressValue}%` }"
          >
            <div class="progress-3d__shine"></div>
          </div>

          <div class="progress-3d__markers">
            <span
              v-for="number in maxTasks"
              :key="number"
              class="progress-marker"
              :class="{ completed: number <= completedCount }"
            ></span>
          </div>
        </div>

        <div class="progress-caption">
          {{ completedCount }} de {{ maxTasks }} tareas completadas
        </div>
      </div>

      <div v-if="tasks.length" class="task-list">
        <article
          v-for="(task, index) in tasks"
          :key="task.id"
          class="task-card"
          :class="{
            complete: task.completed,
            dragging: dragFromIndex === index,
            'drag-over': dragOverIndex === index && dragFromIndex !== index,
          }"
          draggable="true"
          @dragstart="onDragStart(index)"
          @dragenter.prevent="onDragEnter(index)"
          @dragover.prevent
          @drop.prevent="onDrop(index)"
          @dragend="onDragEnd"
        >
          <span class="drag-handle" title="Arrastrar para reordenar">⠿</span>
          <button class="toggle-button" :aria-pressed="task.completed" @click="toggleTask(task.id)">
            <span class="toggle-indicator"></span>
          </button>
          <p>{{ task.title }}</p>
          <button class="remove-button" @click="removeTask(task.id)">×</button>
        </article>
      </div>
      <div v-else class="empty-state">
        <p>No hay tareas todavia. Inicia con una meta concreta para hoy.</p>
      </div>
      </section>

      <section v-show="activeSection === 'dashboard'" id="dashboard" class="dashboard-panel">
        <div class="hero-row">
          <div>
            <p class="eyebrow">Dashboard</p>
            <h1>Análisis de Operaciones</h1>
            <p class="subcopy">
              Visualiza tus métricas de trading del mes para mejorar tu rendimiento.
            </p>
          </div>
        </div>
        <Dashboard :trades="monthTrades" :one-r="evalOneR" />
      </section>

      <section v-show="activeSection === 'evaluacion'" id="evaluacion" class="eval-panel">

        <!-- ── Checklist emocional ── -->
        <div id="checklist-emocional" class="filter-section">
          <div class="filter-section-head">
            <div>
              <p class="filter-eyebrow">Checklist Emocional</p>
              <h2 class="filter-title">Puntaje antes de operar</h2>
              <p class="filter-copy">{{ emotionalCopy }}</p>
            </div>
            <div class="emotional-score" :class="emotionalChecklistStatus.className">
              <span>{{ emotionalChecklistStatus.label }}</span>
              <strong>{{ emotionalChecklistScore }}</strong>
            </div>
          </div>
          <div class="emotional-checklist-table" role="group" aria-label="Checklist emocional">
            <div
              v-for="row in emotionalChecklistOptions"
              :key="row.key"
              class="emotional-checklist-row"
            >
              <button
                v-for="option in row.options"
                :key="`${row.key}-${option.score}`"
                class="emotional-checklist-cell"
                :class="[
                  `emotional-checklist-cell--score-${option.score}`,
                  { active: emotionalChecklist[row.key] === option.score },
                ]"
                type="button"
                @click="selectEmotionalChecklistValue(row.key, option.score)"
              >
                <span>{{ option.label }}</span>
                <strong>{{ option.score }}</strong>
              </button>
              <div class="emotional-checklist-value">
                {{ Number.isFinite(emotionalChecklist[row.key]) ? emotionalChecklist[row.key] : '-' }}
              </div>
            </div>
            <div class="emotional-checklist-footer">
              <span class="emotional-checklist-band emotional-checklist-band--danger">1-2-3-4 No operar</span>
              <span class="emotional-checklist-band emotional-checklist-band--attention">5-6 Y 9-10 Atencion</span>
              <span class="emotional-checklist-band emotional-checklist-band--good">7-8 Bien</span>
              <strong class="emotional-checklist-total">{{ emotionalChecklistScore }}</strong>
            </div>
          </div>
        </div>

        <!-- ── Cumplimiento de reglas ── -->
        <div class="filter-section">
          <div class="filter-section-head">
            <div>
              <p class="filter-eyebrow">Cumplimiento de Reglas</p>
              <h2 class="filter-title">{{ complianceTitle }}</h2>
              <p class="filter-copy">{{ complianceCopy }}</p>
            </div>
          </div>
          <div class="compliance-cards">
            <button
              class="compliance-card compliance-card--segui"
              :class="{ active: tradeCompliance === 'segui' }"
              @click="selectTradeCompliance('segui')"
            >
              <strong>Seguí</strong>
              <span>Tarjeta verde</span>
            </button>
            <button
              class="compliance-card compliance-card--parcial"
              :class="{ active: tradeCompliance === 'parcial' }"
              @click="selectTradeCompliance('parcial')"
            >
              <strong>Parcial</strong>
              <span>Tarjeta amarilla</span>
            </button>
            <button
              class="compliance-card compliance-card--fallo"
              :class="{ active: tradeCompliance === 'fallo' }"
              @click="selectTradeCompliance('fallo')"
            >
              <strong>No seguí</strong>
              <span>Tarjeta roja</span>
            </button>
          </div>

          <div class="discipline-row">
            <span class="discipline-label">Disciplina semanal</span>
            <span class="discipline-stats">
              {{ weeklyDisciplinePercent }}% &middot;
              {{ weeklyStats.segui }} segui +20 &middot;
              {{ weeklyStats.parcial }} parcial +10 &middot;
              {{ weeklyStats.fallo }} fallo -20 &middot;
              {{ weeklyStats.total }} toque(s)
            </span>
          </div>
          <div class="discipline-track">
            <div ref="weeklyDisciplineBarRef" class="discipline-fill"></div>
          </div>
          <p v-if="lockoutCopy" class="filter-warning">{{ lockoutCopy }}</p>
          <p v-if="!emotionalChecklistComplete" class="filter-warning">Completa primero las 5 filas del checklist emocional antes de registrar un trade.</p>
        </div>

        <div class="eval-meta-top">
          <div class="eval-meta-field">
            <label for="r-selector" class="eval-meta-label">Seleccionador de R ($)</label>
            <input id="r-selector" v-model.number="evalOneR" class="eval-control eval-meta-input" type="number" min="1" max="100000" step="1" @change="scheduleEvalSettingsSave" />
          </div>
          <div class="eval-meta-field">
            <label for="objetivo-selector" class="eval-meta-label">Objetivo ($)</label>
            <input id="objetivo-selector" v-model.number="evalObjetivo" class="eval-control eval-meta-input" type="number" min="1" max="10000000" step="1" @change="scheduleEvalSettingsSave" />
          </div>
          <div class="eval-meta-field">
            <label for="daily-loss-selector" class="eval-meta-label">Pérdida diaria máxima ($)</label>
            <input
              id="daily-loss-selector"
              :value="maxDailyLossInput"
              class="eval-control eval-meta-input"
              type="number"
              min="1"
              max="1000000"
              step="1"
              @input="onMaxDailyLossInput"
              @change="commitMaxDailyLossInput"
              @blur="commitMaxDailyLossInput"
            />
          </div>
        </div>
        <div class="eval-objetivo-bar">
          <div class="eval-objetivo-summary">
            <span class="eval-objetivo-label">Avance objetivo:</span>
            <strong :style="{ color: evalTotalUSD < 0 ? '#facc15' : '#4ade80' }">${{ evalTotalUSD.toFixed(2) }}</strong>
            <span class="eval-objetivo-label">Restante:</span>
            <strong :style="{ color: evalRestanUSD > 0 ? '#4ade80' : '#facc15' }">${{ evalRestanUSD.toFixed(2) }}</strong>
            <span class="eval-objetivo-label">Progreso:</span>
            <strong style="color: #60a5fa;">{{ evalProgress }}%</strong>
          </div>
          <div class="objetivo-progress-track">
            <div class="objetivo-progress-fill" :style="{ width: evalProgress + '%', background: '#4ade80' }"></div>
          </div>
        </div>
        <div class="eval-objetivo-bar">
          <div class="eval-objetivo-summary">
            <span class="eval-objetivo-label">Control de riesgo diario:</span>
            <strong :style="{ color: dailyLossLimitReached ? '#facc15' : '#f87171' }">-${{ maxDailyLossUSD.toFixed(2) }}</strong>
            <span class="eval-objetivo-label">Pérdida usada:</span>
            <strong :style="{ color: dailyLossUsedUSD > 0 ? '#facc15' : '#4ade80' }">${{ dailyLossUsedUSD.toFixed(2) }}</strong>
            <span class="eval-objetivo-label">Restante:</span>
            <strong :style="{ color: dailyLossRemainingUSD > 0 ? '#4ade80' : '#facc15' }">${{ dailyLossRemainingUSD.toFixed(2) }}</strong>
            <span class="eval-risk-reset-pill">Reinicio 00:00 UTC</span>
          </div>
          <span class="objetivo-progress-label">Barra de pérdida diaria</span>
          <div class="objetivo-progress-track">
            <div class="objetivo-progress-fill" :style="{ width: dailyLossProgress + '%', background: dailyLossLimitReached ? '#facc15' : '#fb7185' }"></div>
          </div>
        </div>
        <div id="nuevo-trade-form" class="eval-journal-top">
          <input v-model="tradeDate" class="eval-control" type="date" />
          <select v-model="tradeSession" class="eval-control">
            <option>Sesion</option>
            <option>Londres</option>
            <option>New York AM</option>
            <option>New York PM</option>
            <option>Asia</option>
          </select>
          <input
            v-model="tradeInput"
            class="eval-control"
            type="number"
            inputmode="decimal"
            step="0.01"
            placeholder="USD"
            @keydown.enter="addTrade"
          />
          <input
            v-model="tradeNote"
            class="eval-control"
            type="text"
            maxlength="140"
            placeholder="Nota"
          />
          <select v-model="tradeExitTactic" class="eval-control">
            <option value="">Táctica de salida</option>
            <option v-for="option in exitTacticOptions" :key="option" :value="option">{{ option }}</option>
          </select>
        </div>

        <div class="eval-journal-actions">
          <button class="primary-button" :disabled="isOperationLocked || savingTrade" @click="addTrade">Guardar trade</button>
          <input ref="chartFileInput" type="file" accept="image/*" style="display:none" @change="onChartFileSelected" />
          <button class="ghost-button" @click="clearAllTrades">Limpiar</button>
        </div>
        <p v-if="tradeError" class="error-banner" style="margin-top:0.5em;">{{ tradeError }}</p>

        <div class="eval-table-wrap">
          <table class="eval-table">
            <thead>
              <tr>
                <th>USD</th>
                <th>R</th>
                <th>Sesion</th>
                <th>Nota</th>
                <th>Táctica de salida</th>
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="!tradesList.length">
                <td colspan="7" class="empty-row">Aun no hay trades registrados</td>
              </tr>
              <tr v-for="trade in tradesList.slice(0, 8)" :key="trade.id">
                <template v-if="editingTradeId === trade.id && editingTradeDraft">
                  <td>
                    <input v-model.number="editingTradeDraft.usd" class="eval-inline-input" type="number" step="0.01" inputmode="decimal" />
                  </td>
                  <td class="read-only-r">{{ (Number.parseFloat(editingTradeDraft.usd || 0) / (Number.isFinite(trade.rBase) && trade.rBase > 0 ? trade.rBase : evalOneR.value)).toFixed(2) }}R</td>
                  <td>
                    <select v-model="editingTradeDraft.session" class="eval-inline-input">
                      <option>Sesion</option>
                      <option>Londres</option>
                      <option>New York AM</option>
                      <option>New York PM</option>
                      <option>Asia</option>
                    </select>
                  </td>
                  <td>
                    <textarea v-model="editingTradeDraft.note" class="eval-inline-input eval-inline-note" maxlength="140" placeholder="Nota"></textarea>
                  </td>
                  <td>
                    <select v-model="editingTradeDraft.exitTactic" class="eval-inline-input eval-inline-select">
                      <option value="">Táctica de salida</option>
                      <option v-for="option in exitTacticOptions" :key="option" :value="option">{{ option }}</option>
                    </select>
                  </td>
                  <td>
                    <input v-model="editingTradeDraft.tradeDate" class="eval-inline-input" type="date" />
                  </td>
                  <td>
                    <div class="eval-inline-actions">
                      <button class="eval-save-btn" @click="saveEditedTrade(trade.id)">Guardar</button>
                      <button class="eval-cancel-btn" @click="cancelEditTrade">Cancelar</button>
                    </div>
                  </td>
                </template>
                <template v-else>
                  <td :class="(trade.r * (typeof trade.rBase === 'number' ? trade.rBase : evalOneR.value)) > 0 ? 'pos' : ((trade.r * (typeof trade.rBase === 'number' ? trade.rBase : evalOneR.value)) < 0 ? 'neg' : '')">
                    <template v-if="typeof trade.rBase === 'number'">
                      {{ trade.r > 0 ? '+' : '' }}${{ (trade.r * trade.rBase).toFixed(2) }}
                    </template>
                    <template v-else>
                      <span style="color: #f87171; font-size: 0.95em;">Sin R guardado</span>
                    </template>
                  </td>
                  <td :class="trade.r > 0 ? 'pos' : (trade.r < 0 ? 'neg' : '')">{{ trade.r > 0 ? '+' : '' }}{{ trade.r.toFixed(2) }}R</td>
                  <td>
                    {{ trade.session || 'Sesion' }}
                    <span v-if="trade.source === 'ninjatrader'" style="display:block;font-size:0.78em;opacity:0.7;">NinjaTrader</span>
                  </td>
                  <td>
                    <template v-if="trade.source === 'ninjatrader'">
                      {{ trade.instrument || '-' }} {{ trade.side || '' }} · {{ trade.contracts || 0 }} contrato{{ trade.contracts === 1 ? '' : 's' }}
                      <span style="display:block;font-size:0.82em;opacity:0.72;">
                        Entrada {{ Number(trade.entryPrice || 0).toFixed(2) }} · Salida {{ Number(trade.exitPrice || 0).toFixed(2) }} · Comisión ${{ Number(trade.commission || 0).toFixed(2) }} · {{ formatDuration(trade.durationMs) }}
                      </span>
                    </template>
                    <template v-else>
                      {{ trade.note || '-' }}
                    </template>
                  </td>
                  <td>{{ trade.exitTactic || '-' }}</td>
                  <td>
                    {{ formatDateCell(normalizeDate(trade.tradeDate || trade.createdAt)) }}
                    <span v-if="normalizeDate(trade.createdAt)" style="display:block;font-size:0.8em;opacity:0.6;">{{ formatTimeFromDate(normalizeDate(trade.createdAt)) }}</span>
                  </td>
                  <td>
                    <div class="eval-inline-actions">
                      <template v-if="trade.source === 'ninjatrader'">
                        <span style="font-size:0.82em;opacity:0.7;">Auto</span>
                      </template>
                      <template v-else>
                        <button class="eval-edit-btn" @click="startEditTrade(trade)">Editar</button>
                        <button class="eval-remove-btn" @click="removeTrade(trade.id)">×</button>
                      </template>
                    </div>
                  </td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>

        <PnlChart ref="pnlChartRef" :trades="tradesList" :one-r="evalOneR" />

        <div class="eval-calendar-head">
          <div>
            <p class="eval-eyebrow">Performance</p>
            <h2 class="eval-title">Calendario mensual</h2>
          </div>
          <div class="calendar-controls">
            <button class="calendar-nav" @click="goPrevMonth">←</button>
            <div class="calendar-month-label">{{ monthLabel }}</div>
            <button class="calendar-nav" @click="goNextMonth">→</button>
            <button class="calendar-today" @click="goCurrentMonth">Hoy</button>
          </div>
        </div>

        <div class="eval-main-stats">
          <div class="eval-stat-card">
            <span>USD del mes</span>
            <strong>${{ evalUsdMes.toFixed(2) }}</strong>
          </div>
          <div class="eval-stat-card">
            <span>Trades</span>
            <strong>{{ evalTradesMes }}</strong>
          </div>
          <div class="eval-stat-card">
            <span>Dias activos</span>
            <strong>{{ evalDiasActivosMes }}</strong>
          </div>
          <div class="eval-stat-card">
            <span>Dias verdes</span>
            <strong>{{ evalDiasVerdesMes }}</strong>
          </div>
          <div class="eval-stat-card">
            <span>Win rate</span>
            <strong>{{ evalWinRateMes }}%</strong>
          </div>
        </div>

        <div class="calendar-grid-head">
          <span v-for="label in weekdayLabel" :key="label">{{ label }}</span>
          <span>Semana</span>
        </div>

        <div v-for="(week, weekIndex) in calendarWeeks" :key="`week-row-${weekIndex}`" class="calendar-week-row">
          <article
            v-for="day in week"
            :key="day.key"
            class="calendar-cell"
            :class="{
              empty: !day.inMonth,
              pos: day.usd > 0,
              neg: day.usd < 0,
              today: day.inMonth && isToday(day.date),
            }"
          >
            <div v-if="day.inMonth" class="calendar-cell-content" @click="openChartsModal(day.date)">
              <strong>{{ day.dayNumber }}</strong>
              <small v-if="day.trades">{{ day.trades }} trade{{ day.trades > 1 ? 's' : '' }} realizados</small>
              <small
                v-if="day.trades"
                class="calendar-usd"
                :class="{ pos: day.usd > 0, neg: day.usd < 0 }"
              >
                {{ day.usd > 0 ? '+' : '' }}${{ day.usd.toFixed(2) }}
              </small>
              
              <div class="calendar-actions">
                <button v-if="day.trades" class="calendar-upload-btn" @click.stop="startUploadForDate(day.date)" title="Subir foto">📤</button>
                <button v-if="day.notes.length > 0" class="calendar-note-icon" @click.stop="openNotesModal(day.notes)" title="Ver notas">📝</button>
              </div>
              <div v-if="day.trades" class="calendar-tooltip">
                <p>Trades del dia</p>
                <ul>
                  <li v-for="trade in day.tradeDetails" :key="trade.id">
                    <span>{{ trade.session }}</span>
                    <strong :class="trade.usd > 0 ? 'pos' : 'neg'">
                      {{ trade.usd > 0 ? '+' : '' }}${{ trade.usd.toFixed(2) }}
                    </strong>
                    <div v-if="trade.note" class="trade-note-item">
                      <small style="color: #a1a1a1;">📝 {{ trade.note }}</small>
                    </div>
                    <div v-if="trade.exitTactic" class="trade-note-item">
                      <small style="color: #93c5fd;">Salida: {{ trade.exitTactic }}</small>
                    </div>
                  </li>
                </ul>
                <div v-if="chartsForDate(day.date).length">
                  <p style="margin-top:0.6em;">Gráficos guardados</p>
                  <div class="calendar-charts">
                    <div v-for="chart in chartsForDate(day.date)" :key="chart.id" class="calendar-chart-item">
                      <a :href="chart.url" :download="chart.name" target="_blank" rel="noopener noreferrer">
                        <img :src="chart.url" alt="chart thumbnail" style="width:64px;height:48px;object-fit:cover;border-radius:6px;border:1px solid rgba(255,255,255,0.06)" />
                      </a>
                      <div style="font-size:0.8em;margin-top:4px;text-align:center;">
                        <a :href="chart.url" :download="chart.name">Descargar</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <aside class="calendar-week-summary">
            <p>Semana {{ weeklySummaries[weekIndex]?.weekNumber || weekIndex + 1 }}</p>
            
            <span>${{ (weeklySummaries[weekIndex]?.usd || 0).toFixed(2) }}</span>
            <small>{{ weeklySummaries[weekIndex]?.activeDays || 0 }} días activos</small>
            <div style="margin-top: 0.5em; font-size: 1em; color: #60a5fa;">
              Total trades: <b>{{ weeklySummaries[weekIndex]?.trades || 0 }}</b>
            </div>
          </aside>
        </div>
      </section>

      <section v-show="activeSection === 'pomodoro'" id="pomodoro" class="pomodoro-panel">
        <div class="pomodoro-head">
          <div>
            <p class="pomodoro-eyebrow">Concentracion</p>
            <h2>Pomodoro editable</h2>
            <p class="pomodoro-copy">
              Ajusta tu meta diaria de enfoque y trabaja en bloques pomodoro con descansos automaticos.
            </p>
          </div>
          <div class="pomodoro-badges">
            <span>{{ phaseBadgeText }}</span>
          </div>
        </div>

        <div class="pomodoro-goal-row">
          <div class="pomodoro-goal-card">
            <span>Meta diaria (horas)</span>
            <div class="goal-stepper">
              <button
                class="stepper-btn"
                :disabled="pomodoroGoalHours <= 1"
                @click="pomodoroGoalHours = Math.max(1, pomodoroGoalHours - 1)"
              >−</button>
              <strong class="stepper-value">{{ pomodoroGoalHours }}h</strong>
              <button
                class="stepper-btn"
                :disabled="pomodoroGoalHours >= 24"
                @click="pomodoroGoalHours = Math.min(24, pomodoroGoalHours + 1)"
              >+</button>
            </div>
          </div>
          <div class="pomodoro-goal-card static">
            <span>Meta actual</span>
            <strong>{{ currentGoalLabel }}</strong>
          </div>
        </div>

        <div class="pomodoro-timer-card">
          <span class="phase-pill">{{ phaseLabel }}</span>
          <strong>{{ clockText }}</strong>
          <p>
            {{ pomodoroSyncing ? `Esperando inicio ${pomodoroSyncLabel}` : (pomodoroRunning ? 'En curso' : 'Listo para continuar') }}
          </p>
        </div>

        <div class="pomodoro-progress-head">
          <span>Avance {{ currentGoalLabel }}</span>
          <strong>{{ focusProgress }}%</strong>
        </div>
        <div class="pomodoro-progress-track">
          <div class="pomodoro-progress-fill" :style="{ width: `${focusProgress}%` }"></div>
        </div>

        <div class="pomodoro-stats-row">
          <article class="pomodoro-stat-card">
            <span>Enfoque acumulado</span>
            <strong>{{ focusAccumulatedLabel }}</strong>
          </article>
          <article class="pomodoro-stat-card">
            <span>Tiempo restante</span>
            <strong>{{ remainingFocusLabel }}</strong>
          </article>
          <article class="pomodoro-stat-card">
            <span>Bloques cerrados</span>
            <strong>{{ closedBlocks }}</strong>
          </article>
        </div>

        <div class="pomodoro-actions">
          <button class="pomodoro-primary" @click="startPomodoro">
            {{ pomodoroRunning ? 'Corriendo' : 'Iniciar' }}
          </button>
          <button class="pomodoro-secondary" @click="skipPhase">Saltar fase</button>
          <button class="pomodoro-secondary" @click="resetPomodoro">Reiniciar</button>
        </div>
      </section>

      <!-- ── Sincronizador UTC ── -->
      <section v-show="activeSection === 'sincronizador'" id="sincronizador" class="sync-panel">
        <div class="sync-head">
          <div>
            <p class="sync-eyebrow">SINCRONIZADOR</p>
            <h2 class="sync-title">Timer UTC</h2>
          </div>
          <span class="sync-utc-badge">{{ syncUtcText }}</span>
        </div>

        <div class="sync-display-wrap">
          <span class="sync-display">{{ syncDisplay }}</span>
        </div>

        <div class="sync-controls">
          <select v-model.number="syncMode" class="eval-control sync-select" @change="onSyncModeChange">
            <option :value="20">20 segundos</option>
            <option :value="60">1 minuto</option>
            <option :value="120">2 minutos</option>
            <option :value="300">5 minutos</option>
          </select>
          <button
            class="primary-button sync-btn-start"
            :disabled="syncRunning || syncWaiting"
            @click="syncStart"
          >
            Start
          </button>
          <button class="ghost-button" @click="syncStop">Stop</button>
        </div>

        <p class="sync-state" :class="{ 'sync-state--running': syncRunning, 'sync-state--waiting': syncWaiting }">
          {{ syncState }}
        </p>
      </section>

      <!-- ── Noticias / Alertas ── -->
      <section v-show="activeSection === 'noticias'" id="noticias" class="noticias-panel">
        <div class="noticias-head">
          <div class="noticias-head-left">
            <p class="noticias-eyebrow">ALERTAS</p>
            <h2 class="noticias-title">Alertas de Noticias</h2>
            <p class="noticias-sub">Crea alertas manuales para CPI, Powell, NFP o cualquier evento que quieras vigilar y la app te avisa 15 minutos antes.</p>
            <p class="noticias-info">Tus recordatorios manuales avisarán por notificación y voz 15 minutos antes.</p>
            <button class="ghost-button noticias-pause-btn" @click="toggleAlertsPause">
              {{ alertsPaused ? 'Reanudar alertas' : 'Pausar alertas' }}
            </button>
          </div>
          <div class="noticias-active-badge">
            <span>Alertas Nasdaq activas</span>
          </div>
        </div>

        <div class="noticias-form">
          <input
            v-model="newAlertText"
            class="eval-control noticias-input-main"
            type="text"
            placeholder="Agregar alerta manual: CPI, Powell, NVIDIA earnings"
            @keydown.enter="addNewsAlert"
          />
          <input v-model="newAlertDate" class="eval-control" type="date" />
          <input v-model="newAlertTime" class="eval-control" type="time" />
          <button class="primary-button" @click="addNewsAlert">Agregar alerta</button>
        </div>

        <div v-if="!newsAlerts.length" class="noticias-empty">
          No hay alertas cargadas todavía. Agrega tu próximo evento manual y la app te avisará 15 minutos antes.
        </div>
        <div v-else class="noticias-list">
          <div
            v-for="alert in newsAlerts"
            :key="alert.id"
            class="noticias-item"
            :class="{ 'noticias-item--fired': alert.fired }"
          >
            <div class="noticias-item-info">
              <strong>{{ alert.text }}</strong>
              <span>{{ alert.date }} · {{ alert.time }}</span>
            </div>
            <span v-if="alert.fired" class="noticias-fired-badge">Avisado</span>
            <button class="eval-remove-btn" @click="removeNewsAlert(alert.id)">×</button>
          </div>
        </div>
      </section>

      <section v-show="activeSection === 'mercado'" id="mercado" class="noticias-panel">
        <section class="market-news-wrap">
          <div class="market-news-head">
            <div>
              <p class="noticias-eyebrow">MERCADO EN VIVO</p>
              <h3 class="market-news-title">Noticias {{ getMarketNewsTitle() }}</h3>
              <p class="market-news-sub">Fuente: NewsAPI.org · Actualización {{ marketNewsLastUpdated || 'pendiente' }}</p>
            </div>
            <div class="market-news-actions">
              <div class="market-news-tabs">
                <button
                  class="market-news-tab"
                  :class="{ 'market-news-tab--active': marketNewsTab === 'nasdaq' }"
                  @click="switchMarketNewsTab('nasdaq')"
                >
                  Nasdaq
                </button>
                <button
                  class="market-news-tab"
                  :class="{ 'market-news-tab--active': marketNewsTab === 'sp500' }"
                  @click="switchMarketNewsTab('sp500')"
                >
                  S&P 500
                </button>
              </div>
              <button class="ghost-button" :disabled="marketNewsLoading" @click="fetchMarketNews">
                {{ marketNewsLoading ? 'Cargando...' : 'Actualizar' }}
              </button>
            </div>
          </div>

          <p v-if="marketNewsError" class="error-banner">{{ marketNewsError }}</p>

          <div v-if="marketNewsLoading" class="market-news-loading">
            Cargando noticias de mercado...
          </div>

          <div v-else-if="marketNews.length" class="market-news-grid">
            <a
              v-for="item in marketNews"
              :key="`${item.url}-${item.publishedAt}`"
              class="market-news-card"
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img v-if="item.image" :src="item.image" :alt="item.title" class="market-news-image" />
              <div class="market-news-content">
                <strong>{{ item.title }}</strong>
                <p>{{ item.description || 'Abrir artículo para más detalles.' }}</p>
                <span>{{ item.source }} · {{ formatMarketNewsDate(item.publishedAt) }}</span>
              </div>
            </a>
          </div>

          <div v-else class="market-news-empty">
            No hay artículos disponibles en este momento para {{ getMarketNewsTitle() }}.
          </div>
        </section>
      </section>

      <!-- ── Teoría Prospectiva ── -->
      <div v-show="activeSection === 'prospectiva'" id="prospectiva"><ProspectTest /></div>

    </section>
    </main>
  </div>

  <!-- ── Intro Modal ── -->
  <Transition name="intro-fade">
    <div v-if="showIntro" class="intro-overlay" @click.self="closeIntro">
      <div class="intro-modal">
        <button class="intro-close" @click="closeIntro" aria-label="Cerrar">×</button>

        <div class="intro-logo">📈</div>
        <h2 class="intro-title">Bienvenido a <span>NasdaqMentor</span></h2>
        <p class="intro-subtitle">Tu plataforma de disciplina y performance para trading profesional en el Nasdaq.</p>

        <div class="intro-features">
          <div class="intro-feature">
            <span class="intro-feature-icon">✅</span>
            <div>
              <strong>Checklist del día</strong>
              <p>Define hasta 10 objetivos diarios y arrastra para reordenarlos. Marca cada tarea como completada y sigue tu progreso en tiempo real.</p>
            </div>
          </div>
          <div class="intro-feature">
            <span class="intro-feature-icon">🧠</span>
            <div>
              <strong>Filtro emocional</strong>
              <p>Antes de operar, completa tu checklist emocional. Si el puntaje sale menor a 5, la app bloquea la operativa 30 minutos para proteger tu capital.</p>
            </div>
          </div>
          <div class="intro-feature">
            <span class="intro-feature-icon">📊</span>
            <div>
              <strong>Registro de Trades</strong>
              <p>Ingresa el valor de R de cada operación, la sesión y una nota. La app calcula tu USD ganado/perdido y tu win rate automáticamente.</p>
            </div>
          </div>
          <div class="intro-feature">
            <span class="intro-feature-icon">📅</span>
            <div>
              <strong>Calendario de Performance</strong>
              <p>Visualiza tu historial mensual de trades día a día. Los días verdes reflejan ganancias, los rojos pérdidas.</p>
            </div>
          </div>
          <div class="intro-feature">
            <span class="intro-feature-icon">⏱</span>
            <div>
              <strong>Pomodoro de Trading</strong>
              <p>Trabaja en bloques de 25 minutos con descansos automáticos. Establece tu meta de horas de enfoque diario.</p>
            </div>
          </div>
          <div class="intro-feature">
            <span class="intro-feature-icon">🔔</span>
            <div>
              <strong>Alertas Nasdaq</strong>
              <p>Programa alertas para eventos clave como CPI, NFP o discursos de la Fed. La app te avisa por voz 15 minutos antes.</p>
            </div>
          </div>
          <div class="intro-feature">
            <span class="intro-feature-icon">🕐</span>
            <div>
              <strong>Sincronizador UTC</strong>
              <p>Mantén tu operativa alineada con los mercados usando el timer UTC sincronizado con los minutos exactos del reloj global.</p>
            </div>
          </div>
          <div class="intro-feature">
            <span class="intro-feature-icon">☁️</span>
            <div>
              <strong>Sincronización en la nube</strong>
              <p>Inicia sesión con Google para guardar tus tareas y trades automáticamente y acceder desde cualquier dispositivo.</p>
            </div>
          </div>
        </div>

        <button class="intro-cta" @click="closeIntro">Comenzar a usar la app →</button>
      </div>
    </div>
  </Transition>

  <!-- Big Five Test Modal -->
  <Transition name="fade">
    <div v-if="showBigFiveTest" class="modal-overlay" @click.self="closeBigFiveTest">
      <div class="modal-content big-five-modal">
        <BigFiveTest 
          @close="closeBigFiveTest"
          @save="saveBigFiveResults"
        />
      </div>
    </div>
  </Transition>

  <Transition name="fade">
    <div v-if="showChartsModal" class="modal-overlay" @click.self="closeChartsModal">
      <div class="modal-content charts-modal">
        <button class="intro-close" @click="closeChartsModal" aria-label="Cerrar">×</button>
        <h3 style="margin-top:0;">Gráficos del día</h3>
        <div v-if="!modalCharts.length">No hay gráficos para esta fecha.</div>
          <div v-else class="charts-grid" style="display:flex;flex-wrap:wrap;gap:12px;">
          <div v-for="c in modalCharts" :key="c.id" style="width:220px;">
            <div class="chart-thumb-wrap" style="position:relative;">
              <button @click="openPreview(c)" style="border:0;background:transparent;padding:0;cursor:pointer;display:block;">
                <img :src="c.url" :alt="c.name || 'chart'" style="width:100%;height:140px;object-fit:cover;border-radius:6px;border:1px solid rgba(0,0,0,0.08)" />
              </button>
              <button class="chart-delete-btn" @click="removeChart(c.id)" aria-label="Eliminar gráfico">×</button>
            </div>
            <div style="margin-top:6px;display:flex;justify-content:space-between;align-items:center;">
              <div style="font-size:0.85em">{{ c.name || c.originalName || 'chart.png' }}</div>
              <a :href="c.url" :download="c.name || c.originalName" style="font-size:0.85em">Descargar</a>
            </div>
          </div>
        </div>

        <Transition name="fade">
          <div v-if="previewChart" class="modal-overlay" @click.self="closePreview">
            <div class="modal-content" style="max-width:900px; width:90%; padding:12px;">
              <button class="intro-close" @click="closePreview" aria-label="Cerrar">×</button>
              <div style="text-align:center;">
                <img :src="previewChart.url || previewChart.dataUrl || previewChart.thumb" :alt="previewChart.name || 'preview'" style="max-width:100%; height:auto; border-radius:8px; box-shadow:0 8px 30px rgba(0,0,0,0.6)" />
                <div style="margin-top:8px; display:flex; justify-content:center; gap:12px;">
                  <a :href="previewChart.url || previewChart.dataUrl" :download="previewChart.name || previewChart.originalName" class="btn">Descargar</a>
                  <button class="btn" @click="closePreview">Cerrar</button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </Transition>

  <!-- ── Notes Modal ── -->
  <Transition name="fade">
    <div v-if="showNotesModal" class="modal-overlay" @click.self="closeNotesModal">
      <div class="modal-content notes-modal">
        <button class="intro-close" @click="closeNotesModal" aria-label="Cerrar">×</button>
        <h3 style="margin-top:0;">📝 Notas del día</h3>
        <div v-if="!dayNotes.length" style="text-align:center; color:#999; padding:20px;">
          No hay notas para este día.
        </div>
        <div v-else class="notes-list">
          <div v-for="(note, idx) in dayNotes" :key="idx" class="note-item">
            <div class="note-number">{{ idx + 1 }}</div>
            <div class="note-content">
              <div class="note-meta">
                <span>{{ note.session || 'Sesion' }}</span>
                <strong :class="note.usd > 0 ? 'pos' : 'neg'">{{ note.usd > 0 ? '+' : '' }}${{ Number(note.usd || 0).toFixed(2) }}</strong>
              </div>
              <div v-if="note.exitTactic" class="note-exit-tactic">
                <span>Táctica de salida:</span> {{ note.exitTactic }}
              </div>
              <div v-if="note.note" class="note-text">{{ note.note }}</div>
              <div v-else class="note-text muted">Sin nota escrita.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
