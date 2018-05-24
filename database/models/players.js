const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating schema
const playersSchema = new Schema({
    highID: {
        type: Number,
        required: true
    },
    lowID: {
        type: Number,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default: global.config.player.startingName
    },
    nameChangesCount: {
        type: Number,
        default: 0
    },
    trophies: {
        type: Number,
        default: global.config.player.startWithAllZero ? 0 : global.config.player.startingTrophies
    },
    highestTrophies: {
        type: Number,
        default: global.config.player.startWithAllZero ? 0 : global.config.player.startingTrophies
    },
    xpPoints: {
        type: Number,
        default: global.config.player.startWithAllZero ? 0 : global.config.player.startingXP
    },
    level: {
        type: Number,
        default: global.config.player.startWithAllZero ? 0 : global.config.player.startingLevel
    },
    gold: {
        type: Number,
        default: global.config.player.startWithAllZero ? 500 : global.config.player.startingResources.gold
    },
    diamonds: {
        type: Number,
        default: global.config.player.startWithAllZero ? 500 : global.config.player.startingResources.gold
    },
    victories: {
        type: Number,
        default: 0
    },
    selectedDeck: {
        type: Number,
        default: 0
    },
    trainingDone: {
        type: Boolean,
        default: false
    },
    cards: {
        type: Array,
        default: [
            { ID: 1, level: 0, xpPoints: 1 },
            { ID: 2, level: 0, xpPoints: 1 },
            { ID: 3, level: 0, xpPoints: 1 },
            { ID: 4, level: 0, xpPoints: 1 },
            { ID: 5, level: 0, xpPoints: 1 },
            { ID: 6, level: 0, xpPoints: 1 },
            { ID: 7, level: 0, xpPoints: 1 },
            { ID: 8, level: 0, xpPoints: 1 },
            { ID: 9, level: 0, xpPoints: 1 },
            { ID: 10, level: 0, xpPoints: 1 },
            { ID: 11, level: 0, xpPoints: 1 },
            { ID: 12, level: 0, xpPoints: 1 },
            { ID: 13, level: 0, xpPoints: 1 },
            { ID: 14, level: 0, xpPoints: 1 },
            { ID: 15, level: 0, xpPoints: 1 },
            { ID: 16, level: 0, xpPoints: 1 },
            { ID: 17, level: 0, xpPoints: 1 },
            { ID: 18, level: 0, xpPoints: 1 },
            { ID: 19, level: 0, xpPoints: 1 },
            { ID: 20, level: 0, xpPoints: 1 },
            { ID: 21, level: 0, xpPoints: 1 },
            { ID: 22, level: 0, xpPoints: 1 },
            { ID: 23, level: 0, xpPoints: 1 },
            { ID: 24, level: 0, xpPoints: 1 },
            { ID: 25, level: 0, xpPoints: 1 },
            { ID: 26, level: 0, xpPoints: 1 },
            { ID: 27, level: 0, xpPoints: 1 },
            { ID: 28, level: 0, xpPoints: 1 },
            { ID: 29, level: 0, xpPoints: 1 },
            { ID: 30, level: 0, xpPoints: 1 },
            { ID: 31, level: 0, xpPoints: 1 },
            { ID: 32, level: 0, xpPoints: 1 },
            { ID: 33, level: 0, xpPoints: 1 },
            { ID: 34, level: 0, xpPoints: 1 },
            { ID: 35, level: 0, xpPoints: 1 },
            { ID: 36, level: 0, xpPoints: 1 },
            { ID: 37, level: 0, xpPoints: 1 },
            { ID: 38, level: 0, xpPoints: 1 },
            { ID: 39, level: 0, xpPoints: 1 },
            { ID: 40, level: 0, xpPoints: 1 },
            { ID: 41, level: 0, xpPoints: 1 },
            { ID: 42, level: 0, xpPoints: 1 },
            { ID: 43, level: 0, xpPoints: 1 },
            { ID: 44, level: 0, xpPoints: 1 },
            { ID: 45, level: 0, xpPoints: 1 },
            { ID: 46, level: 0, xpPoints: 1 },
            { ID: 47, level: 0, xpPoints: 1 },
            //{ ID: 48, level: 0, xpPoints: 1 },
            { ID: 49, level: 0, xpPoints: 1 },
            { ID: 50, level: 0, xpPoints: 1 },
            { ID: 51, level: 0, xpPoints: 1 },
            // { ID: 52, level: 0, xpPoints: 1 },
            { ID: 53, level: 0, xpPoints: 1 },
            //{ ID: 54, level: 0, xpPoints: 1 },
            { ID: 55, level: 0, xpPoints: 1 },
            { ID: 56, level: 0, xpPoints: 1 },
            { ID: 57, level: 0, xpPoints: 1 },
            { ID: 58, level: 0, xpPoints: 1 },
            // { ID: 59, level: 0, xpPoints: 1 },
            //  { ID: 60, level: 0, xpPoints: 1 },
            // { ID: 61, level: 0, xpPoints: 1 },
            //  { ID: 62, level: 0, xpPoints: 1 },
            { ID: 63, level: 0, xpPoints: 1 },
            { ID: 64, level: 0, xpPoints: 1 },
            { ID: 65, level: 0, xpPoints: 1 },
            { ID: 66, level: 0, xpPoints: 1 },
            { ID: 67, level: 0, xpPoints: 1 },
            { ID: 68, level: 0, xpPoints: 1 },
            { ID: 69, level: 0, xpPoints: 1 },
            { ID: 70, level: 0, xpPoints: 1 },
            { ID: 71, level: 0, xpPoints: 1 },
            { ID: 72, level: 0, xpPoints: 1 },
            { ID: 73, level: 0, xpPoints: 1 },
            { ID: 74, level: 0, xpPoints: 1 },
            //  { ID: 75, level: 0, xpPoints: 1 },
            // { ID: 76, level: 0, xpPoints: 1 },
            // { ID: 77, level: 0, xpPoints: 1 },
            { ID: 78, level: 0, xpPoints: 1 },
            { ID: 79, level: 0, xpPoints: 1 },
            { ID: 80, level: 0, xpPoints: 1 },
            { ID: 81, level: 0, xpPoints: 1 },
            { ID: 82, level: 0, xpPoints: 1 },
            { ID: 83, level: 0, xpPoints: 1 },
            { ID: 84, level: 0, xpPoints: 1 },
            { ID: 85, level: 0, xpPoints: 1 },
            { ID: 86, level: 0, xpPoints: 1 },
            { ID: 87, level: 0, xpPoints: 1 },
            { ID: 88, level: 0, xpPoints: 1 },
            { ID: 89, level: 0, xpPoints: 1 },
            { ID: 90, level: 0, xpPoints: 1 },//Tornado
            { ID: 91, level: 0, xpPoints: 1 },//Clone
            { ID: 94, level: 0, xpPoints: 1 }//Heal
        ]
    },
    decks: {
        type: Array,
        default: [
            [26000000, 26000001, 26000002, 26000003, 26000004, 26000005, 26000006, 26000007],
            [26000000, 26000001, 26000002, 26000003, 26000004, 26000005, 26000006, 26000007],
            [26000000, 26000001, 26000002, 26000003, 26000004, 26000005, 26000006, 26000007],
            [26000000, 26000001, 26000002, 26000003, 26000004, 26000005, 26000006, 26000007],
            [26000000, 26000001, 26000002, 26000003, 26000004, 26000005, 26000006, 26000007]]
    },
    chests: {
        type: Array,
        default: [
            {
                chestID: 114,
                isUnlocked: false
            },
            {
                chestID: 114,
                isUnlocked: false
            },
            {
                chestID: 114,
                isUnlocked: false
            },
            {
                chestID: 318,
                isUnlocked: false
            }
        ]
    },
    clan: {
        type: Object,
        default: null
    }
})

mongoose.model('players', playersSchema);