module.exports = class ChestNextItem {
    constructor(device, reader) {
        this.device = device
        this.reader = reader
    }

    decode() {
        this.startTick = this.reader.readRrsInt32();
        this.endTick = this.reader.readRrsInt32();
        this.accountHighID = this.reader.readRrsInt32();
        this.accountLowID= this.reader.readRrsInt32();

        // -- You can ignore this command, it's just to let the server know until where you opened the chest but we will not need that -- //
    }

    process() {  
            
    }
}

module.exports.code = 518