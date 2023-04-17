import { useState } from "react";

import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card";
import "./Expenses.css"
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props){

  const [filteredYear,setFilteredYear] = useState('2022');

  const expensesFilterSelectHandler = yearSelected => {
    setFilteredYear(yearSelected);


    //setExpensesArray();
  };

  const [expensesArray,setExpensesArray] = useState(props.items);


    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter selected = {filteredYear} onExpensesFilterSelect = {expensesFilterSelectHandler}/>
          {expensesArray.map(expense => 
          <ExpenseItem 
            title = {expense.title} 
            amount = {expense.amount} 
            date = {expense.date}/>
          )};
        </Card>
      </div>
        
      );
}

export default Expenses;