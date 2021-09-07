require("dotenv").config();
const { MongoClient } = require("mongodb");

const dbName = process.env.DB_NAME;
const dbUrl = process.env.DB_URL;

const url = dbUrl;
const client = new MongoClient(url, { useUnifiedTopology: true });

async function connectDB() {
    console.log("Conectando ao MongoDB Atlas...")
    await client.connect();
    client.connect(() => console.log('Conectado com sucesso!!!'));
};

const personagens = client.db("rick-and-morty").collection("personagens");

const getPersonagensValidos = () => personagens.find({}).toArray();
const getPersonagemById = async (id) => personagens.findOne({ _id: ObjectId(id) });

module.exports = {
    connectDB,
    personagens,
    getPersonagensValidos,
    getPersonagemById }