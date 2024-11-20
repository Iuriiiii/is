import { isNumber } from "./is-number.validator.ts";

export function isInfinity(value: unknown): value is number {
  return isNumber(value) && (value === Infinity || value === -Infinity);
}
