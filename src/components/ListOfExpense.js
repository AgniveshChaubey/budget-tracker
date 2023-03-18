import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import EachExpense from "./EachExpense";

const ListOfExpense = () => {
  const { expenses } = useContext(AppContext);

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <EachExpense id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ListOfExpense;
