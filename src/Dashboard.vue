<script setup>
import { computed } from 'vue'

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
  const sortedTrades = [...props.trades].sort((a, b) => {
    const timeA = new Date(a.tradeDate || a.createdAt).getTime()
    const timeB = new Date(b.tradeDate || b.createdAt).getTime()
    return timeA - timeB
  })
  
  sortedTrades.forEach((trade) => {
    const tradeUsd = trade.r * (trade.rBase ?? props.oneR)
    running += tradeUsd
    data.push({
      date: new Date(trade.tradeDate || trade.createdAt),
      value: running,
    })
  })
  
  return data
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

// Formatear valores USD
function formatUsd(value) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value)
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
      <!-- P&L Acumulado -->
      <div class="chart-card">
        <h3>P&L Acumulado</h3>
        <svg class="line-chart" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
          <!-- Grid lines -->
          <line x1="30" y1="20" x2="30" y2="170" stroke="#444" stroke-width="1" />
          <line x1="30" y1="170" x2="390" y2="170" stroke="#444" stroke-width="1" />
          
          <!-- Data line -->
          <polyline
            v-if="cumulativePnl.length"
            :points="cumulativePnl.map((d, i) => {
              const x = 30 + (i / Math.max(1, cumulativePnl.length - 1)) * 360
              const min = Math.min(...cumulativePnl.map(c => c.value))
              const max = Math.max(...cumulativePnl.map(c => c.value))
              const range = max - min || 1
              const y = 170 - ((d.value - min) / range) * 150
              return [x, y].join(',')
            }).join(' ')"
            fill="none"
            stroke="#4ade80"
            stroke-width="2"
          />
          
          <!-- Area under curve -->
          <polygon
            v-if="cumulativePnl.length"
            :points="`30,170 ${cumulativePnl.map((d, i) => {
              const x = 30 + (i / Math.max(1, cumulativePnl.length - 1)) * 360
              const min = Math.min(...cumulativePnl.map(c => c.value))
              const max = Math.max(...cumulativePnl.map(c => c.value))
              const range = max - min || 1
              const y = 170 - ((d.value - min) / range) * 150
              return [x, y].join(',')
            }).join(' ')} 390,170`"
            fill="rgba(74, 222, 128, 0.1)"
          />
        </svg>
      </div>

      <!-- P&L Diario -->
      <div class="chart-card">
        <h3>P&L Diario</h3>
        <svg class="bar-chart" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
          <!-- Grid lines -->
          <line x1="30" y1="20" x2="30" y2="170" stroke="#444" stroke-width="1" />
          <line x1="30" y1="170" x2="390" y2="170" stroke="#444" stroke-width="1" />
          
          <!-- Bars -->
          <g v-if="dailyPnl.length">
            <rect
              v-for="(day, i) in dailyPnl"
              :key="day.date"
              :x="30 + (i / Math.max(1, dailyPnl.length - 1)) * 360 - 8"
              :y="day.value >= 0 ? 170 - (day.value / Math.max(...dailyPnl.map(d => d.value)) || 1) * 150 : 170"
              :width="16"
              :height="Math.abs((day.value / Math.max(...dailyPnl.map(d => Math.abs(d.value))) || 1) * 150)"
              :fill="day.value >= 0 ? '#4ade80' : '#f87171'"
              :opacity="0.7"
            />
          </g>
        </svg>
      </div>

      <!-- Distribución de Resultados -->
      <div class="chart-card">
        <h3>Distribución de Resultados (R)</h3>
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
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.8));
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
.pie-chart {
  width: 100%;
  height: auto;
  max-height: 200px;
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
}
</style>
