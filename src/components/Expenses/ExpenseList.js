import './ExpenseList.css'
import React from 'react';
import ExpenseItemComponent from './ExpenseItemComponent'
export default function ExpenseList(props){
    let contentExpense = <p className="expenses-list__fallback">No Expense Data To Display</p>
    if (props.filteredYearData.length > 0) {
        contentExpense = props.filteredYearData.map((expense) => {
                return (
                    <div key={expense.id}>
                        <ExpenseItemComponent date={expense.date} id={expense.id} title={expense.title} amount={expense.amount} />
                    </div>
                )
            })
        
    }
    return(
        <ul className="expenses-list">
            {contentExpense}
        </ul>
    );
}