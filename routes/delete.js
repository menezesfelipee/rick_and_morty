const { characters, ObjectId } = require("../database");

const router = require("express").Router();

router.use((req, res, next) => next());

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    await characters.deleteOne({ _id: ObjectId(id) });
    res.send({ mensagem: "Deletado com sucesso!" });
});

module.exports = router;