
const mongoose=require('mongoose');
const requireLogin=require('../middlewares/requireLogin');
const requireCredits=require('../middlewares/requireCredits');
const Mailer=require('../services/Mailer');
const surveyTemplate=require('../services/emailTemplates/surveyTemplate');
// first login check and then requirecredit check
const Survey=mongoose.model('surveys');
module.exports= app =>{

  app.post('/api/surveys',requireLogin,requireCredits,(req,res,next)=>{
    const{title,subject,body,recipients}=req.body;
    

    const survey=new Survey({
    title,
    subject,
    body,
    recipients: recipients.split(',').map(email => ({ email: email.trim() })),
    _user: req.user.id,
    dateSent: Date.now()
    });
    //we send email in this part

    const mailer=new Mailer(survey,surveyTemplate(survey));
    console.log(mailer);
    mailer.send();

   
  })

};