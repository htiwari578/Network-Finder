import User from "../models/userModels.js"
import jwt from "jsonwebtoken";

export const login = async (req,res)=> {
    try {
        const {email} = req.body
        let user 
        user = await User.findOne({email});

        if(!user){
           const newUser = new User({
            email
           })
           await newUser.save()
           user = newUser
        }
          // Generate JWT Token
        const token = jwt.sign(
            { id: user._id, email: user.email }, // ✅ Only store necessary user data
             process.env.JWT_SECRET,
            { expiresIn: "1d" } // ✅ Token expires in 1 day
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