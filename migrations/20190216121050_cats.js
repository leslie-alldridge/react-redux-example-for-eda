// knex migrations to build our database

exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("cats", table => {
    table.increments("id");
    table.string("name");
    table.string("location");
    table.integer("age");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("cats");
};
