const mongoose  = require('mongoose')
const url = 'mongodb://localhost:27017/expenseTracker'
const colors  = require('colors')
const connectDb = ()=>{
    mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true })
    .then(res=>{
        console.log(`connected to the database`.cyan)
    }).catch(err => console.log(err))
}
 
module.exports = connectDb;

