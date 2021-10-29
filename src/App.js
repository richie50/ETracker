import "./App.css";
import Expense from "./components/Expense";
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {
  return (
    <div className="App">
      <NewExpense/>
      <Expense />
    </div>
  );
}

export default App;
