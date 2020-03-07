import { addExpense, editExpense, removeExpense } from "../../actions/expenses"

test("Should set up remove expense action object", () => {
  const action = removeExpense("123abc");

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  })
})

test("Should set up edit expense action object", () => {
  const action = editExpense("123abc", {note: "edit the note"});

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "edit the note"
    }
  })
})

test("Should set up addExpense action object with provided values", () => {
  const expenseData = {
    description: "rent",
    amount: 10000,
    createdAt: 1000,
    note: "last month rent"
  }

  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
    }
  })
})

test("should use default values to setup action object", () => {
  const action = addExpense()

  expect(action).toEqual({
    ...action
  })
})