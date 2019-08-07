import expenses from '../fixtures/expenses'
import {getExpenses} from '../../selectors/getExpenses'

test('Should render 0 with no expenses',()=>{
    const total = getExpenses([])
    expect(total).toBe(0)
})
test('Shouldcorrectly upto one expense',()=>{
    const total = getExpenses([expenses[0]])
    expect(total).toBe(195)
})
test('Should render upto multiple expenses',()=>{
    const total = getExpenses(expenses)
    expect(total).toBe(114195)
})