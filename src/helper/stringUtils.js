export default function isEmptyOrSpaces(str) {
  try {
    return str === undefined || str === null || str.match(/^ *$/) !== null
  } catch (e) {
    throw Error(`${str} is not a string`)
  }
}
