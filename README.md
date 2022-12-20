# Token Cross Chain Project

## Getting Started

1. Clone this repo `git clone <>`

2. run `npm install`

3. Add mumbia to metamask `https://mumbai.polygonscan.com/` in the bottom corner click to add. 

4. Get testnet tokens `https://mumbaifaucet.com/`. Add your public key

5. Creat a .env file. If you don't have a polyscan API key, Devon will share hers.

6. Get your private key from metamask. Open > Account Details > Export Private key

    ```
    POLYGONSCAN_API_KEY = API KEY

    PRIVATE_KEY =  PRIVATE KEY
    ```

7. Deploy it

```npx hardhat run scripts/deploy.js --network polygon_mumbai```

For more help: 

Deploy instructions 

```https://wiki.polygon.technology/docs/develop/hardhat/```

# FAQ

Where did the contract for the token come from?

Openzepplin contract wizard can help you get started with erc20, erc721, and erc1155.

    ```https://docs.openzeppelin.com/contracts/4.x/wizard```

How do I import openzepplin?

    ```https://www.npmjs.com/package/@openzeppelin/contracts```

    ```npm install @openzeppelin/contracts```

Where did all this `hardhat` stuff come from?

    ```https://hardhat.org/tutorial/creating-a-new-hardhat-project```

    ```npm init```

    ```npm install --save-dev hardhat```

    ```npx hardhat```

What about the other installs?

    ```npm i @nomiclabs/hardhat-etherscan```

    ```npm i dotenv```

    ```npm i @nomiclabs/hardhat-ethers ```


# Hardhat Commands

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```

# Documentation to Finish Project

```https://docs.axelar.dev/dev/build/getting-started```

Deploy instructions 

```https://wiki.polygon.technology/docs/develop/hardhat/```

# Fees

```
https://docs.axelar.dev/resources/testnet#cross-chain-relayer-gas-fee
```