import axios from 'axios'
export const ADDINCOME = "ADDINCOME";
export const ADDEXPENSES = "ADDEXPENSES";
export const ADDTRANSACTION = "ADDTRANSACTION";
export const GETTRANSACTIONS = 'GETTRANSACTIONS'
export const UPDATEBALANCE = "UPDATEBALANCE";


const dburl = 'mongodb://localhost:27071/expenseTracker/transactions'

export const addTransaction = (para) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
 let res =  axios.post(bdurl,para,config);
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

export async function getTransactions() {
  try {
    const res = await axios.get(dburl);

    dispatch({
      type: 'GETTRANSACTIONS',
      payload: res.data.data
    });
  } catch (err) {
   console.log(err)
  }
}