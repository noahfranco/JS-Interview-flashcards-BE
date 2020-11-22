const db = require("../config/dbConfig");

const findUser = () => {
    return db("users");
}


const add = (qa) => {
    return db("users").insert(qa);
}

const findById = (id) => {
    return db("users").where(id).first();
}

module.exports = {
    findUser,
    add,
    findById
}