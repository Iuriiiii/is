import { isArray } from "../src/validators/mod.ts";
import { assertEquals } from "@std/assert";

Deno.test("Validators", async (t) => {
  await t.step("isArray", () => {
    assertEquals(isArray([1, 2, 3]), true);
  });
});
