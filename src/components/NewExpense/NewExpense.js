import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);

  const onSubmitExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log("Expense Data: ", expenseData);

    props.onAddExpense(expenseData);
    setShowAddExpenseForm(false);
  };

  const onShowAddExpenseButtonHandler = () => {
    setShowAddExpenseForm(true);
  };

  const onCancelHandler = () => {
    setShowAddExpenseForm(false);
  };

  return (
    <div className="new-expense">
      {!showAddExpenseForm && (
        <button onClick={onShowAddExpenseButtonHandler}>Add Expense</button>
      )}
      {showAddExpenseForm && (
        <ExpenseForm
          onSubmitExpenseData={onSubmitExpenseDataHandler}
          onCancel={onCancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
