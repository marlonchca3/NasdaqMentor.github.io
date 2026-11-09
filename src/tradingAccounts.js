export function validAccountDates(startDate, endDate) {
  const valid = (value) => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)
    && !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value
  return valid(startDate) && valid(endDate) && startDate <= endDate
}

export function validateAccounts(drafts, existing = []) {
  if (!drafts.length || drafts.length > 50) return 'Elige entre 1 y 50 cuentas.'
  const names = new Set(existing.map((account) => account.name.toLocaleLowerCase()))
  for (const account of drafts) {
    const name = account.name.trim()
    if (!name || name.length > 80) return 'Cada cuenta necesita un nombre de entre 1 y 80 caracteres.'
    if (names.has(name.toLocaleLowerCase())) return `El nombre «${name}» ya está en uso.`
    if (!validAccountDates(account.startDate, account.endDate)) return 'Completa las fechas de cada cuenta. La fecha de fin debe ser igual o posterior a la de inicio.'
    names.add(name.toLocaleLowerCase())
  }
  return ''
}

export function tradeMatchesAccount(trade, selectedId) {
  if (!selectedId) return true
  return selectedId === 'unassigned' ? !trade.accountId : trade.accountId === selectedId
}
