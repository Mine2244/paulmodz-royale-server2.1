const mongoose = require('mongoose');
const config = require('../config.json');

module.exports = class Database {
    constructor() { }
    connect(isSuccess) {
        mongoose.connect(`mongodb://${global.config.database.password ? `${global.config.database.password}:` : ''}${global.config.database.host}/${global.config.database.name}`)
            .then(() => {
                require('./models/players');
                this.mongoosePlayers = mongoose.model('players');
                require('./models/clans');
                this.mongooseClans = mongoose.model('clans');
                console.log('Successfully connected to the MongoDB database.');
                isSuccess(true);
            })
            .catch(function (error) {
                console.log(error);
                isSuccess(false);
            });
    }
    disconnect() {
        mongoose.disconnect()
            .then(result => {
                console.log(`Successfully disconnected from the database`, result);
            })
            .catch(error => {
                console.log(`An error occoured disconnecting from the database`, error);
            });
    }
    getPlayer(device, callback) {
        this.mongoosePlayers.findOne({
            highID: device.userObject.highID,
            lowID: device.userObject.lowID,
            token: device.userObject.token
        })
            .then(player => {
                if (player) {
                    callback(false, player);
                } else {
                   // if (device.userObject.token === '') {
                        this.mongoosePlayers.findOne({})
                            .sort({
                                lowID: 'desc'
                            })
                            .then(lastPlayer => {
                                generateToken(40, newToken => {
                                    this.mongoosePlayers.create({
                                        highID: 0,
                                        lowID: lastPlayer ? (lastPlayer.lowID + 1) : 0,
                                        token: newToken
                                    })
                                        .then(createdPlayer => {
                                            callback(false, createdPlayer);
                                        });
                                });
                            });
                   // }
                   /* else {
                        let LoginFailed = new global.MessageFactory.serverMessages.LoginFailed(this.device, 3, 'Clean app data and try again');
                        LoginFailed.encode();
                        LoginFailed.send(false);
                    }*/

                }
            })
            .catch(error => {
                console.log(`An error occoured fetching a player from the database`, error);
            });
    }
    getClan(userObject, callback) {
        if (userObject.clan) {
            this.mongoosePlayers.findOne({
                highID: userObject.clan.highID,
                lowID: userObject.clan.lowID
            })
                .then(clan => {
                    if (clan) {
                        console.log("Clan found");
                        callback(clan);
                    } else {
                        console.log("Clan not found");
                    }
                })
                .catch(error => {
                    console.log(`An error occoured fetching a clan from the database`, error);
                });
        } else {
            console.log(`Player doesn't have a clan`);
        }
    }
}

function generateToken(n, callback) {
    require('crypto').randomBytes(n, function (err, buffer) {
        callback(buffer.toString('hex'));
    });
}