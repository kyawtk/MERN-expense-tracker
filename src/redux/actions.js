export const ADDINCOME = "ADDINCOME";
export const ADDEXPENSES = "ADDEXPENSES";
export const ADDTRANSACTION = "ADDTRANSACTION";
export const UPDATEBALANCE = "UPDATEBALANCE";
export const DELETETRANSACTION = "DELETETRANSACTION";
export const addIncome = (para) => {
  console.log("called update add incoime");
  return {
    type: ADDINCOME,
    payload: para,
  };
};
export const addExpenses = (para) => {
  console.log("called update add expense");
  return {
    type: ADDEXPENSES,
    payload: para,
  };
};
export const addTransaction = (para) => {
  console.log("called update transaction");
  return {
    type: ADDTRANSACTION,
    payload: para,
  };
};
export const updateBalance = () => {
  console.log("called update balance");
  return {
    type: UPDATEBALANCE,
  };
};
export const deleteTransaction = (id) => {
  console.log("called deleted transaction");
  return {
    type: DELETETRANSACTION,
    payload: id,
  };
};
