const express = require("express");
const {connectDB,
    personagens,
    getPersonagensValidos,
    getPersonagemById} = require("./database/dbAcess");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

(async () => {

    await connectDB();

    app.use(cors());
    app.options("*", cors());

    app.get("/", (req, res) => {
        res.send({ mensagem: "Olá mundo!" });
    });

    app.get("/personagens", async (req, res) => {
        res.send(await getPersonagensValidos());
    });

    app.listen(port, () => console.log(`Aplicativo rodando em http://localhost:${port}.`));

})();