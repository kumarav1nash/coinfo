const Configstore = require('configstore');
const pkg = require('../package.json');
const colors = require('colors');

class KeyManager {
    constructor() {
        this.conf = new Configstore(pkg.name);
    }

    setKey(key) {
        this.conf.set('apiKey', key);
        return true;
    }

    getKey() {
        const key = this.conf.get('apiKey');
        if (!key) {
            throw new Error('No API key found'.red);
        }
        return key;
    }

    deleteKey() {
        const key = this.conf.get('apiKey');
        if (!key) {
            return false;
        }
        this.conf.delete('apiKey');
        return true;
    }
}

module.exports = KeyManager;