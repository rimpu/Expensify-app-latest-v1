import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase'

let expensesData ={}
beforeEach(()=>{
  expenses.forEach(({id,description,amount,note,createdAt})=>{
    expensesData[id]={
      description,
      amount,
      note,
      createdAt
    }
  })
})

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '109',
    description: 'Laptop',
    note: '',
    createdAt: 20000,
    amount: 29500
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test('should not edit an expense if id not found', () => {
  const amount = 122000;
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      amount
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should set expenses',()=>{
  const action = {
    type:'SET_Expenses',
    expenses:expenses
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})

test('Should set expenses 2',()=>{
  const expenses = [{
    description :'Shopping bill',
    note:'August',
    amount:1234,
    createdAt :0
  }]
  const action = {
    type:'SET_Expenses',
    expenses:expenses
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})
