const program = require('commander');
const check = require('../commands/check');

program
    .command('price')
    .description('Check the price of a cryptocurrency')
    .option('--coin <coin>', 'The cryptocurrency to check the price of', 'BTC')
    .option('--currency <currency>', "change the default currency", 'USD')
    .action((cmd) => check.price(cmd));

program
    .command('coin-update')
    .description('Check the coin performance in detail')
    .option('--coin <coin>', 'The cryptocurrency to check the price of', 'BTC')
    .option('--currency <currency>', "change the default currency", 'USD')
    .action((cmd) => check.coinUpdate(cmd))




program.parse(process.argv);
