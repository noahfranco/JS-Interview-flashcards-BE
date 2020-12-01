const db = require("../config/dbConfig");

const findUser = () => {
    return db("users");
}


const add = (user) => {
    return db("users").insert(user);
}

const findById = (id) => {
    return db("users").select("id", "username", "email").where({id}).first();
}

module.exports = {
    findUser,
    add,
    findById
}