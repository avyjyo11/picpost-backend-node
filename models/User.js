// const Sequelize = require("sequelize");
const mongoose = require("../utils/dbconnect");
const Schema = mongoose.Schema;
const Post = require("./Post");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, min: 3, unique: true },
  email: String,
  password: String,
  address: String,
  bio: String,
  likedPosts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
