import React, { useState } from "react";// use this if you are gonna need state changes
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  //[something that describes the value, set+ The first name]
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React')
  
  const clickHandler = () => {
    setTitle('Updated😁')
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
