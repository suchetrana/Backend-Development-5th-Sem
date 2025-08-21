const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String },
    content: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date }
});

module.exports = mongoose.model('Blog', blogSchema);