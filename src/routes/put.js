const router = require("express").Router();
const { characters, connectDB, closeDB, getCharacterById, ObjectId } = require("../database");

router.use((req, res, next) => next());

router.put("/:id", async (req, res) => {
  await connectDB();

  const { id } = req.params;
  const obj = req.body;

  // Validação de existência do personagem a ser alterado
  const isOnlyOne = await characters.countDocuments({ _id: ObjectId(id) });
  if (!isOnlyOne) {
    res.status(404).send({ error: "Personagem não encontrado." });
    return;
  }

  // Validação do personagem enviado
  if (!obj || !obj.nome || !obj.imagemUrl) {
    res.status(400).send({ error: "Campos preenchidos incorretamente." });
    return;
  }

  // Atualiza o personagem
  await characters.updateOne({ _id: ObjectId(id) }, { $set: obj });
  const newObj = await getCharacterById(id);

  await closeDB();

  res.status(200).send(newObj);
});

module.exports = router;
