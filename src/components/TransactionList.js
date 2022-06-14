

import { useState } from 'react'
import React, { useContext} from 'react'
import ExpenseTracker from '../contexts/ExpenseTracker'

 function TransactionList() {

    const {history,setHistory} = useContext(ExpenseTracker)
    
    const handleDelete = (id) => {
      const filtered = history.filter((item) => item.id !== id)
      setHistory(filtered)
    }

  return (
    <div className='trans-container'>
        <h2>History</h2>

        {
          history.map((item,id)=>{
            const minusPlusSign = item.total < 0 ? "-" : "+" 
            return(
              < div key={item.id}>
              <ul className='transaction'>  

                <li  >
              
                <button onClick={() => handleDelete(item.id)} className='delete-btn'>x</button>
                {item.title}
                  <span className='span'>{minusPlusSign}${Math.abs(item.total)}</span>
                 
                  </li>
                
                  <div className={item.total < 0  ? "minusLine" : "plucLine"}></div>
              </ul>
              
              </div>
            )
          })
        }
             
           
        
        
    </div>
  )
}
export default TransactionList
