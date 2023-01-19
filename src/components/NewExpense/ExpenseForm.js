import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [entertedTitle, setEnteredTitle] = useState("");
  const [entertedAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     entertedTitle: "",
  //     entertedAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   entertedTitle: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, entertedTitle: event.target.value };
    // }); //same as above but this one will make sure that React will have the latest state.
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: entertedTitle,
      amount: entertedAmount,
      date: new Date(enteredDate),
    };

    // console.log("expense data: ", expenseData);
    props.onSubmitExpenseData(expenseData);

    //clear the inputs
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={entertedTitle}
            onChange={titleChangeHandler} //two way binding
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={entertedAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
        <button type="button" onClick={props.onCancel}>
          Cancel{" "}
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
