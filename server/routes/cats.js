const router = require("express").Router();
const db = require("../db/cats");

router.get("/", (req, res) => {
  db.getAll().then(cats => res.json(cats));
});

router.get("/:id", (req, res) => {
  db.getOne(req.params.id).then(cats => res.json([cats]));
});

// router.post("/:id", (req, res) => {
//   db.editOne(req.params.id, req.body.data).then(cats => res.json([cats]));
// });

router.post("/save", (req, res) => {
  db.saveOne(req.body).then(cats => res.json(cats));
});

module.exports = router;
