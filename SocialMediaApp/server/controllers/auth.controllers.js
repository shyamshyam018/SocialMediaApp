import { registerUser , loginUser } from "../services/auth.service.js";

// Register User
export const register = async (req,res) => {
    try {
        const newUser = await registerUser(req.body);
        const {password, ...data} = newUser._doc;
        res.status(200).json({
            data ,
            message : "User has been registered Successfully"
        })
    } catch (error) {
        res.status(500).json({
            error :  error ,
            message :"Error registering new User to the DB"
        })
    } 
};

export const login = async (req,res) => {
    try {
       const loggedInUser = await loginUser(req.body);
       const {password, ...data} = loggedInUser._doc;
       res.status(200).json({
        message:"Logged in Successfully!",
        data ,
       });
    } catch (error) {
        res.status(500).json({
            error :  error.message ,
            message :"Error Logging User"
        })
    } 
}