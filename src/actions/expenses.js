import uuid from 'uuid';
import database from '../firebase/firebase'

// ADD_EXPENSE
export const addExpense = (expense) => {

  return {
  type: 'ADD_EXPENSE',
  expense
}};

export const startAddExpense = (expenseData ={})=>{
  return (dispatch,getState)=>{
    const { description = '', note = '', amount = 0, createdAt = 0} = {...expenseData}
    const expense = expenseData
    console.log(getState())
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses`).push(expense).then((snapshot)=>{
      const expense1 = {id: snapshot.key,...expense}
      dispatch(addExpense(expense1))
    })

  }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const startRemoveExpense =({id}={})=>{
  return(dispatch,getState)=>{
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
      dispatch(removeExpense({id}))
    })
  }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpenses = (id,updates)=>{
  return (dispatch,getState)=>{
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses/${id}`).update(updates)
    .then(()=>{
      dispatch(editExpense(id,updates))
    })
  }
}

//SET_EXPENSES

export const setExpenses =(expenses)=>{
  return {
  type:'SET_Expenses',
  expenses
}}

export const startSetExpenses =() =>{
  let expenses=[]
  return (dispatch,getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses`).once('value',(snapshot)=>{
    snapshot.forEach(element => {
      expenses.push({id: element.key,...element.val()})
    });
  }).then(()=>{
    dispatch(setExpenses(expenses))
  })
}
}


