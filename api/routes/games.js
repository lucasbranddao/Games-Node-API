const express = require('express');
const route = express.Router();
const Game = require('./models/gameModel');
const mongoose = require('mongoose');

route.get('/', (req, res, next) => {
    Game.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch( err => { 
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
});

route.get('/:gameId', (req, res, next) => {
    const id = req.params.gameId;
    Game.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });

});

route.post('/', (req, res, next) => {
    const game = new Game({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        genres: req.body.genres
    });
    game.save().then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
    res.status(201).json({
        message: 'Handling POST request to /games',
        game: game
    });
});

module.exports = route;