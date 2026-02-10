const mongoose=reuqire("mongoose");
const bcrypt=require("bcryptjs");


const userSchema=mongoose.Schema({
 name:{
    type:String,
    required:true
 },
 email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
 },
 password:{
    type:String,
    required:function(){
        return !this.googleId
    }
 },
 googleId:{
    type:String,
    unique:true,
    sparse:true
 },
 preferredRole:{
    type:String,
    default:"MERN Stack Developer"
 },
}
,{
   timestamps:true
}
 



)