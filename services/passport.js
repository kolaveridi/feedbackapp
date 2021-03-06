
const express=require('express');
const keys=require('../config/keys');
const passport =require('passport');
const mongoose=require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


const User=mongoose.model('users');

passport.serializeUser((user,done)=>{
  done(null,user.id);
});
passport.deserializeUser((id,done)=>{
User.findById(id)
.then(user =>{
    done(null,user);
  });
});
// //clientId 
// //clientSecret 
let googleClientID=keys.googleClientID;
let googleClientSecret=keys.googleClientSecret;

passport.use(new GoogleStrategy({
    clientID:googleClientID,
    clientSecret:googleClientSecret,
    callbackURL: '/auth/google/callback'
},
 async (accessToken,refreshToken,profile,done)=>{
    
 const existingUser= await User.findOne({googleId:profile.id})
  {
       if(existingUser){
       done(null,existingUser);// the first argument null means no error 
       }
       else{
       const user=await new User({ googleId:profile.id}).save()
        done(null,user);
       }
      }
  
  
  
  
  //console.log('a1',accessToken);
  //console.log('a2',refreshToken);
  //console.log('a3',profile);
  //console.log('a4',done);
})
);