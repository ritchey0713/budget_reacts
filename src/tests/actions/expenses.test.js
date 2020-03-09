import { addExpense, editExpense, removeExpense } from "../../actions/expenses"
import expenses from "../fixtures/expenses"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"

const createMockStore = configureMockStore([thunk])

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
  const action = addExpense(expenses[2])
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  })
})

// test("should use default values to setup action object", () => {
//   const action = addExpense()

//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     ...action
//   })
// })

test("should add expense to db and store", () => {

})

test("should add expense with default values to db and store", () => {
  
})
