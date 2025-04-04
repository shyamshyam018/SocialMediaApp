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

// export const followUser = async (userData, updateData) => {
//     if (userData.userId === updateData.id) {
//         throw new Error("You cannot follow yourself");
//     }

//     try {
//         const userToFollow = await UserModel.findById(updateData.id);
//         const currentUser = await UserModel.findById(userData.userId);

//         if (!userToFollow || !currentUser) {
//             throw new Error("User not found!");
//         }

//         if (!userToFollow.followers.includes(userData.userId)) {
//             await userToFollow.updateOne({ $push: { followers: userData.userId } });
//             await currentUser.updateOne({ $push: { followings: updateData.id } });
//             return { message: "User followed successfully", userToFollow, currentUser };
//         } else {
//             throw new Error("You are already following this user!");
//         }
//     } catch (error) {
//         throw error;
//     }
// };

// export const unfollowUser = async (userData, updateData) => {
//     if (userData.userId === updateData.id) {
//         throw new Error("You cannot unfollow yourself");
//     }

//     try {
//         const userToUnfollow = await UserModel.findById(updateData.id);
//         const currentUser = await UserModel.findById(userData.userId);

//         if (!userToUnfollow || !currentUser) {
//             throw new Error("User not found!");
//         }

//         if (userToUnfollow.followers.includes(userData.userId)) {
//             await userToUnfollow.updateOne({ $pull: { followers: userData.userId } });
//             await currentUser.updateOne({ $pull: { followings: updateData.id } });
//             return { message: "User unfollowed successfully", userToUnfollow, currentUser };
//         } else {
//             throw new Error("You do not follow this user!");
//         }
//     } catch (error) {
//         throw error;
//     }
// };
