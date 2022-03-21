require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-waffle");

require("hardhat-gas-reporter");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.7",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1200,
      },
    },
  },
  gasReporter: {
    currency: "USD",
    // gasPrice: 100,
    // coinmarketcap: Optional: Get live Price data with your own API Key "https://coinmarketcap.com/api/pricing/",
    enabled: true,
  },
};
