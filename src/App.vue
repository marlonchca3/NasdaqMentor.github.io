<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { gsap } from 'gsap'
import { onAuthStateChanged } from 'firebase/auth'
import PnlChart from './PnlChart.vue'
import ProspectTest from './ProspectTest.vue'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc,
  writeBatch,
} from 'firebase/firestore'
import { auth, db, loginWithGoogle, logout } from './firebase'

const maxTasks = 10
const user = ref(null)
const authReady = ref(false)

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
let clockInterval = null
const cooldownNow = ref(Date.now())

function toggleTts() {
  ttsEnabled.value = !ttsEnabled.value
  if (typeof window !== 'undefined') {
    localStorage.setItem('ttsEnabled', ttsEnabled.value)
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

  window.speechSynthesis.cancel()

  const utterance = new SpeechSynthesisUtterance(text)

  const voice = getSpanishVoice()
  if (voice) {
    utterance.voice = voice
  }

  utterance.lang = 'es-ES'
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
    speak(buildSpeechText())
  }
}

function initTts() {
  if (!('speechSynthesis' in window)) {
    return
  }

  const tryInit = () => {
    const voices = window.speechSynthesis.getVoices()
    if (voices.length > 0) {
      ttsReady.value = true
    }
  }

  tryInit()
  window.speechSynthesis.onvoiceschanged = tryInit
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

function moveToNextPhase({ countCompletedFocus }) {
  if (pomodoroPhase.value === 'focus') {
    if (countCompletedFocus) {
      closedBlocks.value += 1
      focusAccumulatedSeconds.value += getPhaseSeconds('focus')
    }

    if (closedBlocks.value > 0 && closedBlocks.value % 4 === 0) {
      pomodoroPhase.value = 'longBreak'
      pomodoroTimeLeft.value = getPhaseSeconds('longBreak')
      return false
    }

    pomodoroPhase.value = 'shortBreak'
    pomodoroTimeLeft.value = getPhaseSeconds('shortBreak')
    return false
  }

  pomodoroPhase.value = 'focus'
  pomodoroTimeLeft.value = getPhaseSeconds('focus')
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
const tradesList = ref([])
const tradeInput = ref('')
const tradeError = ref('')
const tradeDate = ref(formatDateForInput(new Date()))
const tradeSession = ref('Sesion')
const tradeNote = ref('')
const calendarMonth = ref(new Date(new Date().getFullYear(), new Date().getMonth(), 1))
let unsubscribeEval = null
let unsubscribeEvalTrades = null
let evalSaveTimer = null

const weekdayLabel = ['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM']

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

function dateKey(value) {
  const d = normalizeDate(value)
  if (!d) return ''
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

const monthLabel = computed(() =>
  calendarMonth.value.toLocaleDateString('es-ES', {
    month: 'long',
    year: 'numeric',
  }),
)

const monthTrades = computed(() => {
  const y = calendarMonth.value.getFullYear()
  const m = calendarMonth.value.getMonth()
  return tradesList.value.filter((trade) => {
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
      map.set(key, { r: 0, trades: 0, usd: 0, tradeDetails: [] })
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
    })
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
  tradeInput.value = ''
  tradeCompliance.value = null
  tradeError.value = ''
}

async function clearAllTrades() {
  if (!confirm('¿Seguro que deseas borrar todos los trades guardados? Esta accion no se puede deshacer.')) {
    return
  }

  if (user.value) {
    const batch = writeBatch(db)
    tradesList.value.forEach((trade) => {
      batch.delete(doc(db, 'users', user.value.uid, 'trades', trade.id))
    })
    await batch.commit()
  } else {
    tradesList.value = []
    persistEvalTrades()
  }

  clearTradeForm()
}

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
const evalTradesToday = computed(() => {
  const todayStr = new Date().toDateString()
  return tradesList.value.filter((t) => {
    const d = normalizeDate(t.tradeDate || t.createdAt)
    if (!d) return false
    return d.toDateString() === todayStr
  })
})
const evalTradesHoy = computed(() => evalTradesToday.value.length)
const evalRHoy = computed(() => evalTradesToday.value.reduce((sum, t) => sum + t.r, 0))
const evalWinRate = computed(() => {
  if (!tradesList.value.length) return 0
  return Math.round((tradesList.value.filter((t) => t.r > 0).length / tradesList.value.length) * 100)
})

// ── Checklist emocional & Disciplina ──────────────────────────────
const emotionalState = ref(null)   // 'calmado' | 'ansioso' | null
const tradeCompliance = ref(null)   // 'segui' | 'parcial' | 'fallo' | null
const weeklyDisciplineBarRef = ref(null)
const operationLockUntil = ref(0)

function applyOperationLock(minutes) {
  const nextLockUntil = Date.now() + (minutes * 60 * 1000)
  operationLockUntil.value = Math.max(operationLockUntil.value, nextLockUntil)
}

const operationLockRemainingMs = computed(() =>
  Math.max(0, operationLockUntil.value - cooldownNow.value),
)

const isOperationLocked = computed(() => operationLockRemainingMs.value > 0)

const operationLockCountdown = computed(() => {
  if (!isOperationLocked.value) {
    return ''
  }

  const totalSeconds = Math.ceil(operationLockRemainingMs.value / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})

function selectEmotionalState(state) {
  emotionalState.value = emotionalState.value === state ? null : state

  if (emotionalState.value === 'calmado') {
    speak('Estado emocional calmado. Estás listo para operar.')
  } else if (emotionalState.value === 'ansioso') {
    speak('Estas ansioso, no operes todavía. Respira y espera por 20 minutos.')
    applyOperationLock(20)
  }
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
  if (emotionalState.value === 'calmado') {
    return 'Estado emocional confirmado. Estás listo para operar.'
  }
  if (emotionalState.value === 'ansioso') {
    return 'No operes todavía. Respira y espera por 20 minutos.'
  }
  return 'Este filtro emocional es obligatorio para abrir la operativa del día.'
})

const lockoutCopy = computed(() => {
  if (!isOperationLocked.value) {
    return ''
  }

  return `Operativa bloqueada temporalmente. Tiempo restante: ${operationLockCountdown.value}.`
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
}

function persistEval() {
  localStorage.setItem(guestEvalKey, JSON.stringify({ oneR: evalOneR.value, objetivo: evalObjetivo.value }))
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

function stopEvalSubscription() {
  if (unsubscribeEval) {
    unsubscribeEval()
    unsubscribeEval = null
  }
  if (unsubscribeEvalTrades) {
    unsubscribeEvalTrades()
    unsubscribeEvalTrades = null
  }
}

function subscribeToEval(userId) {
  stopEvalSubscription()

  unsubscribeEval = onSnapshot(doc(db, 'users', userId, 'eval', 'settings'), (snap) => {
    if (snap.exists()) {
      evalOneR.value = snap.data().oneR ?? 5
      evalObjetivo.value = snap.data().objetivo ?? 58000
    }
  })

  unsubscribeEvalTrades = onSnapshot(collection(db, 'users', userId, 'trades'), (snap) => {
    tradesList.value = snap.docs
      .map((d) => ({
        id: d.id,
        r: d.data().r ?? 0,
        session: d.data().session ?? 'Sesion',
        rules: d.data().rules ?? 1,
        note: d.data().note ?? '',
        tradeDate: normalizeFirestoreDate(d.data().tradeDate),
        createdAt: normalizeFirestoreDate(d.data().createdAt) ?? new Date(),
        rBase: d.data().rBase, // leer el valor de R guardado
        compliance: d.data().compliance ?? null,
      }))
      .sort((a, b) => {
        const ta = normalizeDate(a.createdAt)?.getTime() ?? 0
        const tb = normalizeDate(b.createdAt)?.getTime() ?? 0
        return tb - ta
      })
  })
}

async function saveEvalSettings() {
  try {
    if (user.value) {
      await setDoc(
        doc(db, 'users', user.value.uid, 'eval', 'settings'),
        { oneR: evalOneR.value, objetivo: evalObjetivo.value },
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
  if (isOperationLocked.value) {
    tradeError.value = `Operativa bloqueada. Espera ${operationLockCountdown.value} antes de guardar otro trade.`
    return
  }

  if (!emotionalState.value) {
    tradeError.value = 'Debes confirmar tu estado emocional antes de registrar un trade.'
    return
  }
  if (!tradeCompliance.value) {
    tradeError.value = 'Debes seleccionar el cumplimiento de reglas antes de guardar el trade.'
    return
  }
  const rVal = parseFloat(tradeInput.value)
  if (!Number.isFinite(rVal) || rVal === 0) {
    tradeError.value = 'Debes llenar el campo R antes de guardar el trade.'
    return
  }

  const parsedTradeDate = normalizeDate(tradeDate.value || new Date()) || new Date()

  const payload = {
    r: rVal,
    session: String(tradeSession.value || 'Sesion').slice(0, 40),
    note: String(tradeNote.value || '').slice(0, 140),
    tradeDate: parsedTradeDate,
    rBase: evalOneR.value, // Guardar el valor de R global al crear el trade
    compliance: tradeCompliance.value,
    emotional: emotionalState.value,
  }

  if (user.value) {
    try {
      await addDoc(collection(db, 'users', user.value.uid, 'trades'), {
        ...payload,
        createdAt: serverTimestamp(),
      })
    } catch (err) {
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
}

async function removeTrade(tradeId) {
  if (user.value) {
    await deleteDoc(doc(db, 'users', user.value.uid, 'trades', tradeId))
    return
  }
  tradesList.value = tradesList.value.filter((t) => t.id !== tradeId)
  persistEvalTrades()
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

watch([evalOneR, evalObjetivo], () => {
  scheduleEvalSettingsSave()
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
  syncStop()
  if (syncClockInterval) { clearInterval(syncClockInterval); syncClockInterval = null }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel()
  }
})

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('pagehide', handlePageHide)
    if (!localStorage.getItem('nasdaq-mentor-intro-seen')) {
      showIntro.value = true
    }
  }

  initTts()
  startClock()
  loadNewsAlerts()
  syncUpdateClock()
  syncClockInterval = setInterval(syncUpdateClock, 250)

  onAuthStateChanged(auth, (firebaseUser) => {
    stopTaskSubscription()
    stopEvalSubscription()
    user.value = firebaseUser
    authReady.value = true

    if (firebaseUser) {
      subscribeToTasks(firebaseUser.uid)
      subscribeToEval(firebaseUser.uid)
      return
    }

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
    const [yr, mo, dy] = alert.date.split('-').map(Number)
    const [hh, mm] = alert.time.split(':').map(Number)
    const alertTime = new Date(yr, mo - 1, dy, hh, mm, 0, 0)
    const diffMin = (alertTime.getTime() - now.getTime()) / 60000
    if (diffMin <= 15 && diffMin > 14) {
      alert.fired = true
      speak(`Alerta: ${alert.text} en 15 minutos.`)
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

// ── Sidebar ──────────────────────────────────────────────────────
const sidebarOpen = ref(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  // On mobile, close sidebar after clicking a menu item
  if (window.innerWidth < 768) {
    sidebarOpen.value = false
  }
}
</script>

<template>
  <div class="app-layout">
    <!-- Sidebar -->
    <nav class="sidebar" :class="{ 'sidebar--open': sidebarOpen }">
      <div class="sidebar-brand" :title="sidebarOpen ? 'NasdaqMentor' : ''">
        <span class="sidebar-brand-icon">📈</span>
        <span v-if="sidebarOpen" class="sidebar-brand-text">NasdaqMentor</span>
      </div>
      <ul class="sidebar-menu">
        <li>
          <button class="sidebar-item" title="Checklist" @click="scrollToSection('checklist')">
            <span class="sidebar-icon">✅</span>
            <span class="sidebar-label">Tareas del día</span>
          </button>
        </li>
        <li>
          <button class="sidebar-item" title="Reloj local" @click="scrollToSection('reloj')">
            <span class="sidebar-icon">🕒</span>
            <span class="sidebar-label">Reloj local</span>
          </button>
        </li>
        <li>
          <button class="sidebar-item" title="Evaluación" @click="scrollToSection('evaluacion')">
            <span class="sidebar-icon">📊</span>
            <span class="sidebar-label">Evaluación</span>
          </button>
        </li>
        <li class="sidebar-divider" aria-hidden="true"></li>
        <li>
          <button class="sidebar-item" title="Pomodoro" @click="scrollToSection('pomodoro')">
            <span class="sidebar-icon">⏱</span>
            <span class="sidebar-label">Pomodoro</span>
          </button>
        </li>
        <li>
          <button class="sidebar-item" title="Timer UTC" @click="scrollToSection('sincronizador')">
            <span class="sidebar-icon">🔄</span>
            <span class="sidebar-label">Timer UTC</span>
          </button>
        </li>
        <li>
          <button class="sidebar-item" title="Alertas Nasdaq" @click="scrollToSection('noticias')">
            <span class="sidebar-icon">🔔</span>
            <span class="sidebar-label">Alertas Nasdaq</span>
          </button>
        </li>
        <li class="sidebar-divider" aria-hidden="true"></li>
        <li>
          <button class="sidebar-item" title="Prospectiva" @click="scrollToSection('prospectiva')">
            <span class="sidebar-icon">🧪</span>
            <span class="sidebar-label">Prospectiva</span>
          </button>
        </li>
      </ul>

      <button
        class="sidebar-toggle"
        :title="sidebarOpen ? 'Contraer menú' : 'Expandir menú'"
        @click="toggleSidebar"
      >{{ sidebarOpen ? '‹' : '›' }}</button>
    </nav>

    <!-- Main content -->
    <main class="page-shell main-area" :class="{ 'main-area--shifted': sidebarOpen }">
      <!-- Botón para reabrir el intro -->
      <button class="intro-help-btn" title="¿Cómo funciona la app?" @click="openIntro">?</button>

    <section class="app-card">
      <div id="checklist" class="hero-row">
        <div>
          <p class="eyebrow">Checklist</p>
          <h1>Tareas del dia</h1>
          <p class="subcopy">
            Organiza tu enfoque diario y marca tu progreso con una cuenta de Google.
          </p>

          <div class="tts-row">
            <button
              class="tts-toggle"
              :class="{ active: ttsEnabled }"
              :title="ttsEnabled ? 'Desactivar voz' : 'Activar voz'"
              @click="toggleTts()"
            >
              <span v-if="ttsSpeaking" class="tts-icon">🔊</span>
              <span v-else-if="ttsEnabled" class="tts-icon">🔔</span>
              <span v-else class="tts-icon">🔕</span>
              {{ ttsEnabled ? 'Voz activada' : 'Voz desactivada' }}
            </button>
            <button
              class="tts-preview"
              :disabled="!tasks.length || !ttsReady"
              :title="!ttsReady ? 'Cargando voces...' : 'Hablar ahora'"
              @click="speakNow"
            >
              {{ ttsReady ? 'Probar ahora' : 'Cargando...' }}
            </button>
            <a
              class="velas-btn"
              href="https://marlonchca3.github.io/trading.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🕯️ Ejercicios de Velas 1
            </a>
            <a
              class="velas-btn"
              href="https://marlonchca3.github.io/trading1.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🕯️ Ejercicios de Velas 2
            </a>
            <a
              class="velas-btn"
              href="https://marlonchca3.github.io/trading2.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🕯️ Ejercicios de Velas 3
            </a>
          </div>
        </div>

        <div v-if="authReady" class="auth-panel">
          <template v-if="user">
            <img
              v-if="user.photoURL"
              :src="user.photoURL"
              :alt="user.displayName || 'Usuario'"
              class="avatar"
            />
            <div class="auth-copy">
              <strong>{{ user.displayName }}</strong>
              <span>{{ user.email }}</span>
            </div>
            <button class="ghost-button" :disabled="loading" @click="handleLogout">
              Salir
            </button>
          </template>
          <button v-else class="google-button" :disabled="loading" @click="handleGoogleLogin">
            {{ loading ? 'Conectando...' : 'Iniciar sesion con Google' }}
          </button>
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

      <div class="progress-header">
        <span>Progreso</span>
        <strong>{{ progressValue }}%</strong>
      </div>

      <div class="progress-track">
        <div ref="progressFillRef" class="progress-fill"></div>
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

      <section id="evaluacion" class="eval-panel">

        <!-- ── Checklist emocional ── -->
        <div class="filter-section">
          <div class="filter-section-head">
            <div>
              <p class="filter-eyebrow">Checklist Emocional</p>
              <h2 class="filter-title">Confirma tu estado antes de operar</h2>
              <p class="filter-copy">{{ emotionalCopy }}</p>
            </div>
            <div class="emotional-btns">
              <button
                class="emotional-btn"
                :class="{ 'emotional-btn--calm': emotionalState === 'calmado' }"
                @click="selectEmotionalState('calmado')"
              >Estás calmado</button>
              <button
                class="emotional-btn"
                :class="{ 'emotional-btn--anxious': emotionalState === 'ansioso' }"
                @click="selectEmotionalState('ansioso')"
              >Estás ansioso</button>
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
          <p v-if="isOperationLocked" class="filter-warning">{{ lockoutCopy }}</p>
          <p v-if="!emotionalState" class="filter-warning">Marca primero si estás calmado o ansioso antes de registrar un trade.</p>
        </div>

        <div class="eval-meta-top" style="display: flex; gap: 1rem; margin-bottom: 1rem;">
          <div class="eval-meta-field">
            <label for="r-selector" style="font-size: 0.95em; color: #7fa1d2;">Seleccionador de R ($)</label>
            <input id="r-selector" v-model.number="evalOneR" class="eval-control" type="number" min="1" max="100000" step="1" @change="scheduleEvalSettingsSave" style="width: 120px;" />
          </div>
          <div class="eval-meta-field">
            <label for="objetivo-selector" style="font-size: 0.95em; color: #7fa1d2;">Objetivo ($)</label>
            <input id="objetivo-selector" v-model.number="evalObjetivo" class="eval-control" type="number" min="1" max="10000000" step="1" @change="scheduleEvalSettingsSave" style="width: 160px;" />
          </div>
        </div>
        <div class="eval-objetivo-bar" style="margin-bottom: 1rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="font-size: 0.95em; color: #7fa1d2;">Avance objetivo:</span>
            <strong :style="{ color: evalTotalUSD < 0 ? '#facc15' : '#4ade80' }">${{ evalTotalUSD.toFixed(2) }}</strong>
            <span style="font-size: 0.95em; color: #7fa1d2;">Restante:</span>
            <strong :style="{ color: evalRestanUSD > 0 ? '#4ade80' : '#facc15' }">${{ evalRestanUSD.toFixed(2) }}</strong>
            <span style="font-size: 0.95em; color: #7fa1d2;">Progreso:</span>
            <strong style="color: #60a5fa;">{{ evalProgress }}%</strong>
          </div>
          <div class="objetivo-progress-track" style="background: #222b3a; border-radius: 8px; height: 16px; margin-top: 6px; width: 100%;">
            <div class="objetivo-progress-fill" :style="{ width: evalProgress + '%', background: '#4ade80', height: '100%', borderRadius: '8px' }"></div>
          </div>
        </div>
        <div class="eval-journal-top">
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
            type="text"
            inputmode="decimal"
            placeholder="R"
            @keydown.enter="addTrade"
          />
          <input
            v-model="tradeNote"
            class="eval-control"
            type="text"
            maxlength="140"
            placeholder="Nota"
          />
        </div>

        <div class="eval-journal-actions">
          <button class="primary-button" :disabled="isOperationLocked" @click="addTrade">Guardar trade</button>
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
                <th>Fecha</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="!tradesList.length">
                <td colspan="6" class="empty-row">Aun no hay trades registrados</td>
              </tr>
              <tr v-for="trade in tradesList.slice(0, 8)" :key="trade.id">
                <td :class="(trade.r * (typeof trade.rBase === 'number' ? trade.rBase : evalOneR.value)) > 0 ? 'pos' : ((trade.r * (typeof trade.rBase === 'number' ? trade.rBase : evalOneR.value)) < 0 ? 'neg' : '')">
                  <template v-if="typeof trade.rBase === 'number'">
                    {{ trade.r > 0 ? '+' : '' }}${{ (trade.r * trade.rBase).toFixed(2) }}
                  </template>
                  <template v-else>
                    <span style="color: #f87171; font-size: 0.95em;">Sin R guardado</span>
                  </template>
                </td>
                <td :class="trade.r > 0 ? 'pos' : (trade.r < 0 ? 'neg' : '')">{{ trade.r > 0 ? '+' : '' }}{{ trade.r.toFixed(2) }}R</td>
                <td>{{ trade.session || 'Sesion' }}</td>
                <td>{{ trade.note || '-' }}</td>
                <td>
                  {{ formatDateCell(normalizeDate(trade.tradeDate || trade.createdAt)) }}
                  <span v-if="normalizeDate(trade.createdAt)" style="display:block;font-size:0.8em;opacity:0.6;">{{ formatTimeFromDate(normalizeDate(trade.createdAt)) }}</span>
                </td>
                <td>
                  <button class="eval-remove-btn" @click="removeTrade(trade.id)">×</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <PnlChart :trades="tradesList" :one-r="evalOneR" />

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
            <div v-if="day.inMonth" class="calendar-cell-content">
              <strong>{{ day.dayNumber }}</strong>
              <small v-if="day.trades">{{ day.trades }} trade{{ day.trades > 1 ? 's' : '' }} realizados</small>
              <small
                v-if="day.trades"
                class="calendar-usd"
                :class="{ pos: day.usd > 0, neg: day.usd < 0 }"
              >
                {{ day.usd > 0 ? '+' : '' }}${{ day.usd.toFixed(2) }}
              </small>

              <div v-if="day.trades" class="calendar-tooltip">
                <p>Trades del dia</p>
                <ul>
                  <li v-for="trade in day.tradeDetails" :key="trade.id">
                    <span>{{ trade.session }}</span>
                    <strong :class="trade.usd > 0 ? 'pos' : 'neg'">
                      {{ trade.usd > 0 ? '+' : '' }}${{ trade.usd.toFixed(2) }}
                    </strong>
                  </li>
                </ul>
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

      <section id="pomodoro" class="pomodoro-panel">
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
      <section id="sincronizador" class="sync-panel">
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
      <section id="noticias" class="noticias-panel">
        <div class="noticias-head">
          <div class="noticias-head-left">
            <p class="noticias-eyebrow">ALERTAS</p>
            <h2 class="noticias-title">Noticias Nasdaq</h2>
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

      <!-- ── Teoría Prospectiva ── -->
      <div id="prospectiva"><ProspectTest /></div>

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
              <p>Antes de operar, confirma tu estado emocional. Si estás ansioso, la app bloquea la operativa 20 minutos para proteger tu capital.</p>
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
</template>
