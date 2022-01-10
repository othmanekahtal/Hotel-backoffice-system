
const express = require("express");
const router = express.Router()
// user endpoint
router.get("/questions", async (req,res)=>{res.status(200).send({message:"hello question"})});
router.post("/questions", async (req,res)=>{res.status(200).send({message:"hello question"})});
router.put("/questions", async (req,res)=>{res.status(200).send({message:"hello question"})});
router.delete("/questions", async (req,res)=>{res.status(200).send({message:"hello question"})});


  module.exports = router