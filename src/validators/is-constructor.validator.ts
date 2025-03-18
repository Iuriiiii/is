export function isConstructor<T>(value: unknown): value is T {
  return typeof value === "function" && value.toString().startsWith("class");
}
