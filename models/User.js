const mongoose=require('mongoose');
const {Schema}=mongoose;

const userSchema = new Schema({
   googleId:String,
   
});

mongoose.model('users',userSchema);// a new collection called users created and it has Schema userSchema
