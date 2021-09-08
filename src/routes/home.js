const router = require("express").Router();

router.use((req, res, next) => next());

router.get("/", (req, res) => {
    const welcome = {
        API: "Rick and Morty",
        Objetivo: "Avaliação do Modúlo 3 da Blue EdTech",
        "O que fazer na API": {
            GET: [
                "Listar todos os personagens",
                "Mostrar um único personagem a partir do ID"
            ],
            POST: "Adicionar um personagem",
            PUT: "Alterar todos os campos de um personagem, buscando pelo ID",
            DELETE: "Excluir um personage a partir do ID"
        },
        Links: {
            "Listar Todos": "https://rickandmorty-back.herokuapp.com/characters",
            "Mostrar um": "https://rickandmorty-back.herokuapp.com/characters/ + _id",
            "Adicionar": "https://rickandmorty-back.herokuapp.com/characters/insert",
            "Alterar": "https://rickandmorty-back.herokuapp.com/characters/update/ + _id",
            "Excluir": "https://rickandmorty-back.herokuapp.com/characters/delete/ + _id"
        }
    }
    res.status(200).send(welcome);
});

module.exports = router;