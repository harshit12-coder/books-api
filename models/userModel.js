import mongoose, { Schema } from "mongoose";

const userSchema=new Schema(
{
    name:{
        type:String,
         required: [true, "Naam toh batao!"],
    },
    email:{
        type:String,
        required: [true, "Email chahiye!"],
        unique:true,
    },
    password:{
        type:String,
        required: [true, "Password daalo!"],
    }
},
{timestamps:true}
)
const User=mongoose.model("User",userSchema);
export default User;