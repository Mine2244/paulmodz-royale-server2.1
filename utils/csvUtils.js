var csv = require("fast-csv");
var fs = require("fs");
module.exports = {
    getRandomCard(rarity) {
        if (global.cards) {
            let cardsByRarity = global.cards.find(function (card) {
                return card.Rarity === rarity;
            });
            console.log(cardsByRarity)
            var randomCard = cardsByRarity[Math.floor(Math.random() * cardsByRarity.length)];
            return cards.indexOf(randomCard) - 2;
        }
    }

}