const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    genres: [String]
});

module.exports = mongoose.model('Game', gameSchema);