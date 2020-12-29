
exports.up = function(knex) {
    return knex.schema.createTable("flashcards", tbl => {
      tbl.increments();
  
      tbl.string("question", 255).notNullable();
      tbl.text("answer").notNullable();
      tbl.integer("esay");
      tbl.integer("medium");
      tbl.integer("hard"); 
      tbl.integer("users_id")
    })
    .createTable("users", tbl => {
      tbl.increments();

      tbl.string("username", 20).notNullable();
      tbl.string("email", 25).notNullable();
      tbl.string("password", 255).notNullable();
      tbl.string("usernameError", 255);
      tbl.string("emailError", 255);
      tbl.string("passwordError", 255);
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("flashcards");
  };
  
