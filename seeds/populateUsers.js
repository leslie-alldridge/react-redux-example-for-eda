exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cats")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cats").insert([
        {
          id: 1,
          name: "bella",
          location: "wellington",
          age: 5
        },
        {
          id: 2,
          name: "fluffy",
          location: "wellington",
          age: 6
        },
        {
          id: 3,
          name: "leslie",
          location: "wellington",
          age: 2
        }
      ]);
    });
};
