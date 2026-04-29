<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { onAuthStateChanged } from 'firebase/auth'
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
const ttsSpeaking = ref(false)
const ttsReady = ref(false)
let clockInterval = null

function getSpanishVoice() {
  const voices = window.speechSynthesis.getVoices()
  return (
    voices.find((v) => v.lang === 'es-ES') ||
    voices.find((v) => v.lang.startsWith('es')) ||
    null
  )
}

function speak(text) {
  if (!('speechSynthesis' in window)) {
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
  speak(buildSpeechText())
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
const evalOneR = ref(5)
const evalObjetivo = ref(58000)
const tradesList = ref([])
const tradeInput = ref('')
const tradeDate = ref(formatDateForInput(new Date()))
const tradeSession = ref('Sesion')
const tradeRules = ref(1)
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

function normalizeDate(value) {
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

const evalRMes = computed(() => monthTrades.value.reduce((sum, trade) => sum + trade.r, 0))
const evalUsdMes = computed(() => evalRMes.value * evalOneR.value)
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
      map.set(key, { r: 0, trades: 0 })
    }

    const slot = map.get(key)
    slot.r += trade.r
    slot.trades += 1
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
    const totals = week.reduce(
      (acc, day) => {
        if (!day.inMonth) return acc
        acc.r += day.r
        acc.trades += day.trades
        if (day.trades > 0) {
          acc.activeDays += 1
        }
        return acc
      },
      { r: 0, trades: 0, activeDays: 0 },
    )

    return {
      id: `week-${index + 1}`,
      weekNumber: index + 1,
      ...totals,
      usd: totals.r * evalOneR.value,
    }
  }),
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
  tradeRules.value = 1
  tradeNote.value = ''
  tradeInput.value = ''
}

const evalTotalR = computed(() => tradesList.value.reduce((sum, t) => sum + t.r, 0))
const evalTotalUSD = computed(() => evalTotalR.value * evalOneR.value)
const evalRestanR = computed(() => {
  if (!evalOneR.value) return 0
  return (evalObjetivo.value / evalOneR.value) - evalTotalR.value
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
        ? parsed.map((t) => ({
          ...t,
          tradeDate: normalizeDate(t.tradeDate),
          createdAt: normalizeDate(t.createdAt) || new Date(),
        }))
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
      }))
      .sort((a, b) => {
        const ta = normalizeDate(a.tradeDate || a.createdAt)?.getTime() ?? 0
        const tb = normalizeDate(b.tradeDate || b.createdAt)?.getTime() ?? 0
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
  const rVal = parseFloat(tradeInput.value)
  if (!Number.isFinite(rVal) || rVal === 0) return

  const rulesVal = Number.parseInt(tradeRules.value, 10)
  const parsedTradeDate = normalizeDate(tradeDate.value || new Date()) || new Date()

  const payload = {
    r: rVal,
    session: String(tradeSession.value || 'Sesion').slice(0, 40),
    rules: Number.isFinite(rulesVal) ? Math.max(1, Math.min(99, rulesVal)) : 1,
    note: String(tradeNote.value || '').slice(0, 140),
    tradeDate: parsedTradeDate,
  }

  if (user.value) {
    await addDoc(collection(db, 'users', user.value.uid, 'trades'), {
      ...payload,
      createdAt: serverTimestamp(),
    })
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
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel()
  }
})

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('pagehide', handlePageHide)
  }

  initTts()
  startClock()

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
})
</script>

<template>
  <main class="page-shell">
    <section class="app-card">
      <div class="hero-row">
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
              @click="ttsEnabled = !ttsEnabled"
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
        <div class="progress-fill" :style="{ width: `${progressValue}%` }"></div>
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

      <section class="eval-panel">
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
            <strong style="color: #4ade80;">${{ evalTotalUSD.toFixed(2) }}</strong>
            <span style="font-size: 0.95em; color: #7fa1d2;">Restante:</span>
            <strong style="color: #f87171;">${{ evalRestanUSD.toFixed(2) }}</strong>
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
            v-model.number="tradeRules"
            class="eval-control"
            type="number"
            min="1"
            max="99"
            placeholder="Reglas"
          />
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
          <button class="primary-button" @click="addTrade">Guardar trade</button>
          <button class="ghost-button" @click="clearTradeForm">Limpiar</button>
        </div>

        <div class="eval-table-wrap">
          <table class="eval-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Sesion</th>
                <th>Reglas</th>
                <th>R</th>
                <th>USD</th>
                <th>Nota</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="!tradesList.length">
                <td colspan="7" class="empty-row">Aun no hay trades registrados</td>
              </tr>
              <tr v-for="trade in tradesList.slice(0, 8)" :key="trade.id">
                <td>{{ formatDateCell(normalizeDate(trade.tradeDate || trade.createdAt)) }}</td>
                <td>{{ trade.session || 'Sesion' }}</td>
                <td>{{ trade.rules || 1 }}</td>
                <td :class="trade.r > 0 ? 'pos' : 'neg'">{{ trade.r > 0 ? '+' : '' }}{{ trade.r.toFixed(2) }}R</td>
                <td>{{ trade.r > 0 ? '+' : '' }}${{ (trade.r * evalOneR).toFixed(2) }}</td>
                <td>{{ trade.note || '-' }}</td>
                <td>
                  <button class="eval-remove-btn" @click="removeTrade(trade.id)">×</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

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
            <span>R del mes</span>
            <strong>{{ evalRMes.toFixed(2) }}R</strong>
          </div>
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
              pos: day.r > 0,
              neg: day.r < 0,
              today: day.inMonth && isToday(day.date),
            }"
          >
            <div v-if="day.inMonth" class="calendar-cell-content">
              <strong>{{ day.dayNumber }}</strong>
              <span v-if="day.trades">{{ day.r > 0 ? '+' : '' }}{{ day.r.toFixed(2) }}R</span>
              <small v-if="day.trades">{{ day.trades }} trade{{ day.trades > 1 ? 's' : '' }}</small>
            </div>
          </article>

          <aside class="calendar-week-summary">
            <p>Semana {{ weeklySummaries[weekIndex]?.weekNumber || weekIndex + 1 }}</p>
            <strong>{{ (weeklySummaries[weekIndex]?.r || 0).toFixed(2) }}R</strong>
            <span>${{ (weeklySummaries[weekIndex]?.usd || 0).toFixed(2) }}</span>
            <small>{{ weeklySummaries[weekIndex]?.activeDays || 0 }} dias</small>
          </aside>
        </div>
      </section>

      <section class="pomodoro-panel">
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

    </section>
  </main>
</template>
