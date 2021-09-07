require("dotenv").config();
const { client } = require("./connection");
const { ObjectId } = require("mongodb");

const dbName = process.env.DB_NAME;

const characters = client.db(dbName).collection("personagens");

// Funções comumente usadas
const getCharacters = async () => characters.find({}).toArray();
const getCharacterById = async (id) => characters.findOne({ _id: ObjectId(id) });

module.exports = {
    characters,
    getCharacters,
    getCharacterById
}