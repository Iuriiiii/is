import { assertEquals } from "@std/assert";
import { isBigInt, isClassInstance, isConstructor, isPlainFunction, isPlainObject, isArray } from "../src/validators/mod.ts";

// Tests para isBigInt
Deno.test("isBigInt - debe retornar true para valores BigInt", () => {
  assertEquals(isBigInt(BigInt(1)), true);
  assertEquals(isBigInt(1n), true);
  assertEquals(isBigInt(BigInt(0)), true);
  assertEquals(isBigInt(BigInt(-10)), true);
});

Deno.test("isBigInt - debe retornar false para valores que no son BigInt", () => {
  assertEquals(isBigInt(1), false);
  assertEquals(isBigInt("1"), false);
  assertEquals(isBigInt(true), false);
  assertEquals(isBigInt(null), false);
  assertEquals(isBigInt(undefined), false);
  assertEquals(isBigInt({}), false);
  assertEquals(isBigInt([]), false);
  assertEquals(isBigInt(() => { }), false);
});

// Tests para isClassInstance
class TestClass { }
class AnotherTestClass extends TestClass { }

Deno.test("isClassInstance - debe retornar true para instancias de clases", () => {
  assertEquals(isClassInstance(new TestClass()), true);
  assertEquals(isClassInstance(new AnotherTestClass()), true);
  assertEquals(isClassInstance(new Date()), true);
  assertEquals(isClassInstance(new RegExp("pattern")), true);
  assertEquals(isClassInstance(new Map()), true);
  assertEquals(isClassInstance(new Set()), true);
});

Deno.test("isClassInstance - debe retornar false para objetos planos y otros valores", () => {
  assertEquals(isClassInstance({}), false);
  assertEquals(isClassInstance(Object.create(null)), false);
  assertEquals(isClassInstance(TestClass), false);
  assertEquals(isClassInstance(() => { }), false);
  assertEquals(isClassInstance(1), false);
  assertEquals(isClassInstance("string"), false);
  assertEquals(isClassInstance(null), false);
  assertEquals(isClassInstance(undefined), false);
});

// Tests para isConstructor
Deno.test("isConstructor - debe retornar true para constructores de clase", () => {
  assertEquals(isConstructor(TestClass), true);
  assertEquals(isConstructor(AnotherTestClass), true);
  assertEquals(isConstructor(Date), true);
  assertEquals(isConstructor(RegExp), true);
  assertEquals(isConstructor(Map), true);
  assertEquals(isConstructor(Set), true);
});

Deno.test("isConstructor - debe retornar false para no constructores", () => {
  assertEquals(isConstructor({}), false);
  assertEquals(isConstructor(new TestClass()), false);
  assertEquals(isConstructor(() => { }), false);
  assertEquals(isConstructor(function () { }), false);
  assertEquals(isConstructor(1), false);
  assertEquals(isConstructor("string"), false);
  assertEquals(isConstructor(null), false);
  assertEquals(isConstructor(undefined), false);
});

// Tests para isPlainFunction
Deno.test("isPlainFunction - debe retornar true para funciones planas", () => {
  assertEquals(isPlainFunction(function () { }), true);
  assertEquals(isPlainFunction(() => { }), true);
  assertEquals(isPlainFunction(function named() { }), true);
});

Deno.test("isPlainFunction - debe retornar false para constructores y otros valores", () => {
  assertEquals(isPlainFunction(TestClass), false);
  assertEquals(isPlainFunction({}), false);
  assertEquals(isPlainFunction(new TestClass()), false);
  assertEquals(isPlainFunction(1), false);
  assertEquals(isPlainFunction("string"), false);
  assertEquals(isPlainFunction(null), false);
  assertEquals(isPlainFunction(undefined), false);
});

// Tests para isPlainObject
Deno.test("isPlainObject - debe retornar true para objetos planos", () => {
  assertEquals(isPlainObject({}), true);
  assertEquals(isPlainObject({ a: 1 }), true);
  assertEquals(isPlainObject(Object.create(Object.prototype)), true);
});

Deno.test("isPlainObject - debe retornar false para instancias de clase y otros valores", () => {
  assertEquals(isPlainObject(new TestClass()), false);
  assertEquals(isPlainObject(Object.create(null)), false);
  assertEquals(isPlainObject([]), false);
  assertEquals(isPlainObject(new Date()), false);
  assertEquals(isPlainObject(1), false);
  assertEquals(isPlainObject("string"), false);
  assertEquals(isPlainObject(null), false);
  assertEquals(isPlainObject(undefined), false);
});

// Tests para isArray
Deno.test("isArray - debe retornar true para arrays", () => {
  assertEquals(isArray([]), true);
  assertEquals(isArray([1, 2, 3]), true);
  assertEquals(isArray(new Array()), true);
  assertEquals(isArray(Array.of(1, 2, 3)), true);
});

Deno.test("isArray - debe retornar false para no arrays", () => {
  assertEquals(isArray({}), false);
  assertEquals(isArray("array"), false);
  assertEquals(isArray(1), false);
  assertEquals(isArray(true), false);
  assertEquals(isArray(null), false);
  assertEquals(isArray(undefined), false);
  assertEquals(isArray(() => { }), false);
  assertEquals(isArray(new Map()), false);
  assertEquals(isArray(new Set()), false);
});