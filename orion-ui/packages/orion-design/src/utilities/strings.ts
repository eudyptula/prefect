export function toPluralString(word: string, count: number): string {
  if (count == 1) {
    return word
  }

  const ending = ['s', 'sh', 'ch', 'x', 'z'].some((chars) => word.endsWith(chars),
  )
    ? 'es'
    : 's'

  return `${word}${ending}`
}

export function isString(value: unknown): value is string {
  return typeof value === 'string'
}