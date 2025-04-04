import bcrypt from "bcrypt";
import UserModel from "../models/user.model.js";

export const updateUser = async (userId , updateData) => {
    if(updateData.password){
        try {
            updateData.password = await bcrypt.hashSync(updateData.password, 10);
        } catch (error) {
            throw error;
        }
    }
    try {
        const user = await UserModel.findByIdAndUpdate(userId, {
            $set:updateData ,
        }, {
            new : true ,
        });
        return user;
    } catch (error) {
        throw error;
    }
}

export const deleteUser = async (userId) => {
    try {
        await UserModel.findByIdAndDelete(userId);
    } catch (error) {
        throw error;
    }
}

export const getUser = async (userId) => {
    try {
        const user = await UserModel.findById(userId);
        return user;
    } catch (error) {
        throw error;
    }
}