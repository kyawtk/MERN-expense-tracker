import axios from 'axios'

export const ADDINCOME = "ADDINCOME";
export const ADDEXPENSES = "ADDEXPENSES";
export const ADDTRANSACTION = "ADDTRANSACTION";
export const GETTRANSACTIONS = 'GETTRANSACTIONS'
export const UPDATEBALANCE = "UPDATEBALANCE";
const server = "http://localhost:5000/transactions"

export const fetchTransactions =()=>{
  return dispatch=>{
    axios.get(server)
  .then(res=>{
    console.log(res.data.data)
    dispatch(getTransactions(res.data.data))
    dispatch(updateBalance())
  })
  }
  
}

export const addTransaction = (para) => {
  console.log("called update transaction");
  return {
    type: ADDTRANSACTION,
    payload: para,
  };
};

export const updateBalance = (id) => {
  console.log("called update balance");
  return {
    type: UPDATEBALANCE,
    payload: id,
  };
};
export const getTransactions =(data)=>{
  return {
     type: GETTRANSACTIONS,
    payload:data,
  }
}

