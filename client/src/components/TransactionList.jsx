import React from "react";
import { connect } from "react-redux";
import {updateBalance} from '../redux/actions'
const mapStateToProps = (state) => {
    return { transactions: state.transactions,}
 
};
const mapDispatchToProps =(dispatch)=>{
  return {
    handleDelete :(id)=> dispatch(updateBalance(id))
  }
}

const TransactionList = (props) => {
  const transactionList = props.transactions.map((transaction) => {
    return (
      <li key={transaction._id} className={transaction.amount > 0 ? "plus":"minus"}>
        {transaction.text} <span>{transaction.amount}</span>
        <button className="delete-btn" onClick={()=>{
          props.handleDelete(transaction._id)
        }}>X</button>
      </li>
    );
  });
  return (
    <>
      <h4>History</h4>
      <ul className='list'>
       
        {transactionList}
      </ul>
    </>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(TransactionList);
