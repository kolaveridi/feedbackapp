
const express=require('express');
const app=express();
const passport =require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


//clientId 
//clientSecret 
passport.use(new GoogleStrategy());

const PORT=process.env.PORT || 5000;

app.listen(process.env.PORT || 5000);