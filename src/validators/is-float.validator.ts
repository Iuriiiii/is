import { isNumber } from "./is-number.validator.ts";

export function isFloat(value: unknown): value is number {
    return isNumber(value) && !Number.isInteger(value);
}
