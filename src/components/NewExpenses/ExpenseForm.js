import React from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    return(
     <>
        <form className="new-expense__controls">
            <div className="new_expense__control">
                 <label>Title</label>
                 <input type="text"/>
            </div>
            <div className="new_expense__control">
                 <label>Amount</label>
                 <input type="number" min="0.01" step="0.01"/>
            </div>
            <div className="new_expense__control">
                 <label>Date</label>
                 <input type="date" min="2021-01-01" max="2021-31-12"/>
            </div>
        </form>
     </>   
    )
}


export default ExpenseForm;