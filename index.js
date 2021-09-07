const express = require("express");
const { connectDB } = require("./database"); // Importa a conexão com o Atlas
const cors = require("cors");

// Importando todas as rotas do arquivo ./routes/index.js
const { home, getAll, getById, post, put, del } = require("./routes");

// Intanciando o express
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

(async () => {

    await connectDB();

    app.use(cors());
    app.options("*", cors());

    app.use("/home", home);
    app.use("/characters", getAll);
    app.use("/characters/", getById);
    app.use("/characters/insert", post);
    app.use("/characters/update/", put);
    app.use("/characters/delete/", del);

    app.listen(port, () => console.log(`Aplicativo rodando em http://localhost:${port}.`));

})();