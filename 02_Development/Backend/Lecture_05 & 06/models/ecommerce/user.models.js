import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            reuiqred: true,
            unique: true,
            lowercase: true,
        },
        email:{
            type: String,
            reuiqred: true,
            unique: true,
            lowercase: true,
        },
        password:{
            type: String,
            required: true
        }
    },{timestapms:true}
)

export const User = mongoose.model("User", userSchema)