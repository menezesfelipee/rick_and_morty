const router = require("express").Router();
const { connectDB, closeDB, getCharacterById } = require("../database");

router.use((req, res, next) => next());

router.get("/:id", async (req, res) => {
    await connectDB();

    const { id } = req.params;
    const character = await getCharacterById(id);
    
    // Validação de existência do personagem
    if (!character) {
        res.status(404).send({ error: "Personagem não encontrado." });
        return;
    };

    await closeDB();

    res.status(200).send(character);
});

module.exports = router;
