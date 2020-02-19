const postQuery = require("../queries/post.query");

exports.addPost = async data => {
  try {
    const result = await postQuery.create(data);
    return result;
  } catch (err) {
    throw err;
  }
};

exports.findPost = async data => {
  try {
    const result = await postQuery.find(data);
    return result;
  } catch (err) {
    throw err;
  }
};

exports.findPostById = async id => {
  try {
    const result = await postQuery.findById(id);
    return result;
  } catch (err) {
    throw err;
  }
};

exports.deletePost = async id => {
  try {
    const result = await postQuery.deleteById(id);
    return result;
  } catch (err) {
    throw err;
  }
};

exports.updatePost = async (id, data) => {
  try {
    console.log("service > ", id, data);
    const result = await postQuery.update(id, data);
    return result;
  } catch (err) {
    throw err;
  }
};


