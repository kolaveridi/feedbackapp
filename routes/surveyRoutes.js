
const requireLogin=require('../middlewares/requireLogin');
const requireCredits=require('../middlewares/requireCredits');
// first login check and then requirecredit check
module.exports= app =>{

  app.post('/api/surveys',requireLogin,requireCredits,(req,res,next)=>{

  })

};