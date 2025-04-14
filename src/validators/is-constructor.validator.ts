export function isConstructor<T>(value: unknown): value is T {
  if (typeof value === "function") {
    const stringified = value.toString();

    return stringified.startsWith("class") || (stringified.startsWith("function") && stringified.endsWith("{ [native code] }"));
  }

  return false;
}
