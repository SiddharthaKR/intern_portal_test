const router = require("express").Router();
const Company=require('../models/Comp');
const { post } = require("./jobscart-route");

//create company
router.post("/",async(req,res)=>{
    const newCompany= new Company(req.body);
    try{
     const savedCompany=await newCompany.save();
     res.status(200).json(savedCompany);
    }catch(err){
        res.status(500).json(err);
    }
  });

  //update company

  router.put("/:id",async(req,res)=>{
      try{
          const company=await Company.findById(req.params.id);
          if(company.userId===req.body.userId){
              await post.updateOne({$set:req.body});
              res.status(200).json("copmany profile updated");
          }else{
              res.status(500).json(err);
          }
      }catch(err){
          res.status(500).json(err);
      }
  })
  