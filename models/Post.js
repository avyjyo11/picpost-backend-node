// const Sequelize = require("sequelize");
const mongoose = require("../utils/dbconnect");
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
  image: String,
  status: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  likeCount: {
    type: Number,
    default: Math.floor(Math.random() * (30 - 10 + 1) + 10)
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Post", postSchema);
