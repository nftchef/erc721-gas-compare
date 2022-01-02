const OZ = artifacts.require("OZ");
const Optimized = artifacts.require("Optimized");
const MasonChance = artifacts.require("MasonChance");

module.exports = function (deployer) {
  deployer.deploy(OZ);
  deployer.deploy(Optimized);
  deployer.deploy(MasonChance);
};
