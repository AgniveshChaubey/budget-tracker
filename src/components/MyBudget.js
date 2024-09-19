import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const MyBudget = () => {
  const { budget } = useContext(AppContext);
  return <div className="alert alert-primary text-center">Budget: <br/> &#8377;{budget}</div>;
};

export default MyBudget;
