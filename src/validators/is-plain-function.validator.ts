// deno-lint-ignore ban-types
export function isPlainFunction(value: unknown): value is Function {
  if (typeof value === "function") {
    const stringified = value.toString();

    return stringified.includes(")=>") ||
      (stringified.startsWith("function") &&
        !stringified.endsWith("{ [native code] }"));
  }

  return false;
}
