import "./ExpenseDate.css";

function ExpenseDate(props) {
  //   let options = {
  //     weekday: "long",
  //     year: "numeric",
  //     month: "long",
  //     day: "2-digit",
  //   };
  // const date = props.date?.toLocaleString("en-US", options);
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-item__date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
