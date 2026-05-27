const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("pages/certifications", {
        title: "Certifications",
        active: "certifications"
    });
});

module.exports = router;