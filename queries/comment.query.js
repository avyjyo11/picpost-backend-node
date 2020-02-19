const Comment = require("../models/Comment");

exports.find = (data = {}) => {
  if (data === {}) {
    return Comment.find().populate("post");
  } else {
    return Comment.find(data).populate("post");
  }
};

exports.findOne = (data = {}) => {
  return Comment.findOne(data).populate("user");
};

exports.create = async data => {
  try {
    const comment = new Comment(data);
    const res = await comment.save();
    return res;
  } catch (err) {
    throw err;
  }
};

exports.update = data => {};

exports.delete = data => {};
