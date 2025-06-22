// deno-lint-ignore ban-types
export function isPlainFunction(value: unknown): value is Function {
  if (typeof value === "function") {
    const stringified = value.toString();

    return stringified.startsWith("function") && !stringified.match(/class \w+ \{/) && !stringified.endsWith("{ [native code] }");
  }

  return false;
}
