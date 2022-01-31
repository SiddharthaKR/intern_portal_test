const router = require("express").Router();
const passport= require("passport");
const CompUser= require("../models/CompUser");


router.get("/login/success", (req, res)=>{
    if(req.user){
      res.status(200).json({
        success: true,
        message: "successful",
        user: req.user,
      })
      
    }
    
  })
  