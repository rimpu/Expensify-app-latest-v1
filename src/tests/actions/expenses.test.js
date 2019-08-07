import { addExpense, startEditExpenses, removeExpense , startRemoveExpense, startSetExpenses, setExpenses,startAddExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'
import {firebase} from '../../firebase/firebase'
import uuid from 'uuid'

const mockStore = configureMockStore([thunk])
let userId = uuid()

beforeEach((done)=>{
  const expensesData ={}
  expenses.forEach(({id,description,amount,note,createdAt})=>{
    expensesData[id]={
      description,
      amount,
      note,
      createdAt
    }
  })
  database.ref(`users/${userId}/expenses`).set(expensesData).then(()=>{
    done()
  })
})




test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expenses to the database and store',(done)=>{
  const store = mockStore({auth:{uid : userId}})
  let actions
  const expenseData ={
    description:'Tea',
    amount:10,
    createdAt:0,
    note:'Napkins not availabe'
  }
   jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
  store.dispatch(startAddExpense(expenseData)).then(()=>{
   actions = store.getActions();
    expect(actions[0]).toEqual({
      type:'ADD_EXPENSE',
      expense:{
        ...expenseData,
        id:expect.any(String)
      }
    })
    return database.ref(`users/${userId}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
      expect(snapshot.val()).toEqual(expenseData)
      done()
    }).catch((e)=>{
      console.log("Failed due to ", e)
    })
    
  })

  test('should add default expenses to the database and store',(done)=>{
    const store = mockStore({auth:{uid:userId}})
    let actions
    jasmine.DEFAULT_TIMEOUT_INTERVAL =  100000;
    const expenseData ={
      description:'',
      amount:0,
      createdAt:0,
      note:''
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
     actions = store.getActions();
      expect(actions[0]).toEqual({
        type:'ADD_EXPENSE',
        expense:{
          description:'',
          note:'',
          createdAt:0,
          amount:0,
          id:expect.any(String)
        }
      })
  
      return database.ref(`users/${userId}/expenses/${actions[0].expense.id}`).once('value')
      }).then((snapshot)=>{
        expect(snapshot.val()).toEqual({
          description:'',
          note:'',
          createdAt:0,
          amount:0
        })
        done()
      }).catch((e)=>{
        console.log("Failed due to ", e)
      })
      
    })
  
test('should setup set expense data ', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type:'SET_Expenses',
    expenses
  })
});

test('Should fetch the expenses from firebase',()=>{
  const store = mockStore({auth:{uid :userId}})
  store.dispatch(startSetExpenses()).then((done)=>{
    const action = store.getActions()
    expect(action[0]).toEqual({
      type:'SET_Expenses',
      expenses
    })
    done()
  })
})

test('Should remove expense by id',()=>{
  const id = expenses[0].id
  const store = mockStore({auth:{uid: userId}})
  store.dispatch(startRemoveExpense({id})).then((done)=>{
    const action = store.getActions()
    expect(action[0].toEqual({
      type:'REMOVE_EXPENSE',
      id
    }))
    return database.ref(`users/${userId}/expenses/${id}`).once('value',(snapshot)=>{
      expect(snapshot.val()).toBeFalsy()
    })
    done()
  })
})

test('should setup edit expense action object', () => {
  const updates ={note: 'New note value'}
  const id = expenses[2].id
  const store = mockStore({auth:{uid :userId}})
  store.dispatch(startEditExpenses(id,updates)).then((done)=>{
    const action = store.getActions()
    expect(action[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    })

    return database.ref(`users/${userId}/expenses/${id}`).once('value')
  }).then((snapshot)=>{
    expenses(snapshot.val()).toEqual({
      ...expenses[2],...updates
    })
    done()
  })
  .catch((e)=>{
    console.log(`Failed due to ${e}`)
  })
  
});

