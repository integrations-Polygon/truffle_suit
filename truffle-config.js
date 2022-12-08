
 require('dotenv').config();
 var HDWalletProvider = require("truffle-hdwallet-provider");
 const MNEMONIC = process.env.MNEMONICS

 module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    testnet: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, process.env.TESTNET_RPC)
      },
      network_id: 80001,
      confirmation: 2,
      gas: 20000000      
    },

    mainnet: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, process.env.MAINNET_RPC)
      },
      network_id: 137,
      gas: 20000000      
    }
  },

  plugins: [
    'truffle-plugin-verify'
  ],

  api_keys: {
    etherscan: 'MY_API_KEY',
    optimistic_etherscan: 'MY_API_KEY',
    arbiscan: 'MY_API_KEY',
    bscscan: 'MY_API_KEY',
    polygonscan: process.env.POLYGON_API,
  },


  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.11",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },
  
  // db: {
    // enabled: false,
    // host: "127.0.0.1",
    // adapter: {
    //   name: "sqlite",
    //   settings: {
    //     directory: ".db"
    //   }
    // }
  // }
};