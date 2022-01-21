const express = require("express");
const app = express();
const transactionArray = require("./models/transactionModel");
const transactionController = require("./controllers/transactionController");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    console.log("something");
    res.json(transactionArray);
    res.send("Welcome to Budget App");
});

app.use("/transactions", transactionController);

app.get("/transactions", (req, res) => {
    console.log("something else");
    res.send(transactionArray);
})

app.get('*', (req, res)=>{
  res.status(404).json({ error: 'Page not found.' })
})

module.exports = app;