require("@nomicfoundation/hardhat-toolbox");

const GOERLI_API_URL = "https://goerli.infura.io/v3/8cf1a800b0b14c89bcacad7171eeac97";
const PRIVATE_KEY = "1f5f2e5eba8d4788109b381e13d2c0eb7f64e116ae843d08db7e05cb62b5d939";


module.exports = {
  solidity: "0.5.16",
  settings: {
    optimizer: {
      enabled: true,
      runs: 2000,
    }
  },
  networks: {
    goerli: {
      url: `${GOERLI_API_URL}`,
      accounts: [`${PRIVATE_KEY}`]
    }
  },
};
