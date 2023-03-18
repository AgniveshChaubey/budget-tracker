import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const MyBudget = () => {
  const { budget } = useContext(AppContext);
  return <div className="alert alert-primary">Budget: ${budget}</div>;
};

export default MyBudget;
