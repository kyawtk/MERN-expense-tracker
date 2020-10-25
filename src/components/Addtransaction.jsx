import React, { useState } from "react";
import { addExpenses, addIncome, addTransaction, updateBalance } from "../redux/actions";
import {connect} from 'react-redux'



const mapDispatchToProps = (dispatch)=>{
    return {
        handlesubmit : (text, amount)=> {
          dispatch(addTransaction({text,amount,id:Math.random()}))
          if(amount >= 0){
            dispatch(addIncome(amount))
          }else{
            dispatch(addExpenses(amount))
          }
          dispatch(updateBalance())
        }
    }
}



const Addtransation = (props) => {
  let [text, setText] = useState("");
  let [amount, setAmount] = useState('');



  return (
    <div>
      <h4>Add Transation</h4>
      <form action="#" onSubmit={()=>{
          props.handlesubmit(text,amount)
          setAmount('')
          setText('')
      }}>
        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          value={text}
          placeholder="Enter Text...."
          onChange={(e) => setText(e.target.value)}
          required
        />
     
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
         
          id="amount"
          value={amount}
          placeholder="Enter Amount...."
          onChange={(e) => 
            
            setAmount(parseInt(e.target.value,10))}
          required
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default connect(null,mapDispatchToProps)(Addtransation);
