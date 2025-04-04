import express from "express";
import { updateUserController , deleteUserController , getUserController } from "../controllers/user.controllers.js";

const router = express.Router();

// update the user 
router.put("/:id",updateUserController);
// delete the user
router.delete("/:id",deleteUserController);
// get the user
router.get("/:id", getUserController);
export default router;
