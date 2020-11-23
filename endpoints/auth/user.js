const router = require("express").Router();
const bcrypt = require("bcrypt");
const getToken = require("../../token");

const userModel = require("../../models/usersModels");

// registers users
// http://localhost:3333/api/users/register
router.post("/register", async (req, res) => {
    try {
        let newUser = req.body
        const salt = bcrypt.genSaltSync(5)
        let hash = bcrypt.hashSync(newUser.password, salt)
        console.log({hash})
        newUser.password = hash
        console.log("loging password", newUser.password)
        
        const user = await userModel.add(newUser)
        res.status(200).json(user)
    } catch(error) {
        res.status(500).json({error: "Internal Server Error"}, error.message) 
    }
})

// http://localhost:3333/api/users/view
router.get("/view", async (req, res) => {
    try {
        const getUser = await userModel.findUser()
        res.status(200).json(getUser)
    } catch(error) {
        res.status(500).json({error: "Internal Server Error"}, error.message)
    }
})

// login user
// http://localhost:3333/api/users/login
router.post("/login", (req, res) => {
    try {
        let {email, password} = req.body
        userModel.findById({email}).then((user) => {
               if (user && bcrypt.compareSync(password, user.password)) {
                   const token = getToken(user)
                   res.status(200).json({message: `Welcome ${user.username}`, token})
               }
        }) .catch((error) => {
            res.status(401).json({error: "Please Provide Credentails"}, error.message)
        })
    
    } catch(error) {
        res.status(500).json("Internal Server Error")
    }
})

module.exports = router