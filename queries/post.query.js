const Post = require("../models/Post");

exports.find = (data = {}) => {
  if (data === {}) {
    return Post.find()
      .sort({ createdAt: -1 })
      .populate("user");
  } else {
    return Post.find(data)
      .sort({ createdAt: -1 })
      .populate("user");
  }
};

exports.findOne = (data = {}) => {
  return Post.findOne(data).populate("user");
};

exports.findById = id => {
  return Post.findById(id);
};

exports.create = async data => {
  try {
    const post = new Post(data);
    const res = await post.save();
    return res;
  } catch (err) {
    throw err;
  }
};

exports.deleteById = id => {
  return Post.findByIdAndDelete(id);
};

exports.update = async (id, data) => {
  try {
    console.log("query >", id, data);
    const res = await Post.findByIdAndUpdate(id, data);
    return res;
  } catch (err) {
    throw err;
  }
};

exports.delete = data => {};
