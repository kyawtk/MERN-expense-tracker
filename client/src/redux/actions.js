export const ADDINCOME = "ADDINCOME";
export const ADDEXPENSES = "ADDEXPENSES";
export const ADDTRANSACTION = "ADDTRANSACTION";

export const UPDATEBALANCE = "UPDATEBALANCE";

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

