import expensesReducer from "../../reducers/expenses"
import expenses from "../fixtures/expenses"

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT"})

  expect(state).toEqual([])
})

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual([expenses[0], expenses[2]])
})

test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  }
  const state = expensesReducer(expenses, action)

  expect(state).toEqual(expenses)
})

test("should add an expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: 4,
      description: "New expense",
      note: "",
      amount: 100,
      createdAt: 100443333
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, action.expense])
  //expect(state[state.length - 1]).toEqual(action.expense)
})

test("should edit an expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: 1,
    updates: {
      note: "Updated note!"
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state[0].note).toEqual(action.updates.note)

})

test("should not update if expense not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      note: "Bad expense"
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})