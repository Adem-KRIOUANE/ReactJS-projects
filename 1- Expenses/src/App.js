import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const InitialExpenses = [
  {
    id: "e1",
    title: "New TV",
    amount: "800.0",
    date: new Date(2019, 7, 14),
  },
  {
    id: "e2",
    title: "Car Insurrance",
    amount: "294.67",
    date: new Date(2019, 8, 5),
  },
  {
    id: "e3",
    title: "Toilet Paper",
    amount: "94.12",
    date: new Date(2021, 5, 8),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: "450",
    date: new Date(2020, 8, 10),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(InitialExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      console.log(expense);
      return [expense, ...prevExpenses];
    });
  };

  /*return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started!"),
    React.createElement(Expenses, { items: expenses })
  );*/
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
