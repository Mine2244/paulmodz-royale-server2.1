module.exports = class BuyChest {
    constructor(device, reader) {
        this.device = device
        this.reader = reader
    }

    decode() {
        console.log('Buy chest \n', this.reader.toString('hex'))
        this.startTick = this.reader.readRrsInt32();
        this.endTick = this.reader.readRrsInt32();
        this.accountHighID = this.reader.readRrsInt32();
        this.accountLowID = this.reader.readRrsInt32();
        this.chestIndex = this.reader.readRrsInt32();
        console.log(this.startTick, this.endTick, this.accountHighID, this.accountLowID, this.chestIndex);

        let SlotChestData = new global.CommandsFactory.serverCommands.SlotChestData(this.device, this.chestIndex);
        SlotChestData.encode();
        SlotChestData.send(true);

        this.device.player.chests.splice(this.chestIndex / 2 - 4, 1);
        this.device.player.save();
    }

    process() {

    }
}

module.exports.code = 543