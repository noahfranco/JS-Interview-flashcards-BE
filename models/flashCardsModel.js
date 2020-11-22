const db = require("../config/dbConfig");

const find = () => {
    return db("flashcards");
}

const add = (qa) => {
    return db("flashcards").insert(qa);
}

const edit = (id, event) => {
    return db("flashcards").where({id}).update(event)
}

module.exports  = {
    add, 
    find, 
    edit
}

