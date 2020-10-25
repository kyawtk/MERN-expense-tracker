import * as actions from "./actions";

export const initialState = {
  balance: 0,
  income: 0,
  expenses: 0,
  transactions: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.DELETETRANSACTION:
      let newBalance = 0;
      let newArr = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );

      for (let i = 0; i < newArr.length; i++) {
        newBalance = newBalance + newArr[i].amount;
        console.log(newBalance);
      }
      return {
        ...state,
        transactions: newArr,
        balance: newBalance,
      };
    case actions.ADDINCOME:
      return {
        ...state,
        income: state.income + action.payload,
      };
    case actions.ADDEXPENSES:
      return {
        ...state,
        expenses: state.expenses + action.payload,
      };
    case actions.UPDATEBALANCE:
      return {
        ...state,
        balance: state.income + state.expenses,
      };
    case actions.ADDTRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default: {
      return state;
    }
  }
}
