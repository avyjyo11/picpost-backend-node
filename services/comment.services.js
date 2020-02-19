const userQuery = require("../queries/user.query");
const commentQuery = require("../queries/comment.query");

exports.addComment = async data => {
  try {
    const user = await userQuery.findById(data.userid);
    const newData = {
      postid: data.postid,
      username: user.username,
      comment: data.comment
    };
    const result = await commentQuery.create(newData);
    return result;
  } catch (err) {
    throw err;
  }
};

exports.findComments = async post_id => {
  try {
    const result = await commentQuery.find({ postid: post_id });
    return result;
  } catch (err) {
    throw err;
  }
};
