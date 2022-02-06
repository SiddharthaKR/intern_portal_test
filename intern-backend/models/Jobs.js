const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
    { userId:{type:String},
      compId:{type:String, required:true},
      company: {type:String, },
      profile:{type:String},
      duration:{type:String}, 
      whocanapply:{type:String},
      aboutjob:{type:String},
      noofopening:{type:Number},
      perks:{type:String},
      phone:{type:String}
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Job", JobSchema);