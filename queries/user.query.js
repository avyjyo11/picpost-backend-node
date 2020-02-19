const User = require("../models/User");

exports.find = (data = {}) => {
  if (data === {}) {
    return User.find();
  } else {
    return User.find(data);
  }
};

exports.findOne = (data = {}) => {
  return User.findOne(data);
};

exports.findById = id => {
  return User.findById(id);
};

exports.create = async data => {
  try {
    const user = new User(data);
    const res = await user.save();
    return res;
  } catch (err) {
    throw err;
  }
};

exports.update = async (id, data) => {
  try {
    const res = await User.findByIdAndUpdate(id, data);
    return res;
  } catch (err) {
    throw err;
  }
};

exports.delete = data => {};
