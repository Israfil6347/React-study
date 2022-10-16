import React from 'react';
// import ExpenseItem from './ExpenseItem';
import Expenses from './Expenses';
import NewExpense from './NewExpense/NewExpense';
const App=()=> {
  const expense = [
    {
      id:'1',
      title:'toilet paper',
      amount:'250',
      date: new Date(2022,7,12),
    },
    {
      id:'2',
      title:'tv news',
      amount:'3000',
      date: new Date(2022,9,12),
    },
    {
      id:'3',
      title:'car insurance',
      amount:'250',
      date: new Date(2022,8,12),
    },
  ]
  // return  React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},"Let's get Started!"),
  //   React.createElement(Expenses,{item:expense})
  //   );
  return (
    <div>
        <NewExpense/>
        <Expenses
        item={expense}
        />      
      </div>
  );
}

export default App;
