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

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Projects.findById(id);

    if (project) {
      res.json(project);
    } else {
      res
        .status(404)
        .json({ message: "Could not find project with given id." });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to get projects" });
  }
});

router.get("/:id/resources", async (req, res) => {
  const { id } = req.params;

  try {
    const resources = await Projects.findResources(id);

    if (resources.length) {
      res.json(resources);
    } else {
      res
        .status(404)
        .json({ message: "Could not find resources for given project" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to get resources", error: err.message });
  }
});

router.get("/:id/tasks", async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Projects.findTask(id);

    if (task.length) {
      res.json(task);
    } else {
      res
        .status(404)
        .json({ message: "Could not find task for given project" });
    }
  } catch (err) {
    res.status(500).json({ message: "Failed to get task", error: err.message });
  }
});
module.exports = router;
