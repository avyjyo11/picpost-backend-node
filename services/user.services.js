const userQuery = require("../queries/user.query");

exports.findUsers = async data => {
  try {
    const result = await userQuery.find(data);
    return result;
  } catch (err) {
    throw err;
  }
};

exports.findById = async id => {
  try {
    const result = await userQuery.findById(id);
    return result;
  } catch (err) {
    throw err;
  }
};

exports.findByIdAndPopulate = async id => {
  try {
    const result = await userQuery.findById(id, true);
    return result;
  } catch (err) {
    throw err;
  }
};

exports.findByIdAndUpdate = async (id, data) => {
  try {
    const result = await userQuery.update(id, data);
    return result;
  } catch (err) {
    throw err;
  }
};
