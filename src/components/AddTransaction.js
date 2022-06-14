import React, { useContext} from 'react'
import ExpenseTracker from "../contexts/ExpenseTracker"
import { nanoid } from "nanoid";


 function AddTransaction() {
   const {text,setText,amount,setAmount,history,setHistory} = useContext(ExpenseTracker)

   const handleBtnClick = () =>{
    setText("")
    setAmount("")
   
     let newObj = { title: text , total: +amount ,id: nanoid() }
     let newTextData  = [newObj]

     for(let i in history){
      newTextData.push(history[i])
     }
     setHistory(newTextData)
   }
  return (
    <div>
        <h2>Add new transaction</h2>
        <h3>Text</h3>

        <div className='add-tranc-bottom'>
        <input 
        value={text}
        onChange={(e)=>setText(e.target.value)}
        type="text"
         placeholder='Enter text...' />

        <h3>Amount<h3>(negative - expense, positive - income)</h3></h3>

    

<input 
value={amount}
onChange={(e)=>setAmount(e.target.value)}
 type="number" 
 placeholder='Enter Amount...'
 />
      <div className='btn-add-tranc'>
     <button onClick={handleBtnClick} className='btnlast' >
         Add transaction
     </button>
     </div>
     </div>
    </div>
  )
}
export default AddTransaction
