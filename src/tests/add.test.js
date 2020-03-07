const add = (a,b) => a + b;
const generateGreeting = (name = "Anon") => `hello ${name}`

test("should add numbers", () => {
  const result = add(3, 4);

  // if(result != 7){
  //   throw new Error(`You added 4 and 3, result was ${result}, expected 7`)
  // }
  expect(result).toBe(7)
});

test("Should return a greeting using a name", () => {
  const greeting = generateGreeting("Drew")

  expect(greeting).toBe("hello Drew")
})

test("Should generate greeting for no name", () => {
  const greeting = generateGreeting()

  expect(greeting).toBe("hello Anon")
})