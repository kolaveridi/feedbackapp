const passport =require('passport');
const keys=require('../config/keys');
const stripe=require('stripe')(keys.stripeSecretKey);
//https://stripe.com/docs/api/node#create_charge
module.exports =app=>{
   app.post('/api/stripe',(req,res)=>{
          // console.log(req.body);
        stripe.charges.create({
           amount:500,
           currency:'usd',
           description:'Emaily payment',
           source:req.body.id
        },function(err, charge) {
            // asynchronously called
            console.log("charge",charge);
          });
     
   });
};