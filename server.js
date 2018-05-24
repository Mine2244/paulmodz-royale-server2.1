const net = require("net");
global.config = require('./config.json');
global.fingerprint = require('./patch/fingerprint');
const Session = require('./protocol/device');
const PacketHandler = require('./protocol/packetHandler');
let mongooseInstance = require('./database/mongoose');
mongooseInstance = new mongooseInstance();
const tag2id = require('./utils/tag2id');
let processor = new PacketHandler();
const cardsUtils = require('./utils/cardUtils');
const csvUtils = require('./utils/csvUtils');

let ids = tag2id.tag2id('VUV800');
console.log(ids.high, ids.low)
global.players = [];

mongooseInstance.connect(isSuccess => {
    if (isSuccess) {
        var server = net.createServer(function (client) {

            console.log(">>> New client connected to the server #%d from %s:%d",
                server.connections,
                client.remoteAddress,
                client.remotePort
            );

            filterIP(client.remoteAddress, ip => {
                this.ip = ip
            });
            if (!global.config.server.isLocal) {
                if (global.config.server.useIPBlackList) {
                    arrayContains(global.config.server.blackListedIPs, this.ip, callback => {
                        if (!callback) {
                            handleClient(client);
                        }
                        else {
                            console.log('A blacklisted device tried to connect to the server [', this.ip, ']');
                            client.end();
                        }
                    });
                }
                else {
                    handleClient(client);
                }
            }
            else {
                arrayContains(global.config.server.localIPs, this.ip, callback => {
                    if (callback) {
                        handleClient(client);
                    }
                    else {
                        client.end();
                    }
                })
            }
        });

        //Starting the server
        server.listen(global.config.server.port);

        server.on('listening', () => {
            console.log("Listening for clients at 127.0.0.1:%d", global.config.server.port);
            if (global.config.server.isLocal) {
                console.log('Only allowed devices can connect to the server in local mode!');
            }
        });

        process.on("uncaughtException", function (error) {
            console.error(error);
        });

        function arrayContains(array, element, callback) {
            if (array.indexOf(element) > -1) {
                callback(true);
            } else {
                callback(false);
            }
        }
    }
});

function filterIP(ip, callback) {
    if (ip.substr(0, 7) == "::ffff:") {
        callback(ip.substr(7));
    }
}


function handleClient(client) {
    let session = new Session(client, mongooseInstance);
    global.players.push(session);
    client.on('data', function (data) {
        processor.handle(data, session)
    });

    client.on('drain', function () {

    });

    client.on('close', function (had_error) {
        console.log("%s:%d - client disconnected",
            client.remoteAddress,
            client.remotePort
        );
        global.players.splice(global.players.indexOf(session), 1);
    });
}