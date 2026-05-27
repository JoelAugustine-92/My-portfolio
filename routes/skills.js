const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/skills", {
    title: "Skills",
    active: "skills"
  });
});

module.exports = router;