exports.up = function(knex) {
  return knex.schema
    .createTable("Projects", tbl => {
      tbl.increments();
      tbl
        .text("Project_Name", 128)
        .notNullable()
        .unique();
      tbl.text("Description");
      tbl.boolean("Completed").notNullable;
    })

    .createTable("Resources", tbl => {
      tbl.increments();
      tbl
        .text("Resource_Name", 128)
        .unique()
        .notNullable();
      tbl.text("Description");
    })

    .createTable("Tasks", tbl => {
      tbl.increments();
      tbl
        .integer("Project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Projects");
      tbl.text("Description").notNullable();
      tbl.text("Notes");
      tbl.boolean("Completed").notNullable();
    })

    .createTable("project_resources", tbl => {
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("projects.id");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resources.id");
      tbl.primary(["project_id", "resource_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("Tasks")
    .dropTableIfExists("Resources")
    .dropTableIfExists("Projects");
};
