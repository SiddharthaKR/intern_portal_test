
const router = require("express").Router();
const passport= require("passport");


router.get("/login/failed",(req,res)=>{
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/login/success", (req, res)=>{
  if(req.user){
    res.status(200).json({
      success: true,
      message: "successful",
      user: req.user,
    })
  }
  
})

router.get("/logout",(req,res)=>{
 req.logout();
 res.redirect(CLIENT_URL);
})

router.get('/outlook',
  passport.authenticate('windowslive', {
    scope: [
      'openid',
      'profile',
      'offline_access',
      'https://outlook.office.com/Mail.Read'

    ]
  })
);

const CLIENT_URL="http://localhost:3000/"


router.get('/outlook/callback', 
  passport.authenticate('windowslive', { failureRedirect: '/login/failed',
  successRedirect: CLIENT_URL
}));

 

  module.exports = router;