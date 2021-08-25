import React from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // useState is a React hook that allows us to define values as state
  // React hooks must be called inside of React component funcitons like ExpenseItem
  // We pass an initial value which is props.title
  // useState returns an array with first element the variable itself (current state value) and as second element a function (that we can then call to assign a new value to that variable).
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle('Updated!');
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
