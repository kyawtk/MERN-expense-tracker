import React from "react";
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransationList from './components/TransactionList'
import Addtransaction from './components/Addtransaction'
import "./App.css";

function App() {
  return <div className="App">
    
  <Header></Header>
  <div className='container'></div>
  <Balance></Balance>
  <IncomeExpenses></IncomeExpenses>
  <TransationList></TransationList>
  <Addtransaction></Addtransaction>
  </div>;
}

export default App;
