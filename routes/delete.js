const { characters, ObjectId } = require("../database");

const router = require("express").Router();

router.use((req, res, next) => next());

router.delete("/:id", async (req, res) => {
    const { id } = req.params;

    // Validação de existência do personagem a ser alterado
    const isOnlyOne = await characters.countDocuments({ _id: ObjectId(id) });
    if (!isOnlyOne) {
        res.status(404).send({ error: "Personagem não encontrado." });
        return;
    };

    // Deleta o personagem
    await characters.deleteOne({ _id: ObjectId(id) });

    res.status(204).send({ message: "Deletado com sucesso!" });
});

module.exports = router;