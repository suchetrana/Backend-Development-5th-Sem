const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;
const blogPost = new Schema({
    title: String,
    body: String,
    date: Date,
    blogs:{
        type:mongoose.Types.ObjectId
    }
})