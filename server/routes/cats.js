const router = require("express").Router();
const db = require("../db/cats");

router.get("/", (req, res) => {
  db.getAll().then(cats => res.json(cats));
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);

  db.getOne(req.params.id).then(cats => res.json([cats]));
});

module.exports = router;
