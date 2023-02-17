export function isNumber(n) {
  return !Number.isNaN(parseFloat(n)) && Number.isFinite(parseFloat(n))
}
