exports.seed = function(knex, Promise) {
  return knex("Resources").insert([
    {
      Resource_Name: "Computer"
    },
    {
      Resource_Name: "internet"
    }
  ]);
};
