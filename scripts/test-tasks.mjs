import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'
import { parse, compileScript } from '@vue/compiler-sfc'
import { computed, ref } from 'vue'

const { descriptor } = parse(readFileSync(new URL('../src/App.vue', import.meta.url), 'utf8'))
const script = compileScript(descriptor, { id: 'tasks-test' })
const names = ['loadTasks', 'addTask', 'saveOrder']
const metrics = ['completedCount', 'pendingCount', 'progressValue']
const source = script.scriptSetupAst.filter((node) =>
  node.type === 'FunctionDeclaration' && names.includes(node.id.name)
  || node.type === 'VariableDeclaration' && node.declarations.some((declaration) => metrics.includes(declaration.id.name)))
  .map((node) => descriptor.scriptSetup.content.slice(node.start, node.end)).join('\n')
const stored = new Map()
const writes = []
const batches = []
let failStorage = false
let failCloud = false
const context = {
  ref, computed, crypto: globalThis.crypto, console: { error() {} },
  tasks: ref([]), taskInput: ref(''), taskError: ref(''), savingTask: ref(false), user: ref(null),
  guestStorageKey: 'tasks', db: {},
  localStorage: {
    getItem: (key) => stored.get(key),
    setItem: (key, value) => { if (failStorage) throw new Error('full'); stored.set(key, value) },
  },
  collection: (_, ...parts) => parts.join('/'), doc: (_, ...parts) => parts.join('/'),
  serverTimestamp: () => 'server-time',
  addDoc: async (path, payload) => { if (failCloud) throw new Error('offline'); writes.push({ path, payload }) },
  writeBatch: () => {
    const updates = []
    return { update: (path, payload) => updates.push({ path, payload }), commit: async () => { batches.push(updates) } }
  },
}
vm.createContext(context)
vm.runInContext(source + '\nthis.progress = progressValue', context)
stored.set('tasks', JSON.stringify(Array.from({ length: 1200 }, (_, index) => ({ id: `${index}`, title: `Tarea ${index}`, completed: index < 600, order: index }))))
context.loadTasks()
assert.equal(context.tasks.value.length, 1200)
assert.equal(context.progress.value, 50)
const longText = 'Texto extenso con detalles '.repeat(2000) + '\nSegundo párrafo.'
context.taskInput.value = longText
await context.addTask()
assert.equal(context.tasks.value.length, 1201)
assert.equal(context.tasks.value[0].title, longText)
context.loadTasks()
assert.equal(context.tasks.value[0].title, longText)
context.taskInput.value = 'Conservar si falla'
failStorage = true
await context.addTask()
assert.equal(context.taskInput.value, 'Conservar si falla')
assert.equal(context.tasks.value.length, 1201)
assert.match(context.taskError.value, /No se pudo guardar/)
failStorage = false
context.user.value = { uid: 'owner' }
context.taskInput.value = longText
await context.addTask()
assert.equal(writes.length, 1)
assert.equal(writes[0].payload.title, longText)
assert.equal(writes[0].payload.order, -1)
assert.equal(batches.length, 0, 'Adding must not rewrite the existing list')
await context.saveOrder()
assert.deepEqual(batches.map((batch) => batch.length), [450, 450, 301])
assert.equal(batches[2].at(-1).payload.order, 1200)
failCloud = true
context.taskInput.value = longText
await context.addTask()
assert.equal(context.taskInput.value, longText)
assert.equal(context.savingTask.value, false)
console.log('Large task lists, long paragraphs, reload, progress, single-write creation, batched ordering and save errors passed')
