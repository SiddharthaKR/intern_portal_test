const StudentUser= require("../models/StudentUser");
const router = require("express").Router();

//update user
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id ) {
     
      try {
        const student = await StudentUser.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        },
        {new:true});
        res.status(200).json(student);
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You can update only your account!");
    }
  });



module.exports =router;