export function truncateString(str, limit) {
  if (!str) {
    return ''
  }

  const truncatedString = str.slice(0, limit)
  const isOverLimit = str.length > limit

  return truncatedString + (isOverLimit && '. . .')
}

export function getRandomNumber(from, to) {
  const random = Math.floor(Math.random() * (to - from + 1)) + from;
  return random;
}