const axios = require('axios')
const colors = require('colors');
const commander = require('commander');


class CryptoAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest';
    }

    async getPriceData(coin, currency) {
        try {
            const currencyArray = currency.split(',');
            if (currencyArray.length > 1) {
                currency = currencyArray[0];
                console.log("Please Enter only one currency");
            }

            //Formatter for currency
            const foramtter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: currency
            });

            const url = `${this.baseURL}?symbol=${coin}&convert=${currency}&CMC_PRO_API_KEY=${this.apiKey}`;
            // console.log(url);
            const response = await axios.get(url);
            let output = '';
            const coinArray = coin.split(',');


            coinArray.forEach(co => {
                const coinData = response.data.data[co];
                if (coinData) {
                    const price = foramtter.format(coinData.quote[currency].price).toString();
                    const rank = (coinData.cmc_rank).toString();
                    output += `Coin : ${coinData.symbol.yellow}(${coinData.name}) | Price : ${price.green} | Rank : ${rank.blue} \n`
                }
                else {
                    output = `${co} not found`
                }
            });
            return output;
        } catch (error) {
            handleAPIError(error);
        }

    }

    async getCoinUpdate(coin, currency) {
        try {
            const currencyArray = currency.split(',');
            if (currencyArray.length > 1) {
                currency = currencyArray[0];
                console.log("Please Enter only one currency");
            }

            //Formatter for currency
            const foramtter = new Intl.NumberFormat('en-US', {
                style: 'unit',
                unit: 'percent'
            });
            const curr_foramtter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: currency
            });

            const url = `${this.baseURL}?symbol=${coin}&convert=${currency}&CMC_PRO_API_KEY=${this.apiKey}`;
            // console.log(url);
            const response = await axios.get(url);
            let output = 'Coin  |   Price   |   1H change   |   1D change   |   1W change   |   1M change \n';
            const coinArray = coin.split(',');

            coinArray.forEach(co => {
                const coinData = response.data.data[co];
                if (coinData) {
                    const price = curr_foramtter.format(coinData.quote[currency].price).toString();
                    const change_hour = foramtter.format(coinData.quote[currency].percent_change_1h).toString();
                    const change_day = foramtter.format(coinData.quote[currency].percent_change_24h).toString();
                    const change_week = foramtter.format(coinData.quote[currency].percent_change_7d).toString();
                    const change_month = foramtter.format(coinData.quote[currency].percent_change_30d).toString();
                    const change_2month = foramtter.format(coinData.quote[currency].percent_change_60d).toString();
                    const change_3month = foramtter.format(coinData.quote[currency].percent_change_90d).toString();
                    output += `${co}  |   ${price.green}  |   ${change_hour}  |   ${change_day}   | ${change_week}    |   ${change_month}   |   ${change_2month}    |   ${change_3month}\n`
                }
                else {
                    output = `${co} not found`
                }
            });
            return output;
        } catch (error) {
            console.log(error);

        }
    }
}

function handleAPIError(error) {
    if (error.response.status == 401) {
        throw new Error("Your API is invalid - Go to https://pro.coinmarketcap.com/account to create one".red)
    } else if (error.response.status == 404) {
        throw new Error("Your API is not responding".red)
    } else {
        throw new Error("Something is not working".red)
    }
}

module.exports = CryptoAPI; 