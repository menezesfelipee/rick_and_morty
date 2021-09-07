require("dotenv").config();
const { MongoClient, ObjectId } = require("mongodb");

const dbName = process.env.DB_NAME;
const dbUrl = process.env.DB_URL;

const url = dbUrl;
const client = new MongoClient(url, { useUnifiedTopology: true });

async function connectDB() {
    console.log("Conectando ao MongoDB Atlas...")
    await client.connect();
    client.connect(() => console.log('Conectado com sucesso!!!'));
};

const characters = client.db("rick-and-morty").collection("personagens");

const getCharacters = () => characters.find({}).toArray();
const getCharactersById = async (id) => characters.findOne({ _id: ObjectId(id) });

module.exports = {
    connectDB,
    ObjectId,
    characters,
    getCharacters,
    getCharactersById
};