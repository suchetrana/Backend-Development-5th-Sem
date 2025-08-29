const express = require('express');
const Blog = require('../models/blog');
const User = require('../models/user');
const isLogin = require('../middleware/isLogin');

const router = express.Router();

// CREATE Blog
router.post("/", isLogin, async (req, res) => {
  try {
    const { title, body } = req.body;
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) return res.json({ success: false, message: "Invalid user" });

    const blog = new Blog({ title, body, date: Date.now(), userId });
    await blog.save();

    user.blogs.push(blog._id);
    await user.save();

    res.json({ success: true, message: "Blog added successfully", data: blog });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE Blog
router.delete("/:blogId", async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const userId = req.body.userId;

    const blogExist = await Blog.findById(blogId);
    if (!blogExist) return res.json({ success: false, message: "Blog does not exist" });

    if (blogExist.userId != userId) {
      return res.json({ success: false, message: "Permission denied" });
    }

    await Blog.findByIdAndDelete(blogId);
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET all blogs
router.get("/", async (req, res) => {
  const allBlogs = await Blog.find();
  res.json({ success: true, message: "All blogs fetched successfully", data: allBlogs });
});

// GET blog by ID
router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json({ success: true, message: "Blog fetched successfully", data: blog });
});

module.exports = router;
