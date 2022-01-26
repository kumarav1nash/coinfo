const KeyManager = require('../lib/KeyManager');
const inquirer = require('inquirer');
const colors = require('colors');

const keyManager = new KeyManager();

const key = {

    async set() {
        const input = await inquirer.prompt([
            {
                type: 'input',
                name: 'key',
                message: 'Enter your API key:'.green + ' (https://coinmarketcap.com/api/documentation/)',
                validate: function (value) {
                    if (value.length) {
                        return true;
                    } else {
                        return 'Please enter your API key';
                    }
                }
            }
        ]);

        const keySet = keyManager.setKey(input.key);
        if (keySet) {
            console.log('API key set successfully'.green);
        }
    },
    show() {
        console.log("your key is : " + keyManager.getKey());
    },
    remove() {
        if (keyManager.deleteKey()) {
            console.log('API key removed successfully'.green);
        } else {
            console.log('API key not found'.red);
        }

    }
}

module.exports = key;