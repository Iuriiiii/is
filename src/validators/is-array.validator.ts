/**
 * Checks if the value is an array
 * @param {unknown} value The value to check
 * @returns {unknown[]} True if the argument is an string and type value to unknown array, false otherwise
 */
export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}
