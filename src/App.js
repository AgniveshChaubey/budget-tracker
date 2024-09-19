import "bootstrap/dist/css/bootstrap.min.css";
import MyBudget from "./components/MyBudget";
import LeftWith from "./components/LeftWith";
import TotalSpent from "./components/TotalSpent";
import ListOfExpense from "./components/ListOfExpense";
import AddExpense from "./components/AddExpense";
import { AppProvider } from "./components/AppContext";
import EditBudget from "./components/EditBudget";

function App() {

const myStyle = {
  'backgroundColor': '#5ecaf8',
  'maxWidth': '500px',
  'border':'2px solid black',
  'borderRadius':'20px',
  'background': 'rgb(34,193,195)',
'background': 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(247,183,45,1) 100%)',
}
  return (
    <>
      <AppProvider>
        <div className="container mt-5 mb-5" style={myStyle}>
          <h1 className="mt-3">Lets Track It!!</h1>
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
          <h3 className="my-3">Edit Budget</h3>
          <div className="col col-sm">
            <EditBudget />
          </div>
        </div>
      </AppProvider>
    </>
  );
}

export default App;
