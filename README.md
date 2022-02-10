# coinfo
### Steps to run this application in your system
> NOTE :- You'll be required a [coinmarketcap api](https://coinmarketcap.com/api/),
> so go and get one [here](https://coinmarketcap.com/api/) for free

   1. Download or clone the repo to your local system</br>
        ``` bash
        git clone https://github.com/kumarav1nash/coinfo.git
        ```
   2. goto coinfo directory
   3. install all the necessary dependencies
       ```bash
       npm i
       ```
   4. link the project to your local env
       ```bash
       npm link
       ```
   5. if the above is not working try 
       ```bash
        sudo npm link
        ```
   6. now you are all set, check whether it's installed successfully by typing this cmd
        ```bash
        coinfo -V
        ```
      * if it's showing you the version means you are all set
   7. now set you api by typing this cmd
       ```bash
       coinfo key set
       ```
   8. it will ask to enter the api, enter your api and you are done
   9. now you can check the price and track the crypto change over hour, days , months etc
   10. for more info on different cmd available type ``` coinfo -h```
   11. here's an example to check the price of BTC,ETH and BNB in USD
        ```bash
        coinfo check price --coin=BTC,ETH,BNB --currency=USD
        ```
   12.  Now Go track your favorite crypto over command line

