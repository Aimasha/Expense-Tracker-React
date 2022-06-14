import React , { useContext} from 'react'
import ExpenseTracker from '../contexts/ExpenseTracker'
 function IncomeExpenses() {

  const {history,setHistory} = useContext(ExpenseTracker)
    
  const amounts = history.map(num => num.total)
  
  const income = amounts
  .filter((amount) => amount > 0)
  .reduce((acc,item)=> (acc + item),0)


  const expense = amounts
  .filter((amount) => amount < 0)
  .reduce((acc, item) => acc + item, 0) * -1

    console.log(income)
    console.log(expense)
  return (
    <div className='inc-exp-container'>
        <div className='inc'>
        <h1>Income </h1>
         <p className='money-plus'>{income}</p>
         </div>
           
         <div className='exp'>
         <h1 >Expense</h1>
         <p className='money-minus'>-{expense}</p>
         </div>
    </div>
  )
}

export default IncomeExpenses