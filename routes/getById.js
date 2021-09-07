const router = require("express").Router();
const { getCharacterById } = require("../database");

router.use((req, res, next) => next());

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const character = await getCharacterById(id);
    res.send(character);
});

module.exports = router;
