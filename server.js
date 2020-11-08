const express = require("express");
const connectDb = require("./db");
const path  = require('path')
const transactionRoute = require("./router/transactions");
const cors = require("cors");

connectDb();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/transactions", transactionRoute);

app.use(express.static("client/build"));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
);

const PORT = process.env.port || 5000;
app.listen(PORT, console.log(`server listening on ${PORT}`));
