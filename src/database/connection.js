require("dotenv").config();

const { MongoClient } = require("mongodb");

const url = process.env.DB_URL;
const options = { useNewUrlParser: true, useUnifiedTopology: true }

const client = new MongoClient(url, options);

async function connectDB() {
    await client.connect();
    console.log("Conectado ao MongoDB Atlas com sucesso!");
};

async function closeDB() {
    await client.close(false, () => {
        console.log("Conexão encerrada.")
    })
}

module.exports = {
    client,
    connectDB,
    closeDB
};