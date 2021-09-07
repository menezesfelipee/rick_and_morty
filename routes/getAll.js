const router = require("express").Router();
const { getCharacters } = require("../database");

router.use((req, res, next) => next());

router.get("/", async (req, res) => {
    const characters = await getCharacters();
    
    res.send(characters);
});

module.exports = router;