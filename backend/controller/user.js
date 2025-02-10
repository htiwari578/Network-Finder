import User from "../models/userModels.js"
import jwt from "jsonwebtoken";
import { sendRechargeEmail } from "../utils/emailService.js";

export const login = async (req,res)=> {
    try {
        const {email} = req.body
        let user = await User.findOne({email});

        if(!user){
           user = new User({
            email,
            credits: 5,
           })
           await user.save()
    
        }
          // Generate JWT Token
        const token = jwt.sign(
            { id: user._id, email: user.email }, 
             process.env.JWT_SECRET,
            { expiresIn: "1d" } 
      );
        res.cookie('access_token', token, {
            httpOnly: true,
            sameSite: "strict",
        })
        res.status(200).json({
            success: true,
            message: "Login successful",
            user,
            token,
        })
       
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
 
    }
    
}


//deduct 1 credit per serach
export const deductCredit = async(req,res)=>{
    try {
        const {email} = req.body
        let user = await User.findOne({email})

        if(!user){
            return res.status(404).json({
                messagge:"User not found"
            });
        }
        if(user.credits <= 0){
            await sendRechargeEmail(user.email);
            return res.status(403).json({
                message:"Your credit exhausted, please recharge your email"
            });
        }
        user.credits -= 1;
        await user.save();
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}