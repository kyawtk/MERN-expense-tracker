const mongoose = require("mongoose")


const transactionSchema   = new mongoose.Schema({
    text :{
        type:String,
        required:true,
        trim:true,
    },
    amount:{
        type:Number,
        required: true,
        trim:true,
    }
},{timestamps:true})

const Transactions = mongoose.model("Transaction", transactionSchema)
module.exports = Transactions;