
exports.up = function(knex, Promise) {
  return knex.schema.createTable("blogs", table =>  {
      table.increments();
      table.text("firstName");
      table.text("lastName");
      table.text("cohortID");
      table.text("post")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("blogs")
};
