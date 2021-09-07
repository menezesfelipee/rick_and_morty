const router = require("express").Router();
const { getCharacters } = require("../database");

router.use((req, res, next) => next());

router.get("/", async (req, res) => {
    res.send(await getCharacters());
});

module.exports = router;