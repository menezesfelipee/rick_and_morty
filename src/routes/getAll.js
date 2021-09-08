const router = require("express").Router();
const { connectDB, closeDB, getCharacters } = require("../database");

router.use((req, res, next) => next());

router.get("/", async (req, res) => {
    await connectDB();

    const characters = await getCharacters();
    
    await closeDB();
    
    res.status(200).send(characters);
});

module.exports = router;