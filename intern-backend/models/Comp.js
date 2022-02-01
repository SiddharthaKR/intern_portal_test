const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        name:{type:String},
        about:{type:String},
        location:{type: String},
        phone:{type:String},
        email:{type:String},
        website:{type:String},
        logo:{type:String}
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("Company", CompanySchema);