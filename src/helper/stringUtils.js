export default function isEmptyOrSpaces(str) {
  return str === undefined || str === null || str.match(/^ *$/) !== null
}
