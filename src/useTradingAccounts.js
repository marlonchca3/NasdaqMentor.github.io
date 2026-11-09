import { computed, onUnmounted, ref, watch } from 'vue'
import { doc, onSnapshot, setDoc, arrayUnion } from 'firebase/firestore'
import { db } from './firebase'
import { validateAccounts } from './tradingAccounts'

export function useTradingAccounts(user) {
  const accounts = ref([])
  const selectedId = ref('')
  const error = ref('')
  const message = ref('')
  const busy = ref(false)
  const ready = ref(false)
  const quantity = ref(1)
  const drafts = ref([{ name: '', startDate: '', endDate: '' }])
  const selected = computed(() => accounts.value.find((account) => account.id === selectedId.value) || null)
  const guestKey = 'nasdaq-mentor-guest-trading-accounts'
  let unsubscribe = null
  let version = 0

  watch(quantity, (value) => {
    if (!Number.isInteger(value) || value < 1 || value > 50) return
    drafts.value = Array.from({ length: value }, (_, index) => drafts.value[index] || { name: '', startDate: '', endDate: '' })
  })

  watch(() => user.value?.uid, (uid) => {
    const current = ++version
    unsubscribe?.()
    accounts.value = []
    selectedId.value = ''
    error.value = ''
    message.value = ''
    busy.value = false
    ready.value = false
    quantity.value = 1
    drafts.value = [{ name: '', startDate: '', endDate: '' }]
    if (uid) {
      unsubscribe = onSnapshot(doc(db, 'users', uid, 'eval', 'tradingAccounts'), (snapshot) => {
        if (current !== version) return
        accounts.value = snapshot.data()?.accounts || []
        if (!ready.value) selectedId.value = accounts.value[0]?.id || 'unassigned'
        ready.value = true
      }, () => {
        if (current === version) error.value = 'No se pudieron cargar las cuentas. Revisa tu conexión y vuelve a iniciar sesión.'
      })
    } else {
      try {
        const saved = JSON.parse(localStorage.getItem(guestKey) || '[]')
        accounts.value = Array.isArray(saved) ? saved : []
        selectedId.value = accounts.value[0]?.id || 'unassigned'
        ready.value = true
      } catch {
        error.value = 'No se pudieron leer las cuentas guardadas en este navegador.'
      }
    }
  }, { immediate: true })

  async function createAccounts() {
    if (busy.value || !ready.value) return
    message.value = ''
    error.value = !Number.isInteger(quantity.value) || quantity.value < 1 || quantity.value > 50
      ? 'Elige entre 1 y 50 cuentas.' : validateAccounts(drafts.value, accounts.value)
    if (error.value) return
    const current = version
    const created = drafts.value.map((account) => ({ ...account, name: account.name.trim(), id: crypto.randomUUID() }))
    busy.value = true
    try {
      if (user.value) {
        await setDoc(doc(db, 'users', user.value.uid, 'eval', 'tradingAccounts'), { accounts: arrayUnion(...created) }, { merge: true })
      } else {
        localStorage.setItem(guestKey, JSON.stringify([...accounts.value, ...created]))
      }
      if (current !== version) return
      accounts.value = [...accounts.value.filter((account) => !created.some((item) => item.id === account.id)), ...created]
      selectedId.value = created[0].id
      message.value = `${created.length} cuenta(s) creada(s). Ya están disponibles en el diario y el dashboard.`
      quantity.value = 1
      drafts.value = [{ name: '', startDate: '', endDate: '' }]
    } catch {
      if (current === version) error.value = 'No se pudieron guardar las cuentas. Intenta de nuevo.'
    } finally {
      if (current === version) busy.value = false
    }
  }

  onUnmounted(() => { version++; unsubscribe?.() })
  return { accounts, selectedId, selected, quantity, drafts, error, message, busy, ready, createAccounts }
}
