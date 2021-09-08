module.exports = (req, res) => {
    res.status(404).send({ error: "Rota não encontrada." });
};