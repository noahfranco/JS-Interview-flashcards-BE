const jwt = require("jsonwebtoken");
const secrests = require("./config/secrest");

const token = (users) => {
   const payload = {
    username: users.username, 
    id: users.id
   }
   
   return jwt.sign(payload, secrests.jwtSecret)
}

module.exports = token