require("dotenv").config();
const express = require("express");
const path = require("path");
const helmet = require("helmet");
const morgan = require("morgan");
const expressLayouts = require("express-ejs-layouts");

const app = express();

// Security
app.use(helmet());

// Logging
app.use(morgan("dev"));

// Body parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, "public")));

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(expressLayouts);
app.set("layout", "layouts/main");

// Routes
app.use("/", require("./routes/home"));
app.use("/about", require("./routes/about"));
app.use("/skills", require("./routes/skills"));
app.use("/education", require("./routes/education"));
app.use("/projects", require("./routes/projects"));
app.use("/certifications",require("./routes/certifications"));
app.use("/contact", require("./routes/contact"));

// 404
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});