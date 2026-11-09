import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import { parse, compileScript } from '@vue/compiler-sfc'
import { computed, ref } from 'vue'
import { tradeMatchesAccount } from '../src/tradingAccounts.js'

const { descriptor } = parse(readFileSync(new URL('../src/App.vue', import.meta.url), 'utf8'))
const script = compileScript(descriptor, { id: 'account-isolation' })
const names = ['calendarSourceTrades', 'evalTradesToday', 'evalTotalUSD', 'evalUsdHoy', 'dailyLossUsedUSD', 'dailyLossLimitReached']
const selectedNodes = script.scriptSetupAst.filter((node) =>
  node.type === 'VariableDeclaration' && node.declarations.some((item) => names.includes(item.id.name))
  || node.type === 'FunctionDeclaration' && ['clearAllTrades', 'deleteCollectionDocsInBatches'].includes(node.id.name))
const source = selectedNodes.map((node) => descriptor.scriptSetup.content.slice(node.start, node.end)).join('\n')
const trades = [
  { id: 'a', accountId: 'a', clientId: 'saved-a', r: -10, rBase: 10 },
  { id: 'b', accountId: 'b', r: 2, rBase: 10 },
  { id: 'old', r: -50, rBase: 10 },
]
const deleted = []
let persisted = false
const context = {
  computed, ref, tradeMatchesAccount, console,
  tradesList: ref([...trades]), pendingTrades: ref([]), selectedTradingAccountId: ref('a'),
  evalOneR: ref(10), maxDailyLossUSD: ref(50), cooldownNow: ref(Date.now()),
  isTradeInCurrentRiskSession: () => true,
  accountsReady: ref(true), savingTrade: ref(false), tradeError: ref(''), user: ref(null),
  selectedTradingAccount: ref({ name: 'A' }), window: { confirm: () => true },
  persistEvalTrades() { persisted = true }, clearTradeForm() {},
  db: {}, collection: (_, ...path) => path.join('/'),
  getDocsFromServer: async () => ({ docs: trades.map((trade) => ({ ref: trade.id, data: () => trade })) }),
  writeBatch: () => ({ delete: (id) => deleted.push(id), commit: async () => {} }),
}
vm.createContext(context)
vm.runInContext(source + '\nthis.metrics = { calendarSourceTrades, evalTotalUSD, evalUsdHoy, dailyLossUsedUSD, dailyLossLimitReached }', context)
const metrics = context.metrics
assert.equal(metrics.evalTotalUSD.value, -100)
assert.equal(metrics.dailyLossLimitReached.value, true)
context.selectedTradingAccountId.value = 'b'
assert.equal(metrics.evalTotalUSD.value, 20)
assert.equal(metrics.evalUsdHoy.value, 20)
assert.equal(metrics.dailyLossUsedUSD.value, 0)
assert.equal(metrics.dailyLossLimitReached.value, false)
context.pendingTrades.value = [{ ...trades[0], id: 'pending-a' }]
assert.equal(metrics.evalUsdHoy.value, 20)
context.selectedTradingAccountId.value = 'a'
assert.equal(metrics.evalUsdHoy.value, -100, 'Confirmed and pending versions must not count twice')

// Exercise the actual server-side precheck calculation against mixed-account results.
const appSource = descriptor.scriptSetup.content
const precheck = appSource.slice(appSource.indexOf('      const allRiskTrades ='), appSource.indexOf('      const currentLossUsedUSD ='))
const check = new Function('pendingTrades', 'serverTrades', 'payload', 'tradeMatchesAccount', 'isTradeInCurrentRiskSession', 'getTradeUsdAmount', `${precheck}; return currentSessionUsd`)
assert.equal(check(context.pendingTrades, trades, { accountId: 'b' }, tradeMatchesAccount, () => true, (trade) => trade.r * trade.rBase), 20)
assert.equal(check(context.pendingTrades, trades, { accountId: 'a' }, tradeMatchesAccount, () => true, (trade) => trade.r * trade.rBase), -100)

context.pendingTrades.value = []
await context.clearAllTrades()
assert.equal(persisted, true)
assert.deepEqual(context.tradesList.value.map((trade) => trade.id), ['b', 'old'])
context.user.value = { uid: 'owner' }
await context.clearAllTrades()
assert.deepEqual(deleted, ['a'], 'Cloud deletion must leave B and legacy trades intact')
context.selectedTradingAccountId.value = ''
await context.clearAllTrades()
assert.match(context.tradeError.value, /Selecciona una cuenta/)
assert.deepEqual(deleted, ['a'])
console.log('Independent P&L, daily risk, pending trades, server precheck and scoped deletion checks passed')
