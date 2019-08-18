const cleaner = require("knex-cleaner");

exports.seed = async function(knex) {
  try {
    await knex.truncate("project_resources");
    await knex.truncate("Tasks");
    await knex.truncate("Resources");
    await knex.truncate("Projects");
  } catch (err) {
    console.log(err);
  }
};
