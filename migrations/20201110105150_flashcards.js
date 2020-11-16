
exports.up = function(knex) {
    return knex.schema.createTable("flashcards", tbl => {
      tbl.increments();
  
      tbl.string("question", 255).notNullable();
      tbl.text("answer").notNullable();
      tbl.integer("esay");
      tbl.integer("medium");
      tbl.integer("hard"); 
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("flashcards");
  };
  
