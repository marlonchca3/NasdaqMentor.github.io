import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { computed, ref, watch, nextTick } from 'vue'
import { validateAccounts, validAccountDates, tradeMatchesAccount } from '../src/tradingAccounts.js'

assert.equal(validAccountDates('2026-02-30', '2026-03-10'), false)
assert.equal(validAccountDates('2026-11-09', '2026-11-08'), false)
assert.equal(validAccountDates('2026-11-08', '2026-11-08'), true)
const draft = (name) => ({ name, startDate: '2026-11-01', endDate: '2026-12-31' })
assert.match(validateAccounts([draft('A'), draft(' a ')]), /ya está/)
const trades = [{ accountId: 'a', r: 2 }, { accountId: 'b', r: -1 }, { r: 3 }]
assert.deepEqual(trades.filter((trade) => tradeMatchesAccount(trade, 'a')), [trades[0]])
assert.deepEqual(trades.filter((trade) => tradeMatchesAccount(trade, 'unassigned')), [trades[2]])
assert.equal(trades.filter((trade) => tradeMatchesAccount(trade, '')).length, 3)

const source = readFileSync(new URL('../src/useTradingAccounts.js', import.meta.url), 'utf8')
  .replace(/^import .*\n/gm, '').replace('export function', 'function')
const stored = new Map()
let listener
let rejectWrite = false
let finishWrite
let deferWrite = false
const writes = []
const dependencies = {
  computed, ref, watch, onUnmounted() {}, db: {}, validateAccounts, crypto: globalThis.crypto,
  localStorage: { getItem: (key) => stored.get(key), setItem: (key, value) => stored.set(key, value) },
  doc: (_, ...parts) => parts.join('/'), arrayUnion: (...accounts) => accounts,
  onSnapshot: (_, callback) => { listener = callback; return () => {} },
  setDoc: async (...args) => {
    if (rejectWrite) throw new Error('offline')
    writes.push(args)
    if (deferWrite) await new Promise((resolve) => { finishWrite = resolve })
  },
}
const useAccounts = new Function(...Object.keys(dependencies), `${source}; return useTradingAccounts`)(...Object.values(dependencies))
const user = ref(null)
const state = useAccounts(user)
state.quantity.value = 2
await nextTick()
state.drafts.value = [draft('Cuenta A'), draft('Cuenta B')]
await state.createAccounts()
assert.equal(state.accounts.value.length, 2)
assert.equal(state.selected.value.name, 'Cuenta A')
const restored = useAccounts(ref(null))
assert.equal(restored.accounts.value.length, 2)
user.value = { uid: 'user-a' }
await nextTick()
assert.equal(state.accounts.value.length, 0)
assert.equal(state.ready.value, false)
listener({ data: () => undefined })
state.drafts.value = [draft('Cloud')]
rejectWrite = true
await state.createAccounts()
assert.match(state.error.value, /No se pudieron guardar/)
assert.equal(state.accounts.value.length, 0)
rejectWrite = false
await state.createAccounts()
assert.equal(writes[0][0], 'users/user-a/eval/tradingAccounts')
assert.equal(state.accounts.value.length, 1)
assert.equal(state.selected.value.name, 'Cloud')
deferWrite = true
state.drafts.value = [draft('Pending')]
const pending = state.createAccounts()
user.value = { uid: 'user-b' }
await nextTick()
finishWrite()
await pending
assert.equal(state.accounts.value.length, 0)
assert.equal(state.selectedId.value, '')
user.value = null
await nextTick()
assert.equal(state.accounts.value.length, 2)
console.log('Account creation, dates, filtering, persistence, errors and user isolation checks passed')
