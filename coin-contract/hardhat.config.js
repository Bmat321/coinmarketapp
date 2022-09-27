require("@nomiclabs/hardhat-waffle");
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  networks :{
    rinkeby: {
      url: process.env.RPC_ENDPOINT,
      accounts: [process.env.ACCOUNT]
    }
  }
};
