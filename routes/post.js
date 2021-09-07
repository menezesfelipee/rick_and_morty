const router = require("express").Router();
const { characters } = require("../database");

router.use((req, res, next) => next());

router.post("/", async (req, res) => {
    const obj = req.body;

    // Validação do personagem enviado
    if (!obj || !obj.name || !obj.imgUrl) {
        res.status(400).send({ error: "Campos preenchidos incorretamente." });
        return;
    };

    // Insere o personagem
    await characters.insertOne(obj);
    
    res.send(obj);
});

module.exports = router;