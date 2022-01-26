const keys =require("./keys");
const passport=require('passport');
const OutlookStrategy=require('passport-outlook');

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
    done(null, profile);
  }
));