import express from "express";
import userRoutes from "./user.route.js";
import authRoutes from "./auth.route.js";
const router = express.Router();
const baseURL = "api/v1";

router.use(`/${baseURL}/users`,userRoutes);
router.use(`/${baseURL}/auth`,authRoutes);

export { router as routes }