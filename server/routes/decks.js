var express = require('express');
var router = express.Router();
var Deck = require('../models/decks.js');

router.get('/decks', function(req, res, next) {
    Deck.find(function(err,decks){
        if(err){
            res.send({"message":err});
        }else{
            res.json(decks);
        }
    });
});
router.post('/decks', function(req, res, next) {
    newDeck = new Deck(req.body);
    newDeck.save(function(err,deck){
        if (err) {
            res.send({"message":err});
        }else{
            res.json(deck);
        }
    });
});

router.get('/deck/:id', function(req,res,next){
    Deck.findById(req.params.id, function(err, deck){
        if (err) {
            res.send({"message":err});
        }else{
            res.json(deck);
        }
    });
});
router.post('/deck/:id', function(req,res,next){
    var options = {"new":true, "upsert":true};
    Deck.findByIdAndUpdate(req.params.id, req.body,options,function(err, deck){
        if (err) {
            res.send({"message":err});
        }else{
            res.json(deck);
        }
    });
});

router.delete('/deck/:id', function(req,res,next){
    Deck.findByIdAndRemove(req.params.id, function(err,deck){
        if (err) {
            res.send({"message":err});

        }else{
            res.send({"message":"success"});
        }
    });

});

module.exports = router;
