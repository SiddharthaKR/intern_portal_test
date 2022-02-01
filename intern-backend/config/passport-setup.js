const keys =require("./keys");
const passport=require('passport');
const GoogleStrategy = require("passport-google-oauth20");
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
    function (accessToken, refreshToken, profile, complete) {
      
      CompUser.findOne({googleid:profile.id}).then(
        (currentUser)=>{
          if(currentUser){
            console.log('user is '+currentUser);
            //serializing the user
            complete(null, currentUser);
          }
          else{
            new CompUser({
              username: profile._json.name,
              email: profile._json.picture,
              googleid:profile.id,   
            }).save().then((newUser)=>{
              console.log("hiiiiiiii new Companyuser"+newUser);
              complete(null, newUser);
            });
          }
        }
      )
    }
  )
);

passport.serializeUser((user,complete)=>{
  complete(null,user.id);
});
passport.deserializeUser((id,complete)=>{   
  CompUser.findById(id).then((user) => {
    complete(null, user);
});
});



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
  done(null,user.id);
});

passport.deserializeUser((id,done)=>{   
  StudentUser.findById(id).then((user) => {
    done(null, user);
});
});

