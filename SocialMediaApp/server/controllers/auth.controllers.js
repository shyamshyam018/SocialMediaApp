import UserModel from "../models/user.model.js";

// Register User
export const register = async (req,res) => {
    try {
        const newUser = new UserModel({
            username : "shyam" , 
            email : "shyam@gmail.com" ,
            password : "password" , 
        })
        await newUser.save();
        res.status(200).json({
            newUser ,
            message : "User has been registered Successfully"
        })
    } catch (error) {
        res.status(500).json({
            error :  error ,
            message :"Error registering new User to the DB"
        })
    } 
};