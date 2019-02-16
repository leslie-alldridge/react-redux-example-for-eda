const db = require("./connection");

// get all cats from DB
function getAll() {
  return db("cats").select();
}

//get one cat by ID from db
function getOne(id) {
  return db("cats")
    .where({ id })
    .first();
}

//save a new cat, cat is an object so I can insert directly
function saveOne(cat) {
  return db("cats")
    .insert(cat)
    .then(data => {
      // bring some data back otherwise 'data' logs as the ID of our newly saved cat
      return db("cats").select();
    });
}

//delete cat by ID
function deleteOne(id) {
  return db("cats")
    .where({ id })
    .del()
    .then(data => {
      // the data callback here doesn't return any cats as we've deleted the cat. So returning whole DB.
      return db("cats").select();
    });
}

//edit cat (cat data here includes everything we need to edit). Tip: you need the ID of cat to update otherwise
//we have no idea which cat we're updating.
function editOne(cat) {
  return db("cats")
    .where({ id: cat.id }) // find the cat to update
    .update({ name: cat.name, location: cat.location, age: cat.age }) //change the cat info to the new stuff
    .then(data => {
      return db("cats").where({ id: cat.id }); //return the cat we updated
    });
}

module.exports = {
  getAll,
  getOne,
  saveOne,
  deleteOne,
  editOne
};
