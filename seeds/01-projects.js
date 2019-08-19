exports.seed = function(knex, Promise) {
  return knex("projects").insert([
    {
      Project_Name: "node db challenge",
      Description: "sprint challenge",
      Completed: false
    },
    {
      Project_Name: "Negotiation",
      Completed: false
    }
  ]);
};
