import express from "express";
import { getTimeLinePostsController ,  likeAndDislikeController , createPostController, updatePostController , deletePostController, getPostController } from "../controllers/post.controllers.js";

const router = express.Router();
router.post("/create-post", createPostController);
router.put("/update-post/:id", updatePostController);
router.delete("/delete-post/:id", deletePostController);
router.put("/like-post/:id", likeAndDislikeController);
router.get("/get-post/:id", getPostController);
router.get("/get-timeline-post", getTimeLinePostsController);

export default router;
