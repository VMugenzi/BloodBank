import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
firstName:{type:String,
require:[true, "firstname is required"]
},
lastName: String,

gender:{type:String,
enum:["female","male"]},

dob: {type: Date, require:true},

bloodGroup: String,

address: {type: String, required:true},

phone: {type:String, require:true},

password:{type:String,
default:12345},

status:{type:String,
enum:["active","inactive"]}

});

const UserInfo=mongoose.model('User',UserSchema);

export default UserInfo;