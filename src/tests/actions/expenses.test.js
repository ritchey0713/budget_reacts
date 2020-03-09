import { startAddExpense, addExpense, editExpense, removeExpense } from "../../actions/expenses"
import expenses from "../fixtures/expenses"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import database from "../../firebase/firebase"

const uid = "testuidR"

const defaultAuthState = {auth: { uid }}
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = { description, note, amount, createdAt }
  })
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})


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

test("should add expense to db and store", (done) => {
  const store = createMockStore(defaultAuthState)
  const expenseData = {
    description: "Mouse",
    amount: 3000,
    note: "best one!",
    createdAt: 123456
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value")
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})

test("should add expense with default values to db and store", () => {
  const store = createMockStore(defaultAuthState)
  const defaultExpense = {
    description: "", 
        note: "", 
        amount: 0, 
        createdAt: 0
  }
  store.dispatch(startAddExpense()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...defaultExpense
      }
    })
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value")
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(defaultExpense)
    done()
  })
})
