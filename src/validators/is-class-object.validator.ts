import { isObject } from "./is-object.validator.ts";

export function isClassObject(value: unknown): boolean {
  return isObject(value) && value.constructor.name === "Function";
}
