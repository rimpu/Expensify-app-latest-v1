import React from 'react'
import {shallow} from 'enzyme'
import {ExpensesSummary} from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'
import {getExpenses} from '../../selectors/getExpenses'

test('Should render 0 expenses summary',()=>{
    const wrapper = shallow(<ExpensesSummary expenses={[]} total={getExpenses([])}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render multiple expenses summary',()=>{
    const wrapper = shallow(<ExpensesSummary expenses={expenses} total={getExpenses(expenses)}/>)
    expect(wrapper).toMatchSnapshot()
})