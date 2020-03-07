const add = (a,b) => a + b;

test("should add numbers", () => {
  const result = add(3, 4);

  // if(result != 7){
  //   throw new Error(`You added 4 and 3, result was ${result}, expected 7`)
  // }
  expect(result).toBe(7)
});