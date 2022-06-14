
import React, {useContext} from 'react'
import ExpenseTracker from '../contexts/ExpenseTracker'

 function Balance() {
  const { history,setHistory} = useContext(ExpenseTracker)

   const totalBalance = history.map( item => item.total)

  const sum = totalBalance.reduce((acc,item) => acc + item, 0)

  return (
    <div className='balance-container'>
       <h4 className='balance'>Your Balance <h3 >{sum}</h3></h4>
      
    </div>
  )
}

export default Balance