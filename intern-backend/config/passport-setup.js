const keys =require("./keys");
const passport=require('passport');
const OutlookStrategy=require('passport-outlook');
const User=require("../models/user");
 

passport.serializeUser((user,done)=>{
    done(null,user);
});

passport.deserializeUser((user,done)=>{   
 done(null,user);
});


passport.use(new OutlookStrategy({
    clientID: keys.outlook.clientID,
    clientSecret: keys.outlook.clientSecret,
    callbackURL: '/auth/outlook/callback'
  },
  function(accessToken, refreshToken, profile, done) {
  //check if user already exist in our db
  User.findOne({outlookId:profile._json.Id}).then(
    (currentUser)=>{
      if(currentUser){
//already hv d user
console.log('user is '+currentUser);
//serializing the user
done(null, currentUser);
      }
      else{
        new User({
          outlookId: profile._json.Id,
          username: profile._json.DisplayName,
          email: profile._json.EmailAddress,
          
        }).save().then((newUser)=>{
          console.log("hiiiiiiii"+newUser);
          done(null, newUser);
        });
      }
      
    }
  )


   

    
    

  }
));