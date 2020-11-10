const router = require('express').Router()

const flashCardModels = require("../models/flashCardsModel");


// http://localhost:3333/api/flashcards/post
router.post("/post", async (req, res) => {
    try {
        const cardBody = req.body;
        const postFlashCards = await flashCardModels.add(cardBody);
        res.status(200).json(postFlashCards) 
    } catch (error) {
        res.status(500).json({error: "not posting"}, error.message)
    }
})

// http://localhost:3333/api/flashcards/get
router.get("/get", async (req, res) => {
    try {
        const getFlashCards = await flashCardModels.find();
        res.status(200).json(getFlashCards);
    } catch(error) {
        res.status(500).json({error: error});
    }
})


module.exports = router;