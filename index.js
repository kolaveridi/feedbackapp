

const express=require('express');
const app=express();
const cookieSession=require('cookie-session');
const keys=require('./config/keys');
const mongoose=require('mongoose');
const passport=require('passport');
const bodyParser = require('body-parser');// middleware

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI,{ useNewUrlParser: true });


app.use(bodyParser.json());


app.use(
 cookieSession({
    maxAge:30*24*60*60*1000,
    keys:[keys.cookieKey]

 })
);


app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);// it is going to turn intop a function



const PORT=process.env.PORT || 5000;

app.listen(PORT);