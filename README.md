# TRUFFLE SUIT SETUP FOR POLYGON

This repository contains all the necessary setup for polygon chain to deploy the smart contract using truffle.

## GETTING STARTED
- Clone this repository
```sh
git clone https://github.com/integrations-Polygon/truffle_suit.git
```
- Navigate to `truffle_suit` folder
```sh
cd truffle_suit
```

- Install dependencies
```sh
npm install 
```

- Create `.env` file
```sh
cp .example.env .env
```

- Configure environment variables in `.env`
```
MNEMONICS = "your mnemonics"
TESTNET_RPC= "testnet rpc url"
MAINNET_RPC= "mainnet rpc url"
POLYGON_API= "polygonscan api key"
```
- Compile the smart contract
```sh
truffle migrate
```
- Deploy the smart contract
```sh
truffle deploy --network testnet
```
- To Verify the smart contract
```sh
truffle run verify 'contractname' --network testnet
```
- To Verify specific contract address
```sh
truffle run verify 'contractname' contract-address --network testnet
```

you can customize gas fee on migrations files
