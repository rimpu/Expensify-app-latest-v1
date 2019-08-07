export const getExpenses =(expenses)=>{
    let expensesAmount = expenses.map((expense)=> { return expense.amount})
    let total = expensesAmount.reduce((accumulator, currentValue) => accumulator + currentValue,0 )
    return total
}