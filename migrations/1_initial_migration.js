const Migrations = artifacts.require("MyToken");

module.exports = function (deployer) {
  deployer.deploy(Migrations,{gasPrice: 30000000000,chainId: 80001});
};