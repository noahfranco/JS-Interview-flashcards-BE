const db = require("../config/dbConfig");

const findUser = () => {
    return db("users");
}

const addUser = (user) => {
    return db("users").insert(user);
}

const findById = (id) => {
    return db("users").where(id).first()
}

module.exports = {
    findUser,
    addUser,
    findById
}