const router = require("express").Router();
const { getCharacterById } = require("../database");

router.use((req, res, next) => next());

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const character = await getCharacterById(id);

    // Validação de existência do personagem
    if (!character) {
        res.status(404).send({ error: "Personagem não encontrado." });
        return;
    };

    res.status(200).send(character);
});

module.exports = router;
