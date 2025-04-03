import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("These are the test Users");
});

export default router;
