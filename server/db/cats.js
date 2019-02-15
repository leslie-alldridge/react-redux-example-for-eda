const db = require("./connection");

function getAll() {
  return db("cats").select();
}

function getOne(id) {
  console.log(id);

  return db("cats")
    .where({ id })
    .first();
}

module.exports = {
  getAll,
  getOne
};
