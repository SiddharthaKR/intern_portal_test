const router = require("express").Router();
const Job=require('../models/Jobs');

//CREATE JOBS
router.post("/",async(req,res)=>{
  const newJob= new Job(req.body);
  try{
   const savedjob=await newJob.save();
   res.status(200).json(savedjob);
  }catch(err){
      res.status(500).json(err);
  }
});

//update
router.put("/:id",async(req,res)=>{
    try{
        const job=await Job.findById(req.params.id);
        if(job.userId==req.body.userId){
            const updatedJob=await Job.findByIdAndUpdate(
                req.params.id,{
                    $set:req.body
                },
                {new:true}
            );
            res.status(200).json(updatedJob);
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id",async(req,res)=>{
    try{
        const job=await Job.findById(req.params.id)
        if(job.userId==req.body.userId){
            await Job.findByIdAndDelete(req.params.id);
            res.status(200).json("Job has been deleted");
        }    
    }catch(err){
        res.status(500).json(err);
    }
});

//GET USER JOBS
router.get('/find/:userId',async(req,res)=>{
    try{
        const job=await Job.findOne({userId: req.params.userId});
        res.status(200).json(job);
    }catch(err){
        res.status(500).json(err)
    }
});

//GET ALL
router.get("/",async(req,res)=>{
    try{
        const jobs=await Job.find();
        res.status(200).json(jobs);
    }catch(err){
res.status(500).json(err);
    }
});




module.exports = router;