import { sum } from "../sum";

test("sum function should calculate addition of two no.s", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
