const express = require('express');
const { addTransaction, getTransactions, deleteTransaction } = require('../controllers/transactions');

const transactionRoute = express.Router();

transactionRoute.route('/')
.get(getTransactions)
.post(addTransaction)


transactionRoute.route('/:id')
  
  .delete(deleteTransaction);

module.exports = transactionRoute;
