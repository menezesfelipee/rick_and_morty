const router = require("express").Router();
const { characters } = require("../database");

router.use((req, res, next) => next());

router.post("/", async (req, res) => {
    const obj = req.body;
    await characters.insertOne(obj);
    res.send(obj);
});

module.exports = router;