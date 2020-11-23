const jwt = require("jsonwebtoken");
const secrets = require("./config/secrest");

const token = (users) => {
   const payload = {
    username: users.username, 
    id: users.id
   }
   
   return jwt.sign(payload, secrets.jwtSecret)
}

module.exports = token