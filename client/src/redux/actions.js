import axios from "axios";
export const UPDATECLIENTBALANCE = "UPDATECLIENTBALANCE";
export const ADDCLIENTTRANSACTION = "ADDCLIENTTRANSACTION";
export const ADDINCOME = "ADDINCOME";
export const ADDEXPENSES = "ADDEXPENSES";
export const ADDTRANSACTION = "ADDTRANSACTION";
export const GETTRANSACTIONS = "GETTRANSACTIONS";
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

export const addTransaction = (para) => {
  const config = {
    headers: {
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
export const getTransactions = (data) => {
  return {
    type: GETTRANSACTIONS,
    payload: data,
  };
};
