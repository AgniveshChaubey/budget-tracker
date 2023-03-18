import "bootstrap/dist/css/bootstrap.min.css";
import MyBudget from "./components/MyBudget";
import LeftWith from "./components/LeftWith";
import TotalSpent from "./components/TotalSpent";
import ListOfExpense from "./components/ListOfExpense";
import AddExpense from "./components/AddExpense";
import { AppProvider } from "./components/AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <div className="container mt-5">
          <h1>Lets Track It!!</h1>
          <div className="row mt-4">
            <div className="col col-sm">
              <MyBudget />
            </div>
            <div className="col col-sm">
              <LeftWith />
            </div>
            <div className="col col-sm">
              <TotalSpent />
            </div>
          </div>
          <h3 className="mt-3">Expenses</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <ListOfExpense />
            </div>
          </div>
          <h3 className="mt-3">Add Expense</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <AddExpense />
            </div>
          </div>
        </div>
      </AppProvider>
    </>
  );
}

export default App;
