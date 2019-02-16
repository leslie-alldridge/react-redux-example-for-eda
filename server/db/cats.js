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

function deleteOne(id) {
  return db("cats")
    .where({ id })
    .del()
    .then(data => {
      return db("cats").select();
    });
}

function editOne(cat) {
  return db("cats")
    .where({ id: cat.id })
    .update({ name: cat.name, location: cat.location, age: cat.age })
    .then(data => {
      return db("cats").where({ id: cat.id });
    });
}

module.exports = {
  getAll,
  getOne,
  saveOne,
  deleteOne,
  editOne
};
