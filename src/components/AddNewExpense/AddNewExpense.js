import './AddNewExpense.css';
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
const AddNewExpense =(props) =>{
    const handleSaveExpenseData =(expData)=>{
        const expenseData = {
            ...expData,
            id:Math.random().toString()
        };
        props.onExpenseInserted(expenseData);
        setFormEditing(false);
        console.log(expenseData);
    }
    const [isformEditing,setFormEditing] = useState(false);
    const showForm = () => {
        return setFormEditing(true);
    };
    const hideForm = () => {
        return setFormEditing(false);
    };


    return(<div className="new-expense">
        {!isformEditing && <button type="button" onClick ={showForm}>ADD NEW EXPENSE</button>}
        {isformEditing && <ExpenseForm onSaveExpenseData={handleSaveExpenseData} onCancel={hideForm}/>}
    </div>);
} 
export default AddNewExpense;