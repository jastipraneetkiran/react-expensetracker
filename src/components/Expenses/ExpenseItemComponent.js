import "./ExpenseItemComponent.css"
import ExpenseDateComponent from './ExpenseDateComponent';
import Card from "../UI/CardComponent";
import React from "react";

export default function ExpenseItemComponent(props) {
    /* const dataObj = {
        expenseDate: `${new Date(2021, 6, 28)}`, //or use expenseDate.toISOString() to convert to date to string.
        expenseTitle: 'Health Checkup',
        expenseAmout: '4000.00'
    } */
    // const [title, setTitle] = useState(props.title);
    // const clickHandler = () => {
    //     setTitle('Updated!');
    //     console.log("Clicked!!@", title);
    // }
    return (
            <Card className="expense-item">
                <ExpenseDateComponent date={props.date} />
                <div className="expense-item__description"></div>
                <h2>{props.title}</h2>
                <div className="expense-item__price">₹{props.amount}</div>
                {/* <button onClick={clickHandler}>Change Title</button> */}
            </Card>
    );
}