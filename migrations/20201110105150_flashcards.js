
exports.up = function(knex) {
    return knex.schema.createTable("flashcards", tbl => {
      tbl.increments();
  
      tbl.string("question", 255).notNullable();
      tbl.text("answer").notNullable();
      tbl.integer("esay");
      tbl.integer("medium");
      tbl.integer("hard"); 
    })
    .createTable("users", tbl => {
      tbl.increments();

      tbl.string("username", 20);
      tbl.string("email", 25)
      tbl.string("password", 255);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("flashcards");
  };
  
