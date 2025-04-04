import { updateUser, deleteUser, getUser } from "../services/user.service.js";

export const updateUserController = async (req, res) => {
    try {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            const user = await updateUser(req.params.id, req.body);
            return res.status(200).json({
                user,
                message: "Account has been updated Successfully!"
            });
        } 
        return res.status(403).json({ message: "You can only update YOUR account!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const deleteUserController = async (req, res) => {
    try {
    
        if (req.user.id === req.params.id || req.user.isAdmin) {
            const user = await deleteUser(req.params.id);
            return res.status(200).json({
                user,
                message: "Account has been deleted Successfully!"
            });
        } 
        return res.status(403).json({ message: "You can only delete YOUR account!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

export const getUserController = async (req, res) => {
    try {
        
        if (req.user.id === req.params.id || req.user.isAdmin) {
            const user = await getUser(req.params.id);
            const { password, ...data } = user.toObject();
            return res.status(200).json({
                data,
                message: "Account has been found Successfully!"
            });
        } 
        return res.status(403).json({ message: "You can only view YOUR account!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
};

// export const followUserController = async (req, res) => {
//     try {
//         const data = await followUser(req.body, req.params);
//         return res.status(200).json({
//             data,
//             message: "Successfully followed the user!",
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: error.message });
//     }
// };

// export const unfollowUserController = async (req, res) => {
//     try {
//         const data = await unfollowUser(req.body, req.params);
//         return res.status(200).json({
//             data,
//             message: "Successfully unfollowed the user!",
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ error: error.message });
//     }
// };


