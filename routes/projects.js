const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/projects", {
    title: "Projects",
    active: "projects"
  });
});

module.exports = router;