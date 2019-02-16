const router = require("express").Router();
const db = require("../db/cats");

router.get("/", (req, res) => {
  db.getAll().then(cats => res.json(cats));
});

router.get("/:id", (req, res) => {
  //req.params.id will get the ID from our route above ^
  db.getOne(req.params.id).then(cats => res.json([cats]));
});

router.delete("/delete/:id", (req, res) => {
  db.deleteOne(req.params.id).then(cats => res.json(cats));
});

router.post("/save", (req, res) => {
  //our req.body includes all of the cat info we want to save in an Object
  //if it wasn't already in an object, we'd need to make one like const cat = {req.body.name, req.body.id} etc..
  db.saveOne(req.body).then(cats => res.json(cats));
});

router.post("/edit/:id", (req, res) => {
  db.editOne(req.body).then(cats => res.json(cats));
});

module.exports = router;
