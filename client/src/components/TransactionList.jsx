import React,{useEffect} from "react";
import { connect } from "react-redux";
import {updateBalance,fetchTransactions} from '../redux/actions'
const mapStateToProps = (state) => {
    return { transactions: state.transactions,}
 
};
const mapDispatchToProps =(dispatch)=>{
  return {
    fetchTransactions:()=>dispatch(fetchTransactions()),
    handleDelete :(id)=> dispatch(updateBalance(id))
  }
}

const TransactionList = (props) => {

  useEffect(()=>{
    props.fetchTransactions()
  },[])


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
