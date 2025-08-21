const mongoose = require('mongoose');
const express = require('express');
const Blog = require('../models.js/Blog');
const User = require('../models.js/User');

module.exports.postAddBlog = async (req, res) => {
    try {
        let title = req.body.title;
        let body = req.body.body;
        let userId = req.body.userId;
        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        let blog = {
            title: title,
            content: body,
            date: Date.now(),
            author: userId
        }
        blog = new Blog(req.body);
        await blog.save();

        user.blogs.push(blog._id);
        await user.save();
        res.status(201).json(blog);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}
module.exports.deleteOneBlog=async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) return res.status(404).json({ message: 'Blog not found' });

        res.json({ message: 'Blog deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports.getAllBlogs=async (req, res) => {
    try {
        const blogs = await Blog.find().populate('author', 'name email');
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
module.exports.getBlogById=async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id).populate('author', 'name email');
        if (!blog) return res.status(404).json({ message: 'Blog not found' });
        res.json(blog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}