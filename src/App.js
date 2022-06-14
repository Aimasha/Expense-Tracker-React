import Header from "./components/Header"
import React from "react"
import Balance from "./components/Balance"
import IncomeExpenses from "./components/IncomeExpenses"
import TransactionList from "./components/TransactionList"
import AddTransaction from "./components/AddTransaction"
import ExpenseTracker from "./contexts/ExpenseTracker"
import { useState } from "react"

import './App.css';


function App (){
  const [text,setText] = useState("")
  const [amount,setAmount] = useState([0])
  const [history,setHistory] = useState([])

  return(
    <div className="App">
       <ExpenseTracker.Provider value={{text, setText, amount, setAmount ,history,setHistory}}>
        <Header/>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
        </ExpenseTracker.Provider>
    </div>
  )
}
export default App;
