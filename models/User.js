const mongoose=require('mongoose');
const {Schema}=mongoose;
// giving default value of zero top credits
const userSchema = new Schema({
   googleId:String,
   credits:{type:Number,default:0}
   
});

mongoose.model('users',userSchema);// a new collection called users created and it has Schema userSchema
