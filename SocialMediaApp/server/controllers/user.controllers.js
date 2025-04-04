import { updateUser , deleteUser } from "../services/user.service.js";

export const updateUserController = async (req , res) => {
    try {
        const user  = await updateUser(req.params.id , req.body);
        res.status(200).json({
            user,
            message: "Account has been updated Successfully!"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


export const deleteUserController = async (req, res) => {
    try {
        const user = await deleteUser(req.params.id);
        res.status(200).json({
            user ,
            message: "Account has been deleted Successfully!"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

export const getUserController = async (req, res) => {
    try {
        const user = await getUser(req.params.id);
        res.status(200).json({
            user ,
            message: "Account has been found Successfully!"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
