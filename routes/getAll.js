const router = require("express").Router();
const { getCharacters } = require("../database");

router.use((req, res, next) => next());

router.get("/", async (req, res) => {
    const characters = await getCharacters();
    
    res.status(200).send(characters);
});

module.exports = router;