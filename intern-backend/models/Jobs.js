const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
    {
      userid:{type:String, required:true},
      company: {type:String, required:true},
      profile:{type:String},
      duration:{type:String}, 
      whocanapply:{type:String},
      aboutjob:{type:String},
      noofopening:{type:Number},
      perks:{type:String} 
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Job", JobSchema);