const express = require("express");

const Projects = require("./test-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await Projects.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to get schemes" });
  }
});

module.exports = router;
