// const Sequelize = require("sequelize");
const mongoose = require("../utils/dbconnect");
const User = require("./User");
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
  image: String,
  status: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: User
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Post", postSchema);
