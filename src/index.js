require("dotenv").config();

const express = require("express");
const cors = require("cors");

// Importando biblioteca e funções de middlewares
require("express-async-errors");
const { notFound, serverError } = require("./middlewares");

// Importando todos os endpoints a partir do arquivo ./routes/index.js
const { home, getAll, getById, post, put, del } = require("./routes");

// Intanciando o express
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

// Liberando Cors
app.use(cors());
app.options("*", cors());

// Consumo das rotas
app.use("/", home);
app.use("/characters", getAll);
app.use("/characters/", getById);
app.use("/characters/insert", post);
app.use("/characters/update/", put);
app.use("/characters/delete/", del);

// Tratamento das rotas não encontradas
app.all("*", notFound);

// Middleware para tratamento de erros
app.use(serverError);

// Fazendo app rodar na porta especificada
app.listen(port, () =>
  console.log(`Aplicativo rodando em http://localhost:${port}.`)
);
