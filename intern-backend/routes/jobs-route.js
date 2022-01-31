const router = require("express").Router();


router.get("/hi",(req,res)=>{
    res.send(req.user)
    console.log(req.user)
});

module.exports = router;