import React from 'react'
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses'
import {getExpenses} from '../selectors/getExpenses'
import numeral from 'numeral'

export class ExpensesSummary extends React.Component{
    render(){
        return(
            <p>Viewing {this.props.expenses.length} expense{this.props.expenses.length===1 ? '' :'s'} totalling {numeral(this.props.total / 100).format('$0,0.00')}</p>
        )
    }
} 

const mapStateToProps =(state)=>{
   return {
      expenses: selectExpenses(state.expenses, {...state.filters}),
      total : getExpenses(selectExpenses(state.expenses, {...state.filters}))
    }
}

export default connect(mapStateToProps)(ExpensesSummary)