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

export const followUser = async (userData, updateData) => {
    if (userData.userId === updateData.id) {
      throw new Error("You cannot follow yourself");
    }
  
    try {
      const follower = await UserModel.findById(userData.userId);      // Person initiating the follow
      const followed = await UserModel.findById(updateData.id);        // Person being followed
  
      if (!follower || !followed) {
        throw new Error("User not found!");
      }
  
      if (!followed.followers.includes(follower._id)) {
        await followed.updateOne({ $push: { followers: follower._id } });
        await follower.updateOne({ $push: { followings: followed._id } });
  
        return { message: "User followed successfully", followed, follower };
      } else {
        throw new Error("You are already following this user!");
      }
    } catch (error) {
      throw error;
    }
  };
  

  export const unfollowUser = async (userData, updateData) => {
    if (userData.userId === updateData.id) {
      throw new Error("You cannot unfollow yourself");
    }
  
    try {
      const follower = await UserModel.findById(userData.userId);      // Person initiating the unfollow
      const followed = await UserModel.findById(updateData.id);        // Person being unfollowed
  
      if (!follower || !followed) {
        throw new Error("User not found!");
      }
  
      if (followed.followers.includes(follower._id)) {
        await followed.updateOne({ $pull: { followers: follower._id } });
        await follower.updateOne({ $pull: { followings: followed._id } });
  
        return { message: "User unfollowed successfully", followed, follower };
      } else {
        throw new Error("You do not follow this user!");
      }
    } catch (error) {
      throw error;
    }
  };
  
