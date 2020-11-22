const express = require("express");
const helmet = require("helmet");
const cors = require("cors")

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

const flashCardsEndPoints = require("./endpoints/flashCards");
const users = require("./endpoints/auth/user");

// routs to endpoints in flashCards file
server.use("/api/flashcards", flashCardsEndPoints);
server.use("/api/users", users);

server.get("/", (req, res) => {
    res.status(200).json({ response: "We are good to go :)"});
})

module.exports = server;