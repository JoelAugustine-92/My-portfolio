const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("pages/contact", {
    title: "Contact",
    active: "contact"
  });
});

module.exports = router;