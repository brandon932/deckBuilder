var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Deck = new Schema({
  title: String,
  cards: Array
});

module.exports = mongoose.model("decks", Deck);
