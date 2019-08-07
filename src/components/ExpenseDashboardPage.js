import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummaryConnected from '../components/ExpensesSummary'


const ExpenseDashboardPage = () => (
  <div>
    <ExpensesSummaryConnected />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
