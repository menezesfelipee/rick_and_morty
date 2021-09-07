module.exports = {
    connectDB: require("./connection").connectDB,
    ObjectId: require("mongodb").ObjectId,
    characters: require("./collection").characters,
    getCharacters: require("./collection").getCharacters,
    getCharacterById:require("./collection").getCharacterById
};