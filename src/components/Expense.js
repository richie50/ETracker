import Card from "./Card";
import "./Expense.css";
import ExpenseItem from "./ExpenseItem";

function Expense(props) {
  const expenseDataSource = [
    {
      id: "e1",
      type: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", type: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      type: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      type: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <Card className="expense">
      <ul>
        {expenseDataSource.map((expense) => (
          <li key={expense.id}>
            <ExpenseItem data={expense}></ExpenseItem>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Expense;
