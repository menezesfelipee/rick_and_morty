const express = require("express");
// Importa a conexão com o MongoDB Atlas
const { connectDB } = require("./database");
const cors = require("cors");

// Importando todas as rotas do arquivo ./routes/index.js
const { home, getAll, getById, post, put, del } = require("./routes");

// Intanciando o express
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// Rodando o servidor
(async () => {

    // Aguardando a conexão com o MongoDB Atlas
    await connectDB();

    // Liberando Cors
    app.use(cors());
    app.options("*", cors());

    // Consumo das rotas
    app.use("/home", home);
    app.use("/characters", getAll);
    app.use("/characters/", getById);
    app.use("/characters/insert", post);
    app.use("/characters/update/", put);
    app.use("/characters/delete/", del);

    app.listen(port, () => console.log(`Aplicativo rodando em http://localhost:${port}.`));

})();