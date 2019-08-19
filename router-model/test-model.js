const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findResources,
  findTask,
  addProject,
  addResources,
  addTask
};

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function findResources(id) {
  return db("resources as r")
    .join("projects as p", "p.id", "r.id")
    .where("p.id", id);
}

function findTask(id) {
  return db("tasks as t")
    .join("projects as p", "p.id", "t.id")
    .select("t.id", "p.project_name", "p.Description")

    .where("p.id", id);
}

async function addProject(project) {
  const [id] = await db("projects").insert(project);
  return findById(id);
}

async function addResources(resources) {
  const [id] = await db("resources").insert(resources);
  return findById(id);
}

async function addTask(task) {
  const [id] = await db("tasks").insert(task);
  return findById(id);
}
