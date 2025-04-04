import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

// Register User
export const registerUser = async (body) => {
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = new UserModel({
        username: body.username,
        email: body.email,
        password: hashedPassword,
    });
    await newUser.save();
    return newUser;
};

// Login User
export const loginUser = async (body) => {
    const user = await UserModel.findOne({ email: body.email });
    if (!user) {
        throw new Error("User not Found!");
    }
    const passwordCheck = await bcrypt.compare(body.password, user.password);
    if (!passwordCheck) {
        throw new Error("Wrong Password!"); 
    }
    return user;
};
