import Card from "../UI/CardComponent";
import "./Expenses.css";
import React, { useState } from "react";
import ExpenseList from './ExpenseList';
import ExpensesFilter from "../AddNewExpense/ExpenseFilter";
import ExpenseChart from "../Chart/ExpenseChart";
export default function Expenses(props) {
    const [curYear,SelYear] = useState('2021');
    const onFilterDataChange = (filterArgs) =>{
        SelYear(filterArgs);
        console.log(filterArgs);
    }

    const filteredYearData = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === curYear;
    })
    
    return (
        <div>
            <Card className="expenses">
            <ExpensesFilter filterfetch ={onFilterDataChange} selectedYear ={curYear}/>
            <ExpenseChart expenses ={filteredYearData}/>
            <ExpenseList filteredYearData={filteredYearData}/>
            </Card>
        </div>
    );
}