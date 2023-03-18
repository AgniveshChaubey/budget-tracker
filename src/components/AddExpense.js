import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import { v4 as uuidv4 } from "uuid";

const AddExpense = () => {

  const {dispatch} = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const expense ={
      id: uuidv4(),
      name:name,
      cost: parseInt(cost),
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  const handleNameChange = (e) => {
    return setName(e.target.value);
  };

  const handleCostChange = (e) => {
    return setCost(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label for="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-sm">
          <label for="cost">Cost</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            onChange={handleCostChange}
          ></input>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpense;
