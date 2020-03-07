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