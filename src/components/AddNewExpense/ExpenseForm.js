import './ExpenseForm.css'
import React, { useState } from 'react';

const ExpenseForm = (props) => {
    const [enertredTitle, setEnteredTitle] = useState('');
    const [enertredAmount, setEnteredAmount] = useState('');
    const [enertredDate, setEnteredDate] = useState('');

    /* const [userInput,setUserInput] = useState({
        enertredTitle : '',
        enertredAmount: '',
        enertredDate: ''
    }) */

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        /* setUserInput({
            ...userInput,
            enertredTitle:event.target.value
        }); */
        /* setUserInput((prevState) => {
            return { ...prevState,enertredTitle:event.target.value};
        }) */
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        /* setUserInput((prevState) => {
            return { ...prevState,enertredAmount:event.target.value};
        }) */
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        /* setUserInput((prevState) => {
            return { ...prevState,enertredDate:event.target.value};
        }) */
    }

    const submitHandler =(event) =>{
        event.preventDefault();
        const formSubmission = {
            title:enertredTitle,
            amount:enertredAmount,
            date: new Date(enertredDate)
        }
        // console.log(formSubmission);
        props.onSaveExpenseData(formSubmission);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value = {enertredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value = {enertredAmount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value = {enertredDate}/>
                </div>
            </div>
            <div className='new-expense__actions'>
            <button type='button' onClick = {props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;