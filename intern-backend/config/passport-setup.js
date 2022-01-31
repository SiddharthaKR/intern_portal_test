const keys =require("./keys");
const passport=require('passport');
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const OutlookStrategy=require('passport-outlook');
const StudentUser=require("../models/StudentUser");
const CompUser=require("../models/CompUser");
const jwt= require('jsonwebtoken')
 


passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      
      CompUser.findOne({googleid:profile.id}).then(
        (currentUser)=>{
          if(currentUser){
            console.log('user is '+currentUser);
            //serializing the user
            done(null, currentUser);
          }
          else{
            new CompUser({
              username: profile._json.name,
              email: profile._json.picture,
              googleid:profile.id,   
            }).save().then((newuser)=>{
              console.log("hiiiiiiii new Companyuser"+newuser);
              done(null, newuser);
            });
          }
        }
      )
    }
  )
);





passport.use(new OutlookStrategy({
    clientID: keys.outlook.clientID,
    clientSecret: keys.outlook.clientSecret,
    callbackURL: '/auth/outlook/callback'
  },
  function(accessToken, refreshToken, profile, done) {
  //check if user already exist in our db
  StudentUser.findOne({outlookId:profile._json.Id}).then(
    (currentUser)=>{
      if(currentUser){
//already hv d user
console.log('user is '+currentUser);
//serializing the user
done(null, currentUser);
      }
      else{
        new StudentUser({
          username: profile._json.DisplayName,
          email: profile._json.EmailAddress,
          outlookId: profile._json.Id,           
          profilePicture:"",
          rollno:"",
          branch:"",
          graduation:"",
          resume:"",
          bio:"",
          skills:"",
          linkedin:"",
          phone:""
          
        }).save().then((newUser)=>{
          console.log("hiiiiiiii new user"+newUser);
          done(null, newUser);
        });
      }
      
    }
  )
  }
));


passport.serializeUser((user,done)=>{
  done(null,user);
});

passport.deserializeUser((user,done)=>{   
// User.findById(id).then((user)=>{
  done(null,user);

// });
});