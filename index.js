const express = require("express");
const { MongoClient } = require("mongodb");
const { ObjectId } = require("mongodb");
require("dotenv").config();

(async () => {
    const dbUser = process.env.DB_USER;
    const dbPassword = process.env.DB_PASSWORD;
    const dbChar = process.env.DB_CHAR;
    const dbName = process.env.DB_NAME;

    const app = express();
    const port = process.env.PORT || 3000;
    app.use(express.json());

    // const uri = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.${dbChar}.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    const uri = "mongodb://localhost:27017/rick-and-morty"
    const options = { useNewUrlParser: true, useUnifiedTopology: true }
    const client = await MongoClient.connect(uri, options);
    
    const db = client.db(dbName);
    const personagens = db.collection("personagens");

    const getPersonagensValidas = () => personagens.find({}).toArray();
	const getPersonagemById = async (id) => personagens.findOne({ _id: ObjectId(id) });

    app.all("/*", (req, res, next) => {
		res.header("Access-Control-Allow-Origin", "*");

		res.header("Access-Control-Allow-Methods", "*");

		res.header(
			"Access-Control-Allow-Headers",
			"Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
		);

		next();
	});

    app.get("/", (req, res) => {
        res.send({ mensagem: "Olá mundo!" });
    });

    app.get("/personagens", async (req, res) => {
        res.send(await getPersonagensValidas());
    });

    app.use(express.json());
    app.listen(port, () => console.log(`Aplicativo rodando em http://localhost:${port}.`));


})();