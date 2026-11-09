<script setup>
import { reactive } from 'vue'
const props = defineProps({ state: Object, creating: Boolean, signedIn: Boolean, savingTrade: Boolean })
const emit = defineEmits(['navigate'])
const state = reactive(props.state)
function visit(account, section) {
  state.selectedId = account.id
  emit('navigate', section)
}
function dateLabel(value) {
  return value.split('-').reverse().join('/')
}
</script>

<template>
  <section v-if="creating" class="accounts-panel">
    <p class="eyebrow">Cuentas de trading</p>
    <h1>Crear cuenta</h1>
    <p class="subcopy">Crea tus cuentas y consulta sus operaciones en el diario y el dashboard.</p>
    <form class="account-lifecycle-card" @submit.prevent="state.createAccounts">
      <fieldset :disabled="state.busy || !state.ready">
        <label class="account-date-field">
          <span>¿Cuántas cuentas quieres crear?</span>
          <input v-model.number="state.quantity" class="eval-control" type="number" min="1" max="50" step="1" required />
        </label>
        <div v-for="(account, index) in state.drafts" :key="index" class="account-draft">
          <h2>Cuenta {{ index + 1 }}</h2>
          <div class="account-draft-grid">
            <label class="account-date-field">
              <span>Nombre de la cuenta</span>
              <input v-model="account.name" class="eval-control" maxlength="80" placeholder="Ej. Evaluación Nasdaq" required />
            </label>
            <label class="account-date-field">
              <span>Fecha de inicio</span>
              <input v-model="account.startDate" class="eval-control" type="date" required />
            </label>
            <label class="account-date-field">
              <span>Fecha de fin</span>
              <input v-model="account.endDate" class="eval-control" type="date" :min="account.startDate" required />
            </label>
          </div>
        </div>
        <button type="submit" class="account-action">{{ state.busy ? 'Guardando…' : 'Crear cuentas' }}</button>
      </fieldset>
      <p v-if="!state.ready && !state.error" role="status">Cargando cuentas…</p>
      <p v-if="state.error" class="accounts-error" role="alert">{{ state.error }}</p>
      <p v-if="state.message" role="status">{{ state.message }}</p>
      <p class="subcopy">{{ signedIn ? 'Las cuentas se guardan en tu perfil.' : 'Las cuentas se guardan en este navegador. Inicia sesión antes de crearlas si quieres guardarlas en tu perfil.' }}</p>
    </form>
    <div class="accounts-list">
      <article v-for="account in state.accounts" :key="account.id" class="account-lifecycle-card">
        <h2>{{ account.name }}</h2>
        <p>Inicio: {{ dateLabel(account.startDate) }} · Fin: {{ dateLabel(account.endDate) }}</p>
        <button class="account-action" @click="visit(account, 'evaluacion')">Ver en el diario</button>
        <button class="account-action" @click="visit(account, 'dashboard')">Ver dashboard</button>
      </article>
    </div>
  </section>
  <div v-else class="account-lifecycle-card">
    <label class="account-date-field">
      <span>Cuenta de trading</span>
      <select v-model="state.selectedId" class="eval-control" :disabled="!state.ready || savingTrade">
        <option value="">Todas las cuentas (resumen conjunto)</option>
        <option v-for="account in state.accounts" :key="account.id" :value="account.id">{{ account.name }}</option>
        <option value="unassigned">Sin cuenta asignada</option>
      </select>
    </label>
    <p v-if="state.selected">Inicio: {{ dateLabel(state.selected.startDate) }} · Fin: {{ dateLabel(state.selected.endDate) }}</p>
    <p v-else class="subcopy">Selecciona una cuenta para consultar sus resultados y registrar operaciones. Los trades anteriores aparecen en «Sin cuenta asignada».</p>
    <p v-if="state.error" class="accounts-error" role="alert">{{ state.error }}</p>
    <button v-if="!state.accounts.length" class="account-action" @click="emit('navigate', 'cuentas')">Crear cuenta</button>
  </div>
</template>

<style scoped>
fieldset { border: 0; padding: 0; margin: 0; min-width: 0; }
.account-draft { margin: 24px 0; }
.account-draft h2 { font-size: 1.1rem; }
.account-draft-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr)); gap: 16px; }
.accounts-list { display: grid; gap: 16px; }
.account-action { background: #2563eb; color: white; border: 0; border-radius: 8px; padding: 12px 16px; margin: 8px 8px 0 0; cursor: pointer; font: inherit; }
.account-action:disabled { opacity: .5; cursor: wait; }
.accounts-error { color: #ef6464; }
</style>
