const ByteBuffer = require('../utils/bytebuffer-sc');

module.exports = class BattleCommand {
    constructor(device) {
        this.code = null
        this.data = new ByteBuffer(2048)
        this.device = device
        this.reader = null
    }

    send(useCrypto) {
        try {
            this.buildPacket(21443, 1, useCrypto, finalPacket => {
                this.device.client.write(finalPacket);
            })
        }
        catch (err) {
            console.log('An error occoured trying to send battle command', this.code, '\n', err);
        }
    }

    readHeader() {
        this.startTick = this.reader.readRrsInt32();
        this.endTick = this.reader.readRrsInt32();
        this.accountHighID = this.reader.readRrsInt32();
        this.accountLowID = this.reader.readRrsInt32();
    }

    buildPacket(code, version, useCrypto, callback) {
        let payload = new ByteBuffer(700);
        payload.writeRrsInt32(this.code);
        payload.append(this.data.buffer);
        let crypted = this.device.crypto.encrypt(code, payload.buffer)
        let header = Buffer.alloc(7);
        header.writeUInt16BE(code, 0);
        header.writeUIntBE(crypted.length, 2, 3)
        header.writeUInt16BE(version, 5)
        callback(Buffer.concat([header, crypted]));
    }
}