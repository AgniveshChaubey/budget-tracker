import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";

const EditBudget = () => {
  const { dispatch } = useContext(AppContext);

  const [budget, setBudget] = useState();

  const handleChange = (e) => {
    return setBudget(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setBudget("");

    dispatch({
      type: "EDIT_BUDGET",
      payload: parseInt(budget),
    });
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="row mb-4">
        <div className="col col-sm-7">
          <input
            // style={{ maxWidth: "200px" }}
            placeholder={"Enter amount"}
            min={0}
            type="number"
            className="form-control"
            id="budget"
            value={budget}
            onChange={handleChange}
          />
        </div>
        <div className="col col-sm-3"></div>
        <div className="form-group col col-sm-1">
          <button type="submit" className="btn btn-primary">
            Edit
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditBudget;
