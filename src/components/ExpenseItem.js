import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //console.log(props);
  const { data } = props;
  const { type } = data;
  //console.log(type);
  const [types , setTypes] = useState(type); // second pass useState is not called , but state is preserved
  console.log('evaluates when it renders ' , types);
  // console.log(data);
  const clickHandler = (e) => {
    setTypes('Updated!'); // NOTE , causes a re render
    
  };
  console.log('ExpenseItem evaluated');


  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={data?.date}></ExpenseDate>
        <div className="expense-item__description">
          {/* <h2>{data?.type}</h2> */}
          <h2>{types}</h2>
          <div className="expense-item__price">${data?.amount}</div>
        </div>
        <button className="expense-item__button"onClick={clickHandler}> Change Title</button>
      </Card>
    </>
  );
}

export default ExpenseItem;
