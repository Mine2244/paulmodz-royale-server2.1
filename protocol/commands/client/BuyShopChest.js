module.exports = class BuyShopChest {
    constructor(device, reader) {
        this.device = device
        this.reader = reader
    }

    decode() {
        console.log('Open shop chest \n', this.reader.toString('hex'))
        this.startTick = this.reader.readRrsInt32();
        this.endTick = this.reader.readRrsInt32();
        this.accountHighID = this.reader.readRrsInt32();
        this.accountLowID = this.reader.readRrsInt32();
        this.chestIndex = this.reader.readRrsInt32();
        console.log(this.startTick, this.endTick, this.accountHighID, this.accountLowID, this.chestIndex);

        let ShopChestData = new global.CommandsFactory.serverCommands.ChestsData(this.device, 'CrownChest',this.chestIndex);
        ShopChestData.encode();
        ShopChestData.send(true);
    }

    process() {

    }
}

module.exports.code = 539