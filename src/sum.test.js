import sum from "./sum";

test("testing for sum function", () => {
  let a = 10;
  let b = 30;
  let output = 40;
  expect(sum(a, b)).toBe(output);
});
test("testing for sum function 2", () => {
  let a = 100;
  let b = 300;
  let output = 400;
  expect(sum(a, b)).toBe(output);
});
