const router = require("express").Router();
const bcrypt = require("bcrypt");
const getToken = require("../../token");

// import models here for get logic

// registers users
// http://localhost:3333/api/users/register
router.post("/register", async (req, res) => {
    console.log("hello from user post")
})

module.exports = router