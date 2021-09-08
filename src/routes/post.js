const router = require("express").Router();
const { connectDB, closeDB, characters } = require("../database");

router.use((req, res, next) => next());

router.post("/", async (req, res) => {
    await connectDB();

    const obj = req.body;
    
    // Validação do personagem enviado
    if (!obj || !obj.nome || !obj.imagemUrl) {
        res.status(400).send({ error: "Campos preenchidos incorretamente." });
        return;
    };
    
    // Insere o personagem
    await characters.insertOne(obj);

    await closeDB();
    
    res.status(201).send(obj);
});

module.exports = router;