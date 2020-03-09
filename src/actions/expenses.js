import uuid from "uuid"
import database from "../firebase/firebase"
import { get } from "https"

// add expense 
export const addExpense = (expense) => {
  return {
    type: "ADD_EXPENSE",
    expense  
  }
}

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const {
      description = "", 
      note = "", 
      amount = 0, 
      createdAt = 0
    } = expenseData
    const expense = {description, note, amount, createdAt}
    return database.ref(`users/${uid}/expenses`).push(expense)
      .then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }))
      })
  }
}

export const removeExpense = (id) => {
  return {
    type: "REMOVE_EXPENSE",
    id
  }
}

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`/users/${uid}/expenses/${id}`).remove()
    .then(() => {
      dispatch(removeExpense(id))
    }).catch((e) => {
      console.log(e, "ERROR")
    })
  }
}

export const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id, 
    updates
  }
}

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`/users/${uid}/expenses/${id}`).update({
      ...updates
    })
    .then(() => {
      dispatch(editExpense(id, updates))
    })
  }
}


//SET expenses
export const setExpenses = (expenses) => {
  return {
    type: 'SET_EXPENSES',
    expenses
  }
};

export const startSetExpenses = () => {
 return (dispatch, getState) => {
   const uid = getState().auth.uid
   return database.ref(`users/${uid}/expenses`).once("value")
    .then((snapShot) => {
      const expenses = []
      snapShot.forEach((childSnapShot) => {
        expenses.push({
          id: childSnapShot.key,
          ...childSnapShot.val()
        })
      })
      dispatch(setExpenses(expenses))
    })
 }
};

// export const startSetExpenses = () => {
//   return (dispatch) => {
//     return database.ref("expenses").on("value", (snapShot) => {
//       const expenses = []
//       snapShot.forEach((childSnapShot) => {
//         return expenses.push({
//           id: childSnapShot.key,
//           ...childSnapShot.val()
//         })
//       })
//       dispatch(setExpenses(expenses))
//     })
//   }
// }
