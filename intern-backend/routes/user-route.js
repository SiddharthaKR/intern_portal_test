const router = require("express").Router();
const UserDetails= require("../models/Userdetails");
const express= require('express');


router.get("/editprofile",(req,res)=>{
res.send(req.user);
console.log(user)
});

//create a post req of student details

router.post("/editprofile",async (req,res)=>{
 const StudentDetails= new UserDetails(req.body);
 try{
     const savedDetails = await StudentDetails.save();
     res.status(200).json(savedDetails);
     console.log("details addded");
 } catch(err){
  res.status(500).json(err);
 }
 
});

//update user





module.exports = router;