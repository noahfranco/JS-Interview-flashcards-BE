const router = require('express').Router()

const flashCardModels = require("../models/flashCardsModel");
const authenticate = require("../middleware/authenticate");


// http://localhost:3333/api/flashcards/post
router.post("/post", async (req, res) => {
    try {
        const cardBody = req.body;
        const postFlashCards = await flashCardModels.add(cardBody);
        res.status(200).json(postFlashCards) 
    } catch(error) {
        res.status(500).json({error: "not posting"}, error.message)
    }
})

// http://localhost:3333/api/flashcards/get
router.get("/get", authenticate, async (req, res) => {
    try {
        const getFlashCards = await flashCardModels.find();
        res.status(200).json(getFlashCards);
    } catch(error) {
        res.status(500).json({error: error});
    }
})

// http://localhost:3333/api/flashcards/put
router.put("/put", authenticate, async (req, res) => {
    try {
        const {id} = req.body
        const event = req.body
        const editFlashCard = await flashCardModels.edit(id, event)
        res.status(200).json(editFlashCard)
    } catch(error) {
        res.status(500).json({error: "Internal Server Error"}, error.message)
    }
})


module.exports = router;