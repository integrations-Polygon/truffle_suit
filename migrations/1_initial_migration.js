const Migrations = artifacts.require("MyToken");
const fetch = require("node-fetch");
let maxGas;

async function fetch_gas() {
  const gas_resp = await fetch('https://gasstation-mumbai.matic.today/v2')
  const gas = await gas_resp.json();
  maxGas = parseInt((gas.fast.maxFee) * 1e9);
  console.log(maxGas)
}

module.exports = function (deployer) {
  fetch_gas();
  deployer.deploy(Migrations, { gasPrice: maxGas, chainId: 80001 });
};