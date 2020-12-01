const db = require("../config/dbConfig");

const findUser = () => {
    return db("users");
}


const add = (user) => {
    return db("users").insert(user);
}

// used to find specific user
const findById = (id) => {
    return db("users").where({id}).first();
}

// create a new Model for login
const loginFindById = (id) => {
    return db("users").where(id).first();
} 


module.exports = {
    findUser,
    add,
    findById,
    loginFindById
}