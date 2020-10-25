import React from "react";
import { connect } from "react-redux";
import {deleteTransaction} from '../redux/actions'
const mapStateToProps = (state) => {
    return { transactions: state.transactions,}
 
};
const mapDispatchToProps =(dispatch)=>{
  return {
    handleDelete :(id)=> dispatch(deleteTransaction(id))
  }
}

const TransactionList = (props) => {
  const transactionList = props.transactions.map((transaction) => {
    return (
      <li key={transaction.id}>
        {transaction.text} <span>{transaction.amount}</span>
        <button className="delete-btn" onClick={()=>{
          props.handleDelete(transaction.id)
        }}>X</button>
      </li>
    );
  });
  return (
    <>
      <h4>History</h4>
      <ul>
       
        {transactionList}
      </ul>
    </>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(TransactionList);
