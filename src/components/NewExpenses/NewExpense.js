import React from "react";
import Card from "../Card";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    return(
     <>
     <Card className="expense-wrapper">
            <h2>Add an expense</h2>
            <ExpenseForm/>
     </Card>
     
     </>   
    )
}

export default NewExpense;