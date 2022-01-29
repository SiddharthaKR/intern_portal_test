const mongoose = require("mongoose");

const UserDetialsSchema = new mongoose.Schema(
    {
      outlookid: {
        type: String,
        required: true,
      },
      rollno: {
        type: Number,
        required: true,
        default: 0,
      },
      img: {
        type: String,
      },
      branch: {
        type: String,
        required: false,
      },
      graduationyear:{
          type: Number,
          required: false,
         default: 0
      },
      resume:{
          type: String,
          required:false
        },
    bio:{type: String,required:false},
    skills:{type: String,required:false},
    linkedin:{type: String,required:false},
    phone:{type: Number,required:false},

    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("StudentDetail", UserDetialsSchema);