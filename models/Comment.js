// const Sequelize = require("sequelize");
const mongoose = require("../utils/dbconnect");
const User = require("./User");
const Post = require("./Post");
const Schema = mongoose.Schema;

const commentSchema = new mongoose.Schema({
  postid: {
    type: Schema.Types.ObjectId,
    ref: Post
  },
  username: String,
  comment: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Comment", commentSchema);
