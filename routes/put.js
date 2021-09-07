const router = require("express").Router();
const { characters, getCharactersById, ObjectId } = require("../database");

router.use((req, res, next) => next());

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const obj = req.body;
    await characters.updateOne(
        {
            _id: ObjectId(id)
        },
        {
            $set: obj
        }
    );
    res.send(await getCharactersById(id));
});

module.exports = router;