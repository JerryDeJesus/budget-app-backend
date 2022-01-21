const express = require("express");
const transactionRouter = express.Router();
const transactionArray = require("../models/transactionModel");

transactionRouter.get("/", (req, res) => {
    res.json(transactionArray);
})

transactionRouter.get("/:index", (req, res) => {
    const { index } = req.params;
    if(transactionArray[index]){
        res.json(transactionArray[index]);
    }else{
        res.status(404).json({message: "Not found"});
    }
})

transactionRouter.post("/", (req, res) => {
    transactionArray.push(req.body);
    res.json(transactionArray[transactionArray.length-1])
})

transactionRouter.delete("/:index", (req, res) => {
    const { index } = req.params;
    if(transactionArray[index]){
        let deleted = transactionArray.splice(index, 1);
        res.json(deleted);
    }else{
        res.status(404).json({error: "Item not found"})
    }
})

transactionRouter.put("/:index", (req, res) => {
    let { index } = req.params;
    let { date, name, amount, from } = req.body;
    if(date && name && amount && from){
        transactionArray[index] = { date, name, amount, from };
    }else{
        res.status(422).json({error: "Please provide info for all fields"})
    }
})

module.exports = transactionRouter;