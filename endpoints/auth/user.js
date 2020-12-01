const router = require("express").Router();
const bcrypt = require("bcrypt");
const getToken = require("../../middleware/token");

const userModel = require("../../models/usersModels");
const authenticate = require("../../middleware/authenticate");

// registers users
// http://localhost:3333/api/users/register
router.post("/register", async (req, res) => {
    try {
        let newUser = req.body
        const salt = bcrypt.genSaltSync(5)
        let hash = bcrypt.hashSync(newUser.password, salt)
        console.log({hash})
        newUser.password = hash
        
        
        const user = await userModel.add(newUser)
        const token = getToken(user)
        res.status(200).json(token)
    } catch(error) {
        res.status(500).json({error: "Internal Server Error"}, error.message) 
    }
})

// http://localhost:3333/api/users/view
router.get("/view", authenticate, async (req, res) => {
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
        userModel.loginFindById({email}).then((user) => {
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

// returns the current user
// add authenticate to HTTP get request
// http://localhost:3333/api/users/:id
router.get("/:id", (req, res) => {
    const { id } =  req.params

    if(!id) {
        res.status(401).json({ error: "Bad Request"})
    } else {
        userModel.findById(id)
        .then(usersId => {
            console.log({usersId})
            res.status(200).json(usersId)
        })
        .catch(error => {
            console.log(error) 
            res.status(500).json({error: "Internal server error"})
        })
    }
})


module.exports = router