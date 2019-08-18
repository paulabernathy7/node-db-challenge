exports.seed = function(knex, Promise) {
  return knex("Tasks").insert([
    {
      Project_id: 1,
      Description: "same as task 1",
      Completed: 0
    },
    {
      Project_id: 2,
      Description: "same as task 2",
      Completed: 0
    }
  ]);
};
