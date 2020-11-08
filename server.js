const express = require('express')
const connectDb = require('./db')
const transactionRoute =  require('./router/transactions')
const cors  = require('cors')

connectDb()

const app = express();
app.use(express.json())
app.use(cors())
app.use('/transactions',transactionRoute)





const PORT =process.env.port || 5000
app.listen(PORT , console.log(`server listening on ${PORT}`))