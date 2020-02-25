const Comment = require("../models/Comment");

exports.find = (data = {}) => {
  if (data === {}) {
    return Comment.find().populate("postid");
  } else {
    return Comment.find(data).populate("postid");
  }
};

exports.findOne = (data = {}) => {
  return Comment.findOne(data).populate("postid");
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
