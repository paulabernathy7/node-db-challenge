// Update with your config settings.
//created using knex init

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: ""
    },
    useNullAsDefault: true
  },
  migrations: {
    tableName: "knex_migrations"
  }
};
