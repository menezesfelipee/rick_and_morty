require("dotenv").config();
const { MongoClient } = require("mongodb");

const url = process.env.DB_URL;

const client = new MongoClient(url, { useUnifiedTopology: true });

async function connectDB() {
    console.log("Conectando ao MongoDB Atlas...")
    await client.connect();
    console.log('Conectado com sucesso!!!');
};

module.exports = {
    client,
    connectDB
};