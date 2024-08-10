export function isStringArray(array: any[]): array is string[] {
  return Array.isArray(array) && array.every((a) => typeof a === 'string');
}
