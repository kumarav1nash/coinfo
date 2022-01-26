const inquirer = require('inquirer');
const colors = require('colors');
const KeyManager = require('../lib/KeyManager');
const CryptoAPI = require('../lib/CryptoAPI');


const check = {

    async price(cmd) {
        try {
            const keyManager = new KeyManager();
            const cryptoAPI = new CryptoAPI(keyManager.getKey());
            const priceOutputData = await cryptoAPI.getPriceData(cmd.coin, cmd.currency);
            console.log(priceOutputData);
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = check;