import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    email:{type:String, required: true , unique: true},
    credits:{type: Number, default: 5},
    createdAt:{type: Date, default: Date.now},

},{timestamps:true})

const User = mongoose.model("User", userSchema);
export default User;