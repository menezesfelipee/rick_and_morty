module.exports = {
    connectDB: require("./connection").connectDB,
    closeDB: require("./connection").closeDB,
    ObjectId: require("mongodb").ObjectId,
    characters: require("./collection").characters,
    getCharacters: require("./collection").getCharacters,
    getCharacterById:require("./collection").getCharacterById
};