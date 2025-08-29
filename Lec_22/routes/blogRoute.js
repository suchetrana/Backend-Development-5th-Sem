const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const newUser = new User({ name, email, password, blogs: [] });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, "SECRET_KEY", { expiresIn: "1h" });

    res.json({
      success: true,
      message: "User added successfully",
      data: newUser,
      token
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
