const router = require("express").Router();
const express= require('express');
const authCheck= require("../controllers/authcontroller");
const StudentUser=require("../models/StudentUser");



router.get("/editprofile",(req,res)=>{
res.send("hii");
console.log(req.user);
});

//create a post req of student details

router.patch("/updatestudent",async (req,res)=>{
    StudentUser.findOneAndUpdate
//  const studentuser= new StudentUser(req.body);
//  try{
//      const savedDetails = await studentuser.save();
//      res.status(200).json(savedDetails);
//      console.log("details addded");
//  } catch(err){
//   res.status(500).json(err);
//  }
 
});

//update user





module.exports = router;