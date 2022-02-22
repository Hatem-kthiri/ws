const router = require("express").Router();
const Post = require("../models/Post");
const isAuth = require("../middlewares/isAuth");

router.post("/addPost", isAuth, async (req, res) => {
    try {
        const { title, postDescription, img } = req.body.newPost;
        const newPost = await Post.create({
            postAuthor: req.user._id,
            title,
            postDescription,
            img,
        });
        res.json({
            status: 201,
            msg: "Post Created Successfully",
            newPost,
        });
    } catch (err) {
        res.json({ status: 500, msg: `Problem with add Post ${err}` });
    }
});
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find({});
        res.json({
            status: true,
            msg: "Ok",
            posts,
        });
    } catch (err) {
        console.log(err);
        res.json({ status: 500, message: err });
    }
});

router.get("/getCurrentPosts", isAuth, async (req, res) => {
    try {
        const currentPosts = await Post.find({ postAuthor: req.user._id });
        res.json({
            status: true,
            msg: "posts imported successfully",
            currentPosts,
        });
    } catch (err) {
        console.log(err);
        res.json({ status: 500, message: err });
    }
});

router.delete("/deleteCurrentPosts/:id", isAuth, async (req, res) => {
    try {
        const { id } = req.params;
        const deletePost = await Post.findByIdAndDelete(id);
        res.json({
            status: true,
            msg: "post deleted successfully",
            deletePost,
        });
    } catch (err) {
        console.log(err);
        res.json({ status: 500, message: err });
    }
});

router.get("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const articles = await Article.find({
            postAuthor: id,
        }).populate("postAuthor", "userName  -_id");
        res.json({ status: 200, articles });
    } catch (err) {
        console.log(err);
        res.json({ status: 500, message: err });
    }
});

module.exports = router;
