import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const TotalSpent = () => {
  const { expenses } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return <div className="alert alert-primary text-center">Total Spent: <br/>&#8377;{totalExpense}</div>;
};

export default TotalSpent;
