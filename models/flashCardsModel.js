const db = require("../dbConfig");

const find = () => {
    return db("flashcards");
}

const add = (qa) => {
    return db("flashcards").insert(qa);
}

module.exports  = {
    add, 
    find
}

