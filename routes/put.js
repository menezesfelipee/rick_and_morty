const router = require("express").Router();
const { characters, getCharacterById, ObjectId } = require("../database");

router.use((req, res, next) => next());

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const obj = req.body;
    
    // Validação de existência do personagem a ser alterado
    const isOnlyOne = await characters.countDocuments({ _id: ObjectId(id) });
    if (!isOnlyOne) {
        res.status(404).send({ error: "Personagem não encontrado." });
        return;
    };
    
    // Validação do personagem enviado
    if (!obj || !obj.nome || !obj.imagemUrl) {
        res.status(400).send({ error: "Campos preenchidos incorretamente." });
        return;
    };
    
    // Atualiza o personagem
    await characters.updateOne(
        {
            _id: ObjectId(id)
        },
        {
            $set: obj
        }
    );

    res.status(200).send(await getCharacterById(id));
});

module.exports = router;