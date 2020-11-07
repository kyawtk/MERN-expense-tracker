import * as actions from "./actions";

export const initialState = {
  balance: 0,
  income: 0,
  expenses: 0,
  transactions: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {

   







    case actions.UPDATEBALANCE:
      let newBalance = 0;
      let newArr = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      );

      for (let i = 0; i < newArr.length; i++) {
        newBalance = newBalance + newArr[i].amount;
      }

      let incomearr = newArr.filter((transaction) => transaction.amount >= 0);
      let income = 0;

      for (let j = 0; j < incomearr.length; j++) {
        income = income + incomearr[j].amount;
      }

      let expensearr = newArr.filter((transaction) => transaction.amount <= 0);
      let expenses = 0;

      for (let j = 0; j < expensearr.length; j++) {
        expenses = expenses + expensearr[j].amount;
      }
      console.log(state.income, state.expenses);
      return {
        ...state,
        transactions: newArr,
        balance: newBalance,
        expenses,
        income,
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
