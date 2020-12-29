const db = require("../config/dbConfig");

const find = () => {
    return db("flashcards");
}

const add = (qa) => {
    return db("flashcards").insert(qa);
}

const edit = (id, event) => {
    return db("flashcards").where({id}).update(event);
}

const remove = (id) => {
    return db("flashcards").where({id}).delete()
}


module.exports = {
    add, 
    find, 
    edit,
    remove
}

