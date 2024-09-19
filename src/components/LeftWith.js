import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const LeftWith = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

  return <div className={`alert ${alertType} text-center`}>Left with: <br/> &#8377;{budget - totalExpenses}</div>;
};

export default LeftWith;
