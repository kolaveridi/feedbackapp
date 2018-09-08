
const express=require('express');
const app=express();
const passport =require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys=require('./config/keys');
console.log('keys',keys);
let googleClientID=keys.googleClientID;
let googleClientSecret=keys.googleClientSecret;

// //clientId 
// //clientSecret 
passport.use(new GoogleStrategy({
    clientID:googleClientID,
    clientSecret:googleClientSecret,
    callbackURL: '/auth/google/callback'
},
(accessToken,refreshToken,profile,done)=>{
  console.log('a1',accessToken);
  console.log('a2',refreshToken);
  console.log('a3',profile);
  console.log('a4',done);
})
);
app.get('/auth/google',
   passport.authenticate('google',{
    scope:['profile','email']
}));
app.get('/auth/google/callback',passport.authenticate('google'));

const PORT=process.env.PORT || 5000;

app.listen(process.env.PORT || 5000);