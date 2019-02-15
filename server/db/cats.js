const db = require("./connection");

function getAll() {
  return db("cats").select();
}

function getUserByName(user_name) {
  return db("users")
    .where("user_name", user_name)
    .first();
}

module.exports = {
  getAll,
  getUserByName
};
