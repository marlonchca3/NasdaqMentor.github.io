<template>
  <div class="pnl-chart-wrap">
    <div class="pnl-chart-header">
      <div>
        <span class="pnl-chart-eyebrow">Performance</span>
        <h3 class="pnl-chart-title">P&amp;L Acumulado</h3>
      </div>
      <div class="pnl-chart-meta">
        <span class="pnl-total" :class="totalUSD >= 0 ? 'pos' : 'neg'">
          {{ totalUSD >= 0 ? '+' : '' }}${{ totalUSD.toFixed(2) }}
        </span>
        <span class="pnl-trades-count">{{ points.length }} trades</span>
      </div>
    </div>

    <div class="pnl-chart-body" ref="chartWrap">
      <svg
        v-if="points.length >= 2"
        :viewBox="`0 0 ${W} ${H}`"
        preserveAspectRatio="none"
        class="pnl-svg"
      >
        <defs>
          <linearGradient id="pnlGradPos" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#1cc767" stop-opacity="0.38" />
            <stop offset="100%" stop-color="#1cc767" stop-opacity="0.02" />
          </linearGradient>
          <linearGradient id="pnlGradNeg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#facc15" stop-opacity="0.02" />
            <stop offset="100%" stop-color="#facc15" stop-opacity="0.28" />
          </linearGradient>
        </defs>

        <!-- Grid lines horizontal -->
        <line
          v-for="(gl, i) in gridLines"
          :key="`gl-${i}`"
          :x1="PAD_L"
          :y1="gl.y"
          :x2="W - PAD_R"
          :y2="gl.y"
          stroke="rgba(100,130,200,0.12)"
          stroke-width="1"
        />

        <!-- Zero line -->
        <line
          :x1="PAD_L"
          :y1="zeroY"
          :x2="W - PAD_R"
          :y2="zeroY"
          stroke="rgba(150,170,220,0.28)"
          stroke-width="1"
          stroke-dasharray="4 4"
        />

        <!-- Area fill -->
        <path :d="areaPath" :fill="totalUSD >= 0 ? 'url(#pnlGradPos)' : 'url(#pnlGradNeg)'" />

        <!-- Line -->
        <path
          :d="linePath"
          fill="none"
          :stroke="totalUSD >= 0 ? '#1cc767' : '#facc15'"
          stroke-width="2.5"
          stroke-linejoin="round"
          stroke-linecap="round"
        />

        <!-- Grid labels Y -->
        <text
          v-for="(gl, i) in gridLines"
          :key="`gy-${i}`"
          :x="PAD_L - 6"
          :y="gl.y + 4"
          text-anchor="end"
          fill="rgba(165,193,236,0.6)"
          font-size="11"
        >{{ gl.label }}</text>

        <!-- X axis labels -->
        <text
          v-for="(lbl, i) in xLabels"
          :key="`xl-${i}`"
          :x="lbl.x"
          :y="H - 4"
          text-anchor="middle"
          fill="rgba(165,193,236,0.55)"
          font-size="10"
        >{{ lbl.text }}</text>

        <!-- Dots on last point -->
        <circle
          v-if="plotPoints.length"
          :cx="plotPoints[plotPoints.length - 1].x"
          :cy="plotPoints[plotPoints.length - 1].y"
          r="4"
          :fill="totalUSD >= 0 ? '#1cc767' : '#facc15'"
          stroke="#0d1b2e"
          stroke-width="2"
        />
      </svg>

      <div v-else class="pnl-empty">
        Aun no hay trades suficientes para mostrar la grafica
      </div>
    </div>
  </div>
</template>

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

const W = 800
const H = 200
const PAD_L = 52
const PAD_R = 12
const PAD_T = 16
const PAD_B = 28

function toMs(value) {
  if (value instanceof Date) {
    return Number.isNaN(value.getTime()) ? null : value.getTime()
  }

  if (typeof value?.toDate === 'function') {
    const d = value.toDate()
    return Number.isNaN(d.getTime()) ? null : d.getTime()
  }

  if (typeof value?.seconds === 'number') {
    return value.seconds * 1000 + Math.floor((value.nanoseconds || 0) / 1000000)
  }

  if (typeof value === 'number') {
    return Number.isFinite(value) ? value : null
  }

  if (typeof value === 'string') {
    const parsed = Date.parse(value)
    return Number.isNaN(parsed) ? null : parsed
  }

  return null
}

// Orden cronologico real: prioriza createdAt (momento guardado), con fallback a tradeDate.
const sortedTrades = computed(() => {
  return props.trades
    .map((trade, index) => ({ ...trade, __sourceIndex: index }))
    .sort((a, b) => {
    const aCreatedAt = toMs(a.createdAt)
    const bCreatedAt = toMs(b.createdAt)
    const aTradeDate = toMs(a.tradeDate)
    const bTradeDate = toMs(b.tradeDate)
    const ta = aCreatedAt ?? aTradeDate ?? 0
    const tb = bCreatedAt ?? bTradeDate ?? 0

    if (ta !== tb) {
      return ta - tb
    }

    // Desempate estable: conservar orden de llegada en la lista original.
    return a.__sourceIndex - b.__sourceIndex
  })
})

const points = computed(() => {
  return sortedTrades.value.map((t, i, arr) => {
      const rBase = typeof t.rBase === 'number' ? t.rBase : props.oneR
      const usd = t.r * rBase
      const cumulative = arr.slice(0, i + 1).reduce((sum, tt) => {
        const rb = typeof tt.rBase === 'number' ? tt.rBase : props.oneR
        return sum + tt.r * rb
      }, 0)
      const createdAtMs = toMs(t.createdAt)
      const tradeDateMs = toMs(t.tradeDate)
      return {
        usd,
        cumulative,
        labelTime: createdAtMs ?? tradeDateMs,
      }
    })
})

const totalUSD = computed(() => points.value.length ? points.value[points.value.length - 1].cumulative : 0)

// Valores del chart: P&L acumulado + 0 para referencia.
const allValues = computed(() => [0, ...points.value.map((p) => p.cumulative)])

const minVal = computed(() => Math.min(...allValues.value))
const maxVal = computed(() => Math.max(...allValues.value))

const range = computed(() => {
  const r = maxVal.value - minVal.value
  return r === 0 ? 1 : r
})

const timeRange = computed(() => {
  const timeValues = points.value.map((p) => p.labelTime).filter((v) => Number.isFinite(v))
  if (!timeValues.length) {
    return { min: 0, max: 0, span: 1 }
  }
  const min = Math.min(...timeValues)
  const max = Math.max(...timeValues)
  return { min, max, span: Math.max(max - min, 1) }
})

function toY(val) {
  const chartH = H - PAD_T - PAD_B
  return PAD_T + chartH - ((val - minVal.value) / range.value) * chartH
}

function toX(i) {
  const chartW = W - PAD_L - PAD_R
  const total = points.value.length // n segments from 0..n
  return PAD_L + (i / total) * chartW
}

function toXFromTime(timeMs, i) {
  const chartW = W - PAD_L - PAD_R
  const { min, span } = timeRange.value

  if (!Number.isFinite(timeMs)) {
    return toX(i)
  }

  return PAD_L + ((timeMs - min) / span) * chartW
}

const zeroY = computed(() => toY(0))

const plotPoints = computed(() => {
  // Cada punto representa el P&L acumulado en su hora de guardado.
  return points.value.map((p, i) => ({
    x: toXFromTime(p.labelTime, i + 1),
    y: toY(p.cumulative),
  }))
})

const allPlotPoints = computed(() => [
  {
    x: plotPoints.value.length ? plotPoints.value[0].x : toX(0),
    y: toY(0),
  },
  ...plotPoints.value,
])

const linePath = computed(() => {
  if (allPlotPoints.value.length < 2) return ''
  return allPlotPoints.value.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
})

const areaPath = computed(() => {
  if (allPlotPoints.value.length < 2) return ''
  const pts = allPlotPoints.value
  const baseY = zeroY.value
  const first = pts[0]
  const last = pts[pts.length - 1]
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ')
  return `${line} L${last.x.toFixed(1)},${baseY.toFixed(1)} L${first.x.toFixed(1)},${baseY.toFixed(1)} Z`
})

// Grid lines
const gridLines = computed(() => {
  const steps = 4
  const lines = []
  for (let i = 0; i <= steps; i++) {
    const val = minVal.value + (range.value / steps) * i
    lines.push({
      y: toY(val),
      label: val >= 1000 || val <= -1000 ? `$${(val / 1000).toFixed(1)}k` : `$${val.toFixed(0)}`,
    })
  }
  return lines
})

// X axis labels — show up to 6 evenly spaced
const xLabels = computed(() => {
  const n = points.value.length
  if (n === 0) return []

  const dayKeys = new Set(
    points.value
      .map((p) => (p?.labelTime ? new Date(p.labelTime) : null))
      .filter((d) => d && !Number.isNaN(d.getTime()))
      .map((d) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`),
  )
  const showDate = dayKeys.size > 1

  const step = Math.ceil(n / 6)
  const labels = []
  for (let i = step - 1; i < n; i += step) {
    const p = points.value[i]
    const d = p?.labelTime ? new Date(p.labelTime) : null
    const text = d && !Number.isNaN(d.getTime())
      ? `${showDate ? `${d.getDate()}/${d.getMonth() + 1} ` : ''}${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
      : `#${i + 1}`
    labels.push({ x: toXFromTime(p?.labelTime, i + 1), text })
  }
  return labels
})
</script>

<style scoped>
.pnl-chart-wrap {
  border-radius: 20px;
  border: 1px solid rgba(100, 130, 200, 0.18);
  background: rgba(6, 14, 32, 0.88);
  padding: 20px 22px 14px;
  margin-bottom: 20px;
}

.pnl-chart-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 14px;
}

.pnl-chart-eyebrow {
  display: block;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: rgba(124, 181, 255, 0.85);
  margin-bottom: 2px;
}

.pnl-chart-title {
  margin: 0;
  font-size: 1.15rem;
  font-weight: 700;
  color: #edf4ff;
}

.pnl-chart-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
}

.pnl-total {
  font-size: 1.5rem;
  font-weight: 700;
}

.pnl-total.pos { color: #1cc767; }
.pnl-total.neg { color: #facc15; }

.pnl-trades-count {
  font-size: 0.82rem;
  color: rgba(165, 193, 236, 0.6);
}

.pnl-chart-body {
  width: 100%;
  min-height: 200px;
  position: relative;
}

.pnl-svg {
  width: 100%;
  height: 200px;
  display: block;
}

.pnl-empty {
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(165, 193, 236, 0.45);
  font-size: 0.95rem;
  border: 1px dashed rgba(100, 130, 200, 0.18);
  border-radius: 12px;
}
</style>
