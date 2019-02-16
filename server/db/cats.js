const db = require("./connection");

function getAll() {
  return db("cats").select();
}

function getOne(id) {
  return db("cats")
    .where({ id })
    .first();
}

function saveOne(cat) {
  return db("cats")
    .insert(cat)
    .then(data => {
      return db("cats").where({ id: data[0] });
    });
}

module.exports = {
  getAll,
  getOne,
  saveOne
};
