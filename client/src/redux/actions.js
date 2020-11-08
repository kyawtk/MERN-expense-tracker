<<<<<<< HEAD
import axios from 'axios'
export const ADDINCOME = "ADDINCOME";
export const ADDEXPENSES = "ADDEXPENSES";
export const ADDTRANSACTION = "ADDTRANSACTION";
export const GETTRANSACTIONS = 'GETTRANSACTIONS'
=======
import axios from "axios";
export const UPDATECLIENTBALANCE = "UPDATECLIENTBALANCE";
export const ADDCLIENTTRANSACTION = "ADDCLIENTTRANSACTION";
export const ADDINCOME = "ADDINCOME";
export const ADDEXPENSES = "ADDEXPENSES";
export const ADDTRANSACTION = "ADDTRANSACTION";
export const GETTRANSACTIONS = "GETTRANSACTIONS";
>>>>>>> working
export const UPDATEBALANCE = "UPDATEBALANCE";
const server = "http://localhost:5000/transactions";

export const fetchTransactions = () => {
  return (dispatch) => {
    axios.get(server).then((res) => {
     
      dispatch(getTransactions(res.data.data));
      dispatch(updateClientBalance());
    });
  };
};


const dburl = 'mongodb://localhost:27071/expenseTracker/transactions'

export const addTransaction = (para) => {
  const config = {
    headers: {
<<<<<<< HEAD
      'Content-Type': 'application/json'
    }
  }
 let res =  axios.post(bdurl,para,config);
=======
      "Content-Type": "application/json",
    },
  };
  return (dispatch) => {
    axios.post(server, para, config).then((res) => {
      dispatch(addclientTransaction(res.data.data));
      dispatch(updateClientBalance())
    });
  };
};

export const addclientTransaction = (para) => {
  
>>>>>>> working
  return {
    type: ADDCLIENTTRANSACTION,
    payload: para,
  };
};

export const updateBalance = (id) => {
  return (dispatch) => {
    axios.delete(`${server}/${id}`).then((res) => {
      
      dispatch(updateClientBalance(id));
    });
  };
};

export const updateClientBalance = (id) => {
  return {
    type: UPDATECLIENTBALANCE,
    payload: id,
  };
};
<<<<<<< HEAD

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
=======
export const getTransactions = (data) => {
  return {
    type: GETTRANSACTIONS,
    payload: data,
  };
};
>>>>>>> working
