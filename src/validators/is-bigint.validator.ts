
/**
 * Checks if the value is a bigint
 * @param {unknown} value The value to check
 * @returns {value is bigint} True if the argument is a bigint, false otherwise
 */
export function isBigInt(value: unknown): value is bigint {
  return typeof value === "bigint";
}
