const router = require("express").Router();
const db = require("../db/cats");

router.get("/", (req, res) => {
  db.getAll().then(cats => res.json(cats));
});

router.get("/:id", (req, res) => {
  db.getOne(req.params.id).then(cats => res.json([cats]));
});

router.delete("/delete/:id", (req, res) => {
  db.deleteOne(req.params.id).then(cats => res.json(cats));
});

router.post("/save", (req, res) => {
  db.saveOne(req.body).then(cats => res.json(cats));
});

router.post("/edit/:id", (req, res) => {
  console.log(req.body);
  db.editOne(req.body).then(cats => res.json(cats));
});

module.exports = router;
