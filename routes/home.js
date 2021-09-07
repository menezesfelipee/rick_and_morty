const router = require("express").Router();

router.use((req, res, next) => next());

router.get("/", (req, res) => {
    res.send({ mensagem: "Olá mundo!" });
});

module.exports = router;