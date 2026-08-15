<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  trades: {
    type: Array,
    default: () => [],
  },
  oneR: {
    type: Number,
    default: 5,
  },
})

const expandedChart = ref('')

function openChart(chartKey) {
  expandedChart.value = chartKey
}

function closeChart() {
  expandedChart.value = ''
}

// Calcular métricas principales
const netPnl = computed(() => {
  return props.trades.reduce((sum, t) => sum + (t.r * (t.rBase ?? props.oneR)), 0)
})

const winningTrades = computed(() => {
  return props.trades.filter((t) => (t.r * (t.rBase ?? props.oneR)) > 0).length
})

const losingTrades = computed(() => {
  return props.trades.filter((t) => (t.r * (t.rBase ?? props.oneR)) < 0).length
})

const totalTrades = computed(() => props.trades.length)

const winRate = computed(() => {
  if (totalTrades.value === 0) return 0
  return Math.round((winningTrades.value / totalTrades.value) * 100)
})

const totalGains = computed(() => {
  return props.trades
    .filter((t) => (t.r * (t.rBase ?? props.oneR)) > 0)
    .reduce((sum, t) => sum + (t.r * (t.rBase ?? props.oneR)), 0)
})

const totalLosses = computed(() => {
  return Math.abs(
    props.trades
      .filter((t) => (t.r * (t.rBase ?? props.oneR)) < 0)
      .reduce((sum, t) => sum + (t.r * (t.rBase ?? props.oneR)), 0)
  )
})

const profitFactor = computed(() => {
  if (totalLosses.value === 0) return totalGains.value > 0 ? Infinity : 0
  return totalGains.value / totalLosses.value
})

const avgWin = computed(() => {
  if (winningTrades.value === 0) return 0
  return totalGains.value / winningTrades.value
})

const avgLoss = computed(() => {
  if (losingTrades.value === 0) return 0
  return totalLosses.value / losingTrades.value
})

const avgWinLossRatio = computed(() => {
  if (avgLoss.value === 0) return 0
  return avgWin.value / avgLoss.value
})

const expectancy = computed(() => {
  if (totalTrades.value === 0) return 0
  const winProbability = totalTrades.value > 0 ? winningTrades.value / totalTrades.value : 0
  const loseProbability = totalTrades.value > 0 ? losingTrades.value / totalTrades.value : 0
  return (winProbability * avgWin.value) - (loseProbability * avgLoss.value)
})

const sortedTrades = computed(() => {
  return [...props.trades].sort((a, b) => {
    const timeA = new Date(a.tradeDate || a.createdAt).getTime()
    const timeB = new Date(b.tradeDate || b.createdAt).getTime()
    return timeA - timeB
  })
})

// Calcular Max Drawdown
const maxDrawdown = computed(() => {
  if (props.trades.length === 0) return 0
  
  let peak = 0
  let maxDrawdownValue = 0
  let runningBalance = 0
  
  props.trades.forEach((trade) => {
    const tradeUsd = trade.r * (trade.rBase ?? props.oneR)
    runningBalance += tradeUsd
    if (runningBalance > peak) {
      peak = runningBalance
    }
    const drawdown = peak - runningBalance
    if (drawdown > maxDrawdownValue) {
      maxDrawdownValue = drawdown
    }
  })
  
  return maxDrawdownValue
})

// Datos para gráficos
const cumulativePnl = computed(() => {
  const data = []
  let running = 0
  
  sortedTrades.value.forEach((trade) => {
    const tradeUsd = trade.r * (trade.rBase ?? props.oneR)
    running += tradeUsd
    data.push({
      date: new Date(trade.tradeDate || trade.createdAt),
      value: running,
    })
  })
  
  return data
})

const scatterData = computed(() => {
  return sortedTrades.value.map((trade, index) => ({
    index: index + 1,
    r: Number(trade.r) || 0,
    usd: (Number(trade.r) || 0) * (trade.rBase ?? props.oneR),
    date: new Date(trade.tradeDate || trade.createdAt),
    session: trade.session || 'Sesion',
  }))
})

const scatterYAxis = computed(() => {
  const values = scatterData.value.map((point) => point.r)
  if (!values.length) return []

  const min = Math.min(0, ...values)
  const max = Math.max(0, ...values)
  const spread = max - min || 1

  return Array.from({ length: 5 }, (_, index) => {
    const ratio = index / 4
    const value = max - spread * ratio
    return {
      value,
      y: 170 - ratio * 150,
    }
  })
})

const scatterXLabels = computed(() => {
  if (!scatterData.value.length) return []

  const step = Math.max(1, Math.ceil(scatterData.value.length / 4))
  return scatterData.value
    .filter((point, index) => index === 0 || index === scatterData.value.length - 1 || index % step === 0)
    .map((point, index) => ({
      label: `#${point.index}`,
      x: 30 + ((point.index - 1) / Math.max(1, scatterData.value.length - 1)) * 360,
      key: `${point.index}-${index}`,
    }))
})

const scatterZeroY = computed(() => {
  const values = scatterData.value.map((point) => point.r)
  if (!values.length) return 170

  const min = Math.min(0, ...values)
  const max = Math.max(0, ...values)
  const range = max - min || 1
  return 170 - ((0 - min) / range) * 150
})

const scatterPoints = computed(() => {
  const values = scatterData.value.map((point) => point.r)
  if (!values.length) return []

  const min = Math.min(0, ...values)
  const max = Math.max(0, ...values)
  const range = max - min || 1

  return scatterData.value.map((point) => ({
    ...point,
    x: 30 + ((point.index - 1) / Math.max(1, scatterData.value.length - 1)) * 360,
    y: 170 - ((point.r - min) / range) * 150,
    color: point.r >= 0 ? '#4ade80' : '#f87171',
  }))
})

// Agrupar por día para gráfico diario
const dailyPnl = computed(() => {
  const byDate = {}
  props.trades.forEach((trade) => {
    const date = new Date(trade.tradeDate || trade.createdAt)
    const key = date.toISOString().split('T')[0]
    if (!byDate[key]) byDate[key] = []
    byDate[key].push(trade)
  })
  
  return Object.entries(byDate).map(([date, trades]) => ({
    date,
    value: trades.reduce((sum, t) => sum + (t.r * (t.rBase ?? props.oneR)), 0),
    trades: trades.length,
  })).sort((a, b) => a.date.localeCompare(b.date))
})

// Distribución de resultados
const resultsDistribution = computed(() => {
  return [
    { label: `Ganancias (${winningTrades.value})`, value: winningTrades.value, color: '#4ade80' },
    { label: `Pérdidas (${losingTrades.value})`, value: losingTrades.value, color: '#f87171' },
  ]
})

// Calcular dimensiones del gráfico pastel
const pieChartRadius = 60
const pieChartCx = 80
const pieChartCy = 80

const pieSlices = computed(() => {
  const total = winningTrades.value + losingTrades.value
  if (total === 0) return []
  
  const slices = []
  let currentAngle = 0
  
  resultsDistribution.value.forEach((item) => {
    const sliceAngle = (item.value / total) * 360
    const startAngle = currentAngle
    const endAngle = currentAngle + sliceAngle
    
    const startRad = (startAngle * Math.PI) / 180
    const endRad = (endAngle * Math.PI) / 180
    
    const x1 = pieChartCx + pieChartRadius * Math.cos(startRad)
    const y1 = pieChartCy + pieChartRadius * Math.sin(startRad)
    const x2 = pieChartCx + pieChartRadius * Math.cos(endRad)
    const y2 = pieChartCy + pieChartRadius * Math.sin(endRad)
    
    const largeArc = sliceAngle > 180 ? 1 : 0
    
    const path = `M ${pieChartCx} ${pieChartCy} L ${x1} ${y1} A ${pieChartRadius} ${pieChartRadius} 0 ${largeArc} 1 ${x2} ${y2} Z`
    
    slices.push({
      path,
      color: item.color,
      label: item.label,
    })
    
    currentAngle = endAngle
  })
  
  return slices
})

const cumulativeYAxis = computed(() => {
  const values = cumulativePnl.value.map((point) => point.value)
  if (!values.length) return []

  const min = Math.min(0, ...values)
  const max = Math.max(0, ...values)
  const spread = max - min || 1

  return Array.from({ length: 5 }, (_, index) => {
    const ratio = index / 4
    const value = max - spread * ratio
    return {
      value,
      y: 170 - ratio * 150,
    }
  })
})

const cumulativeXLabels = computed(() => {
  if (!cumulativePnl.value.length) return []

  const step = Math.max(1, Math.ceil(cumulativePnl.value.length / 4))
  return cumulativePnl.value
    .map((point, index) => ({ point, index }))
    .filter(({ index }) => index === 0 || index === cumulativePnl.value.length - 1 || index % step === 0)
    .map(({ point, index }) => ({
      label: formatDateLabel(point.date),
      x: 30 + (index / Math.max(1, cumulativePnl.value.length - 1)) * 360,
    }))
})

const dailyYAxis = computed(() => {
  const values = dailyPnl.value.map((point) => point.value)
  if (!values.length) return []

  const min = Math.min(0, ...values)
  const max = Math.max(0, ...values)
  const spread = max - min || 1

  return Array.from({ length: 5 }, (_, index) => {
    const ratio = index / 4
    const value = max - spread * ratio
    return {
      value,
      y: 170 - ratio * 150,
    }
  })
})

const dailyXLabels = computed(() => {
  if (!dailyPnl.value.length) return []

  const step = Math.max(1, Math.ceil(dailyPnl.value.length / 4))
  return dailyPnl.value
    .map((point, index) => ({ point, index }))
    .filter(({ index }) => index === 0 || index === dailyPnl.value.length - 1 || index % step === 0)
    .map(({ point, index }) => ({
      label: formatDateLabel(point.date),
      x: 30 + (index / Math.max(1, dailyPnl.value.length - 1)) * 360,
    }))
})

// Formatear valores USD
function formatUsd(value) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value)
}

function formatAxisUsd(value) {
  const absolute = Math.abs(value)
  if (absolute >= 1000) return `$${(value / 1000).toFixed(1)}k`
  return `$${value.toFixed(0)}`
}

function formatDateLabel(value) {
  return new Intl.DateTimeFormat('es-ES', {
    month: 'short',
    day: 'numeric',
  }).format(new Date(value))
}
</script>

<template>
  <div class="dashboard-container">
    <div class="metrics-grid">
      <!-- NET P&L -->
      <div class="metric-card">
        <span class="metric-label">NET P&L</span>
        <strong :style="{ color: netPnl >= 0 ? '#4ade80' : '#f87171' }">
          {{ formatUsd(netPnl) }}
        </strong>
        <span class="metric-change" :style="{ color: netPnl >= 0 ? '#4ade80' : '#f87171' }">
          {{ netPnl >= 0 ? '+' : '' }}{{ (netPnl / (totalTrades > 0 ? totalTrades : 1)).toFixed(2) }} por trade
        </span>
      </div>

      <!-- WIN RATE -->
      <div class="metric-card">
        <span class="metric-label">WIN RATE</span>
        <strong style="color: #60a5fa;">{{ winRate }}%</strong>
        <span class="metric-change">{{ winningTrades }} / {{ totalTrades }}</span>
      </div>

      <!-- PROFIT FACTOR -->
      <div class="metric-card">
        <span class="metric-label">PROFIT FACTOR</span>
        <strong :style="{ color: profitFactor >= 1.5 ? '#4ade80' : profitFactor >= 1 ? '#fbbf24' : '#f87171' }">
          {{ profitFactor === Infinity ? '∞' : profitFactor.toFixed(2) }}
        </strong>
        <span class="metric-change">
          Ganancia: {{ formatUsd(totalGains) }} / Pérdida: {{ formatUsd(totalLosses) }}
        </span>
      </div>

      <!-- AVG WIN/LOSS -->
      <div class="metric-card">
        <span class="metric-label">AVG WIN / LOSS</span>
        <strong style="color: #a78bfa;">{{ avgWinLossRatio.toFixed(2) }}</strong>
        <span class="metric-change">
          W: {{ formatUsd(avgWin) }} / L: {{ formatUsd(avgLoss) }}
        </span>
      </div>

      <!-- EXPECTANCY -->
      <div class="metric-card">
        <span class="metric-label">EXPECTANCY (R)</span>
        <strong :style="{ color: expectancy >= 0 ? '#4ade80' : '#f87171' }">
          {{ expectancy.toFixed(2) }}
        </strong>
        <span class="metric-change">Esperado por trade</span>
      </div>

      <!-- MAX DRAWDOWN -->
      <div class="metric-card">
        <span class="metric-label">MAX DRAWDOWN</span>
        <strong style="color: #f87171;">{{ formatUsd(-maxDrawdown) }}</strong>
        <span class="metric-change">{{ ((maxDrawdown / (netPnl > 0 ? netPnl : 1)) * 100).toFixed(1) }}% del P&L</span>
      </div>
    </div>

    <div class="charts-grid">
      <div v-if="expandedChart" class="chart-backdrop" @click="closeChart"></div>

      <!-- P&L Acumulado -->
      <div
        class="chart-card chart-card--clickable"
        :class="{ 'chart-card--expanded': expandedChart === 'cumulative' }"
        role="button"
        tabindex="0"
        aria-label="Ampliar gráfico P&L acumulado"
        @click="openChart('cumulative')"
        @keydown.enter="openChart('cumulative')"
        @keydown.space.prevent="openChart('cumulative')"
      >
        <button
          v-if="expandedChart === 'cumulative'"
          class="chart-close"
          type="button"
          aria-label="Cerrar gráfico ampliado"
          @click.stop="closeChart"
        >
          ×
        </button>
        <h3>P&L Acumulado</h3>
        <svg class="line-chart" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
          <line x1="30" y1="20" x2="30" y2="170" stroke="#444" stroke-width="1" />
          <line x1="30" y1="170" x2="390" y2="170" stroke="#444" stroke-width="1" />

          <g v-if="cumulativeYAxis.length">
            <line
              v-for="(tick, i) in cumulativeYAxis"
              :key="i"
              :x1="30"
              :x2="390"
              :y1="tick.y"
              :y2="tick.y"
              stroke="#334155"
              stroke-width="1"
              stroke-dasharray="3 3"
            />
            <text
              v-for="(tick, i) in cumulativeYAxis"
              :key="`y-${i}`"
              x="6"
              :y="tick.y + 4"
              fill="#cbd5e1"
              font-size="9"
              text-anchor="start"
            >
              {{ formatAxisUsd(tick.value) }}
            </text>
          </g>

          <polyline
            v-if="cumulativePnl.length"
            :points="cumulativePnl.map((d, i) => {
              const x = 30 + (i / Math.max(1, cumulativePnl.length - 1)) * 360
              const min = Math.min(0, ...cumulativePnl.map(c => c.value))
              const max = Math.max(0, ...cumulativePnl.map(c => c.value))
              const range = max - min || 1
              const y = 170 - ((d.value - min) / range) * 150
              return [x, y].join(',')
            }).join(' ')"
            fill="none"
            stroke="#4ade80"
            stroke-width="2"
          />

          <polygon
            v-if="cumulativePnl.length"
            :points="`30,170 ${cumulativePnl.map((d, i) => {
              const x = 30 + (i / Math.max(1, cumulativePnl.length - 1)) * 360
              const min = Math.min(0, ...cumulativePnl.map(c => c.value))
              const max = Math.max(0, ...cumulativePnl.map(c => c.value))
              const range = max - min || 1
              const y = 170 - ((d.value - min) / range) * 150
              return [x, y].join(',')
            }).join(' ')} 390,170`"
            fill="rgba(74, 222, 128, 0.1)"
          />

          <g v-if="cumulativeXLabels.length">
            <text
              v-for="(label, i) in cumulativeXLabels"
              :key="`x-${i}`"
              :x="label.x"
              y="190"
              fill="#cbd5e1"
              font-size="9"
              text-anchor="middle"
            >
              {{ label.label }}
            </text>
          </g>

          <text x="8" y="18" fill="#94a3b8" font-size="10" font-weight="600">USD</text>
        </svg>
      </div>

      <!-- P&L Diario -->
      <div
        class="chart-card chart-card--clickable"
        :class="{ 'chart-card--expanded': expandedChart === 'daily' }"
        role="button"
        tabindex="0"
        aria-label="Ampliar gráfico P&L diario"
        @click="openChart('daily')"
        @keydown.enter="openChart('daily')"
        @keydown.space.prevent="openChart('daily')"
      >
        <button
          v-if="expandedChart === 'daily'"
          class="chart-close"
          type="button"
          aria-label="Cerrar gráfico ampliado"
          @click.stop="closeChart"
        >
          ×
        </button>
        <h3>P&L Diario</h3>
        <svg class="bar-chart" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
          <line x1="30" y1="20" x2="30" y2="170" stroke="#444" stroke-width="1" />
          <line x1="30" y1="170" x2="390" y2="170" stroke="#444" stroke-width="1" />

          <g v-if="dailyYAxis.length">
            <line
              v-for="(tick, i) in dailyYAxis"
              :key="i"
              :x1="30"
              :x2="390"
              :y1="tick.y"
              :y2="tick.y"
              stroke="#334155"
              stroke-width="1"
              stroke-dasharray="3 3"
            />
            <text
              v-for="(tick, i) in dailyYAxis"
              :key="`daily-y-${i}`"
              x="6"
              :y="tick.y + 4"
              fill="#cbd5e1"
              font-size="9"
              text-anchor="start"
            >
              {{ formatAxisUsd(tick.value) }}
            </text>
          </g>

          <g v-if="dailyPnl.length">
            <rect
              v-for="(day, i) in dailyPnl"
              :key="day.date"
              :x="30 + (i / Math.max(1, dailyPnl.length - 1)) * 360 - 8"
              :y="day.value >= 0 ? 170 - (day.value / Math.max(...dailyPnl.map(d => Math.abs(d.value))) || 1) * 150 : 170"
              :width="16"
              :height="Math.abs((day.value / Math.max(...dailyPnl.map(d => Math.abs(d.value))) || 1) * 150)"
              :fill="day.value >= 0 ? '#4ade80' : '#f87171'"
              :opacity="0.7"
            />
          </g>

          <g v-if="dailyXLabels.length">
            <text
              v-for="(label, i) in dailyXLabels"
              :key="`daily-x-${i}`"
              :x="label.x"
              y="190"
              fill="#cbd5e1"
              font-size="9"
              text-anchor="middle"
            >
              {{ label.label }}
            </text>
          </g>

          <text x="8" y="18" fill="#94a3b8" font-size="10" font-weight="600">USD</text>
        </svg>
      </div>

      <!-- Gráfico de Dispersión -->
      <div
        class="chart-card chart-card--clickable"
        :class="{ 'chart-card--expanded': expandedChart === 'scatter' }"
        role="button"
        tabindex="0"
        aria-label="Ampliar gráfico de dispersión"
        @click="openChart('scatter')"
        @keydown.enter="openChart('scatter')"
        @keydown.space.prevent="openChart('scatter')"
      >
        <button
          v-if="expandedChart === 'scatter'"
          class="chart-close"
          type="button"
          aria-label="Cerrar gráfico ampliado"
          @click.stop="closeChart"
        >
          ×
        </button>
        <h3>Dispersión por Trade (R)</h3>
        <div class="chart-summary">Cada punto representa un trade cerrado</div>
        <svg class="scatter-chart" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
          <line x1="30" y1="20" x2="30" y2="170" stroke="#444" stroke-width="1" />
          <line x1="30" y1="170" x2="390" y2="170" stroke="#444" stroke-width="1" />

          <g v-if="scatterYAxis.length">
            <line
              v-for="(tick, i) in scatterYAxis"
              :key="`scatter-grid-${i}`"
              :x1="30"
              :x2="390"
              :y1="tick.y"
              :y2="tick.y"
              stroke="#334155"
              stroke-width="1"
              stroke-dasharray="3 3"
            />
            <text
              v-for="(tick, i) in scatterYAxis"
              :key="`scatter-y-${i}`"
              x="6"
              :y="tick.y + 4"
              fill="#cbd5e1"
              font-size="9"
              text-anchor="start"
            >
              {{ tick.value.toFixed(1) }}R
            </text>
          </g>

          <line
            v-if="scatterPoints.length"
            x1="30"
            x2="390"
            :y1="scatterZeroY"
            :y2="scatterZeroY"
            stroke="#94a3b8"
            stroke-width="1.5"
            stroke-dasharray="5 4"
            opacity="0.75"
          />

          <g v-if="scatterPoints.length">
            <circle
              v-for="point in scatterPoints"
              :key="point.index"
              :cx="point.x"
              :cy="point.y"
              :r="point.r === 0 ? 4 : 5"
              :fill="point.color"
              stroke="#0f172a"
              stroke-width="1.5"
              opacity="0.9"
            >
              <title>
                Trade #{{ point.index }} · {{ point.r.toFixed(2) }}R · {{ formatUsd(point.usd) }} · {{ formatDateLabel(point.date) }}
              </title>
            </circle>
          </g>

          <g v-if="scatterXLabels.length">
            <text
              v-for="label in scatterXLabels"
              :key="label.key"
              :x="label.x"
              y="190"
              fill="#cbd5e1"
              font-size="9"
              text-anchor="middle"
            >
              {{ label.label }}
            </text>
          </g>

          <text x="8" y="18" fill="#94a3b8" font-size="10" font-weight="600">R</text>
          <text x="340" y="188" fill="#94a3b8" font-size="10" font-weight="600">Trades</text>
        </svg>
      </div>

      <!-- Distribución de Resultados -->
      <div
        class="chart-card chart-card--clickable"
        :class="{ 'chart-card--expanded': expandedChart === 'distribution' }"
        role="button"
        tabindex="0"
        aria-label="Ampliar gráfico de distribución de resultados"
        @click="openChart('distribution')"
        @keydown.enter="openChart('distribution')"
        @keydown.space.prevent="openChart('distribution')"
      >
        <button
          v-if="expandedChart === 'distribution'"
          class="chart-close"
          type="button"
          aria-label="Cerrar gráfico ampliado"
          @click.stop="closeChart"
        >
          ×
        </button>
        <h3>Distribución de Resultados (R)</h3>
        <div class="chart-summary">Total de trades: {{ totalTrades }}</div>
        <svg class="pie-chart" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
          <g v-if="pieSlices.length > 0">
            <path
              v-for="(slice, i) in pieSlices"
              :key="i"
              :d="slice.path"
              :fill="slice.color"
              stroke="#0f172a"
              stroke-width="1"
            />
          </g>
          <circle v-else cx="80" cy="80" r="3" fill="#999" />
        </svg>
        <div class="pie-legend">
          <div
            v-for="(item, i) in resultsDistribution"
            :key="i"
            class="legend-item"
          >
            <span class="legend-color" :style="{ backgroundColor: item.color }"></span>
            <span class="legend-label">{{ item.label }}</span>
            <span class="legend-percent">{{ ((item.value / totalTrades) * 100).toFixed(1) }}%</span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="totalTrades === 0" class="empty-state">
      <p>No hay datos de trades. Comienza a registrar operaciones para ver tu dashboard.</p>
    </div>
  </div>
</template>

<style scoped>
.dashboard-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.5rem 0;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
}

.metric-card {
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.8));
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 0.75rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.metric-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #94a3b8;
  font-weight: 600;
}

.metric-card strong {
  font-size: 1.5rem;
  font-weight: 700;
}

.metric-change {
  font-size: 0.75rem;
  color: #cbd5e1;
  line-height: 1.2;
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.chart-card {
  position: relative;
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.8));
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.chart-card--clickable {
  cursor: zoom-in;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
}

.chart-card--clickable:hover,
.chart-card--clickable:focus-visible {
  border-color: rgba(96, 165, 250, 0.55);
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.28);
  outline: none;
  transform: translateY(-2px);
}

.chart-backdrop {
  position: fixed;
  inset: 0;
  z-index: 80;
  background: rgba(2, 6, 23, 0.82);
  backdrop-filter: blur(8px);
}

.chart-card--expanded {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 90;
  width: min(1120px, calc(100vw - 32px));
  max-height: calc(100vh - 32px);
  overflow: auto;
  padding: 1.25rem;
  cursor: default;
  transform: translate(-50%, -50%);
  border-color: rgba(96, 165, 250, 0.65);
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.55);
}

.chart-card--expanded:hover,
.chart-card--expanded:focus-visible {
  transform: translate(-50%, -50%);
}

.chart-close {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.38);
  background: rgba(15, 23, 42, 0.92);
  color: #e2e8f0;
  font-size: 1.4rem;
  line-height: 1;
  cursor: pointer;
}

.chart-close:hover {
  border-color: rgba(248, 113, 113, 0.65);
  color: #fecaca;
}

.chart-card h3 {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #94a3b8;
  font-weight: 600;
  margin: 0;
}

.line-chart,
.bar-chart,
.scatter-chart,
.pie-chart {
  width: 100%;
  height: auto;
  max-height: 200px;
}

.chart-card--expanded .line-chart,
.chart-card--expanded .bar-chart,
.chart-card--expanded .scatter-chart {
  max-height: min(68vh, 620px);
}

.chart-card--expanded .pie-chart {
  max-height: min(52vh, 460px);
}

.pie-legend {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #cbd5e1;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 0.25rem;
  flex-shrink: 0;
}

.legend-label {
  flex: 1;
}

.legend-percent {
  color: #94a3b8;
  font-size: 0.75rem;
}

.empty-state {
  text-align: center;
  padding: 3rem 1rem;
  color: #94a3b8;
  border: 1px dashed rgba(148, 163, 184, 0.2);
  border-radius: 0.75rem;
}

@media (max-width: 768px) {
  .metrics-grid {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  .charts-grid {
    grid-template-columns: 1fr;
  }

  .chart-card--expanded {
    width: calc(100vw - 20px);
    max-height: calc(100vh - 20px);
    padding: 1rem;
  }
}
</style>
