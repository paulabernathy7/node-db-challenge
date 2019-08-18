const db = require("../data/db-config");

module.exports = {
  find
  //   findById,
  //   FindResources,
  //   FindTask,
  //   add
};

function find() {
  return db("projects");
}
