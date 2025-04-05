import { getTimeLinePosts , createPost, updatePost , deletePost , likeAndDislike , getPost} from "../services/post.service.js";

export const createPostController =  async (req,res) => {
    try {
        const newPost = await createPost(req.body);
        res.status(200).json({
            newPost , 
            message : "Post has been created Successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Post creation failed",
            error,
        });
    }
};

export const updatePostController = async (req, res) => {
    try {
      const updatedPost = await updatePost(req.params, req.body);
      res.status(200).json({
        updatedPost , 
        message : "Post has been updated Successfully",
      });
      return updatedPost;
    }catch(error){
        console.log(error);
        res.status(500).json({
            message : "Post update failed",
            error ,
        });
    }
};

export const deletePostController = async (req, res) => {
    try {
      const deletedPost = await deletePost(req.params, req.body);
      res.status(200).json({
        deletedPost , 
        message : "Post has been deleted Successfully",
      });
      return deletedPost;
    }catch(error){
        console.log(error);
        res.status(500).json({
            message : "Post delete failed",
            error ,
        });
    }
};

export const likeAndDislikeController = async (req, res) => {
    try {
      const post = await likeAndDislike(req.params, req.body);
      res.status(200).json({
        post , 
        message : "Post action has been completed !",
      });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message : "Post like / Dislike failed",
            error ,
        });
    }
};

export const getPostController = async (req, res) => {
    try {
      const post = await getPost(req.params);
      res.status(200).json({
        post , 
        message : "Post has been fetched successfully !",
      });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message : "Post fetch failed",
            error ,
        });
    }
};

export const getTimeLinePostsController = async (req, res) => {
  try {
    const userId = req.query.userId;

    if (!userId) {
      return res.status(400).json({ message: "userId is required in query" });
    }

    const timelinePosts = await getTimeLinePosts(userId);
    res.status(200).json({
      timelinePosts,
      message: "Timeline posts fetched successfully!",
    });
  } catch (error) {
    res.status(500).json({
      message: "Timeline posts fetch failed",
      error: error.message,
    });
  }
};

