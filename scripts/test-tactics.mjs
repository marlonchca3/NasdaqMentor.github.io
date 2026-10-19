import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import { parse, compileScript } from '@vue/compiler-sfc'
import { ref, computed } from 'vue'

// Run the actual form handlers against controlled storage and Firestore boundaries.
const { descriptor } = parse(readFileSync(new URL('../src/App.vue', import.meta.url), 'utf8'))
const script = compileScript(descriptor, { id: 'tactic-library-test' })
const names = ['normalizeTactics', 'persistGuestTactics', 'deleteTactic', 'tacticSuggestions', 'loadGuestTactics', 'createCustomTactic', 'stopEvalSubscription']
const source = script.scriptSetupAst.filter((node) => node.type === 'FunctionDeclaration' && names.includes(node.id.name))
  .map((node) => descriptor.scriptSetup.content.slice(node.start, node.end)).join('\n')
const stored = new Map()
const writes = []
const context = {
  console: { error() {} },
  user: ref(null),
  customEntryTactics: ref([]), customExitTactics: ref([]),
  hiddenEntryTactics: ref([]), hiddenExitTactics: ref([]),
  tradeEntryTactic: ref(''), tradeExitTactic: ref(''),
  newTacticName: ref(''), newTacticType: ref('entry'),
  savingTactic: ref(false), tacticError: ref(''), tacticMessage: ref(''),
  guestTacticsKey: 'test-tactics', tacticAccountVersion: 0,
  calendarSourceTrades: ref([]),
  localStorage: { getItem: (key) => stored.get(key) ?? null, setItem: (key, value) => stored.set(key, value) },
  db: {}, doc: (_, ...path) => path.join('/'), arrayUnion: (name) => ({ union: name }), arrayRemove: (...names) => ({ remove: names }),
  setDoc: async (...args) => { writes.push(args) },
  unsubscribeTactics: null, unsubscribeEval: null, unsubscribeEvalTrades: null,
  unsubscribeNinjaExecutions: null, unsubscribeEvalCharts: null,
  pendingTrades: ref([]), firestoreTradesList: ref([]), ninjaExecutionList: ref([]), ninjaTradesList: ref([]),
}
vm.createContext(context)
vm.runInContext(source, context)
context.entryTacticOptions = computed(() => context.tacticSuggestions('entryTactic', ['FVG'], context.customEntryTactics.value))
context.exitTacticOptions = computed(() => context.tacticSuggestions('exitTactic', ['Objetivo alcanzado'], context.customExitTactics.value))
const list = (value) => Array.from(value)

context.newTacticName.value = '  Mi ruptura  '
await context.createCustomTactic()
assert.deepEqual(list(context.customEntryTactics.value), ['Mi ruptura'])
assert.equal(context.tradeEntryTactic.value, 'Mi ruptura')
assert.equal(writes.length, 0)
context.customEntryTactics.value = []
context.loadGuestTactics()
assert.deepEqual(list(context.customEntryTactics.value), ['Mi ruptura'])
context.newTacticName.value = 'mi RUPTURA'
await context.createCustomTactic()
assert.match(context.tacticError.value, /ya está/)
assert.equal(context.customEntryTactics.value.length, 1)
context.newTacticName.value = '   '
await context.createCustomTactic()
assert.match(context.tacticError.value, /1 y 80/)

context.newTacticType.value = 'exit'
context.newTacticName.value = 'Salida parcial'
await context.createCustomTactic()
assert.deepEqual(list(context.customExitTactics.value), ['Salida parcial'])
assert.equal(context.tradeExitTactic.value, 'Salida parcial')
assert.ok(context.exitTacticOptions.value.includes('Salida parcial'))

let unsubscribed = false
context.unsubscribeTactics = () => { unsubscribed = true }
context.stopEvalSubscription()
assert.equal(unsubscribed, true)
assert.deepEqual(list(context.customEntryTactics.value), [])
assert.deepEqual(list(context.customExitTactics.value), [])
context.user.value = { uid: 'owner-a' }
context.newTacticName.value = 'Trailing personal'
await context.createCustomTactic()
assert.equal(writes[0][0], 'users/owner-a/eval/tactics')
assert.equal(writes[0][1].exitTactics.union, 'Trailing personal')
assert.equal(writes[0][2].merge, true)
assert.deepEqual(list(context.customExitTactics.value), ['Trailing personal'])

context.setDoc = async () => { throw new Error('write denied') }
context.newTacticName.value = 'No guardada'
await context.createCustomTactic()
assert.match(context.tacticError.value, /No se pudo guardar/)
assert.ok(!context.customExitTactics.value.includes('No guardada'))
assert.equal(context.savingTactic.value, false)

// Changing account during a pending save must not expose the previous account's tactics.
let finishSave
context.setDoc = () => new Promise((resolve) => { finishSave = resolve })
context.newTacticName.value = 'Solo cuenta A'
const pending = context.createCustomTactic()
context.stopEvalSubscription()
context.user.value = { uid: 'owner-b' }
finishSave()
await pending
assert.deepEqual(list(context.customExitTactics.value), [])
assert.equal(context.tacticMessage.value, '')
context.user.value = null
context.loadGuestTactics()
assert.deepEqual(list(context.customEntryTactics.value), ['Mi ruptura'])
assert.deepEqual(list(context.customExitTactics.value), ['Salida parcial'])
console.log('Tactic creation, persistence, duplicate, error and account-isolation checks passed')


// Deleted tactics must disappear even when they still exist in historical trades.
context.calendarSourceTrades.value = [{ entryTactic: 'Mi ruptura', exitTactic: 'Salida parcial' }]
context.tradeEntryTactic.value = 'Mi ruptura'
await context.deleteTactic('entry', 'Mi ruptura')
assert.ok(!context.entryTacticOptions.value.includes('Mi ruptura'))
assert.equal(context.tradeEntryTactic.value, '')
assert.equal(context.calendarSourceTrades.value[0].entryTactic, 'Mi ruptura')
context.loadGuestTactics()
assert.ok(!context.entryTacticOptions.value.includes('Mi ruptura'))
assert.ok(context.exitTacticOptions.value.includes('Salida parcial'))
// Default tactics may also be removed and recreated explicitly.
await context.deleteTactic('entry', 'FVG')
context.loadGuestTactics()
assert.ok(!context.entryTacticOptions.value.includes('FVG'))
context.newTacticType.value = 'entry'
context.newTacticName.value = 'FVG'
await context.createCustomTactic()
assert.ok(context.entryTacticOptions.value.includes('FVG'))
context.loadGuestTactics()
assert.ok(context.entryTacticOptions.value.includes('FVG'))
await context.deleteTactic('exit', 'Salida parcial')
context.loadGuestTactics()
assert.ok(!context.exitTacticOptions.value.includes('Salida parcial'))
assert.equal(context.calendarSourceTrades.value[0].exitTactic, 'Salida parcial')

context.user.value = { uid: 'owner-delete' }
context.customEntryTactics.value = ['Only mine']
context.setDoc = async (...args) => writes.push(args)
await context.deleteTactic('entry', 'Only mine')
assert.equal(writes.at(-1)[0], 'users/owner-delete/eval/tactics')
assert.equal(writes.at(-1)[1].entryTactics.remove[0], 'Only mine')
assert.equal(writes.at(-1)[1].hiddenEntryTactics.union, 'only mine')
assert.ok(!context.entryTacticOptions.value.includes('Only mine'))
context.setDoc = async () => { throw new Error('write denied') }
await context.deleteTactic('entry', 'FVG')
assert.match(context.tacticError.value, /No se pudo eliminar/)
assert.ok(context.entryTacticOptions.value.includes('FVG'))
assert.equal(context.savingTactic.value, false)
console.log('Tactic deletion, reload, historical preservation and recreation checks passed')
