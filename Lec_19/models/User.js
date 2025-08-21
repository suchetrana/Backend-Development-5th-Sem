const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }]
});

module.exports = mongoose.model('User', userSchema);