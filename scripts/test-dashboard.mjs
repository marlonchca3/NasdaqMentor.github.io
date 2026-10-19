import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { pathToFileURL } from 'node:url'
import { parse, compileScript } from '@vue/compiler-sfc'
import { reactive } from 'vue'

// Exercise the component's actual computed series, including reactive updates.
process.env.TZ = 'America/Lima'
const require = createRequire(import.meta.url)
const { descriptor } = parse(readFileSync(new URL('../src/Dashboard.vue', import.meta.url), 'utf8'))
const script = compileScript(descriptor, { id: 'dashboard-regression' }).content
  .replace("import ChartInspector from './ChartInspector.vue'", 'const ChartInspector = {}')
  .replace("from 'vue'", `from '${pathToFileURL(require.resolve('vue/dist/vue.runtime.esm-bundler.js')).href}'`)
const { default: Dashboard } = await import(`data:text/javascript;base64,${Buffer.from(script).toString('base64')}`)
const props = reactive({ trades: [], oneR: 10 })
const dashboard = Dashboard.setup(props, { expose() {} })
const trade = (date, r) => ({ tradeDate: new Date(date), createdAt: new Date(date), r, rBase: 10 })
const inPlot = (value) => assert.ok(Number.isFinite(value) && value >= 20 && value <= 170, `Outside plot: ${value}`)

assert.equal(dashboard.netPnl.value, 0)
assert.deepEqual(dashboard.dailyBars.value, [])
props.trades.push(trade('2026-10-18T23:30:00-05:00', -2))
assert.equal(dashboard.netPnl.value, -20)
assert.equal(dashboard.dailyPnl.value[0].date, '2026-10-18')
assert.equal(dashboard.cumulativePoints.value.length, 1)
assert.equal(dashboard.cumulativePoints.value[0].x, 210)
assert.equal(dashboard.cumulativeXLabels.value[0].x, 210)
inPlot(dashboard.cumulativePoints.value[0].y)
assert.ok(dashboard.dailyBars.value[0].height > 0)
inPlot(dashboard.dailyBars.value[0].y + dashboard.dailyBars.value[0].height)

// Newest-first storage must still produce a chronological balance and drawdown.
props.trades.unshift(trade('2026-10-19T12:00:00-05:00', 5))
assert.equal(dashboard.netPnl.value, 30)
assert.deepEqual(dashboard.cumulativePnl.value.map(({ value }) => value), [-20, 30])
assert.equal(dashboard.maxDrawdown.value, 20)
for (const bar of dashboard.dailyBars.value) {
  inPlot(bar.y)
  inPlot(bar.y + bar.height)
  assert.ok(bar.height > 0)
}
for (const tick of dashboard.dailyYAxis.value) {
  assert.equal(tick.y, dashboard.valueToChartY(tick.value, [-20, 50]))
}
assert.equal(dashboard.formatDateLabel('2026-10-18'), dashboard.formatDateLabel(new Date(2026, 9, 18, 12)))

assert.equal(dashboard.inspectionSeries.value.cumulative[1].details[0].includes('$'), true)
assert.equal(dashboard.inspectionSeries.value.daily[0].details.length, 1)
props.trades[0].r = 0
assert.equal(dashboard.netPnl.value, -20)
assert.equal(dashboard.dailyBars.value[1].height, 0)
props.trades.splice(0, props.trades.length, trade('2026-10-18T12:00:00-05:00', 0))
assert.equal(dashboard.dailyBars.value[0].height, 0)
inPlot(dashboard.cumulativePoints.value[0].y)
props.trades.splice(0)
assert.equal(dashboard.netPnl.value, 0)
assert.deepEqual(dashboard.cumulativePoints.value, [])
console.log('Dashboard regression checks passed')

const { descriptor: inspectorDescriptor } = parse(readFileSync(new URL('../src/ChartInspector.vue', import.meta.url), 'utf8'))
const inspectorScript = compileScript(inspectorDescriptor, { id: 'inspector-regression' }).content
  .replace("from 'vue'", `from '${pathToFileURL(require.resolve('vue/dist/vue.runtime.esm-bundler.js')).href}'`)
const { default: ChartInspector } = await import(`data:text/javascript;base64,${Buffer.from(inspectorScript).toString('base64')}`)
const inspectorProps = reactive({ label: 'Test', points: [
  { x: 30, y: 20, label: 'First', details: [] },
  { x: 210, y: 100, label: 'Middle', details: [] },
  { x: 390, y: 170, label: 'Last', details: [] },
  { x: 390, y: 80, label: 'Same X', details: [] },
] })
const inspector = ChartInspector.setup(inspectorProps, { expose() {} })
assert.deepEqual(inspector.selected.value, [])
inspector.stepSelection(1)
assert.equal(inspector.selected.value[0].label, 'First')
inspector.stepSelection(1)
assert.equal(inspector.selected.value[0].label, 'Middle')
inspector.stepSelection(1)
assert.deepEqual(inspector.selected.value.map(({ label }) => label), ['Last', 'Same X'])
inspector.stepSelection(1)
assert.equal(inspector.selected.value[0].label, 'Last')
inspector.stepSelection(-1)
assert.equal(inspector.selected.value[0].label, 'Middle')

// Simulate inverse SVG screen coordinates, as used after resizing/expanding.
let capturedPointer
const svg = {
  getScreenCTM: () => ({ inverse: () => ({}) }),
  createSVGPoint: () => ({ matrixTransform() { return { x: (this.x - 100) / 2 } } }),
  setPointerCapture: (id) => { capturedPointer = id },
}
inspector.startInspect({ button: 0, currentTarget: svg, pointerId: 7, clientX: 170, clientY: 0 })
assert.equal(capturedPointer, 7)
assert.equal(inspector.selected.value[0].label, 'First')
inspector.moveInspect({ currentTarget: svg, clientX: 850, clientY: 0 })
assert.equal(inspector.selected.value[0].label, 'Last')
inspector.moveInspect({ currentTarget: svg, clientX: -100, clientY: 0 })
assert.equal(inspector.cursorX.value, 30)
inspectorProps.points = []
assert.deepEqual(inspector.selected.value, [])
inspector.stepSelection(1)
inspectorProps.points = [
  { x: 30, y: 20, label: 'First', details: [] },
  { x: 390, y: 170, label: 'Last', details: [] },
]
inspector.active.value = false
inspector.moveInspect({ currentTarget: svg, clientX: 850, clientY: 0 })
assert.equal(inspector.selected.value[0].label, 'Last', 'Hover activates inspection without a click')
inspector.selectPosition(0)
assert.equal(inspector.selected.value[0].label, 'First')
inspector.selectPosition(1)
assert.equal(inspector.selected.value[0].label, 'Last')
assert.equal(inspector.selectedPosition.value, 1)
console.log('Chart cursor regression checks passed')


// Recorrer el acumulado y el diario debe cruzar de octubre a septiembre.
props.trades = [
  trade('2026-10-18T12:00:00-05:00', 3),
  trade('2026-09-04T12:00:00-05:00', 1),
  trade('2026-09-30T12:00:00-05:00', -2),
]
assert.deepEqual(dashboard.dailyPnl.value.map(({ date }) => date), ['2026-09-04', '2026-09-30', '2026-10-18'])
assert.deepEqual(dashboard.cumulativePnl.value.map(({ value }) => value), [10, -10, 20])
for (const series of ['cumulative', 'daily']) {
  inspectorProps.points = dashboard.inspectionSeries.value[series]
  inspector.selectPosition(2)
  assert.match(inspector.selected.value[0].label, /oct/i)
  inspector.stepSelection(-1)
  assert.match(inspector.selected.value[0].label, /sept/i)
  inspector.selectPosition(0)
  assert.match(inspector.selected.value[0].label, /sept/i)
  assert.match(inspector.selected.value[0].details[0], /Trade #1/)
}
console.log('September/October navigation checks passed')
