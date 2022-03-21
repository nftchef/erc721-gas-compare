const OZ = artifacts.require("OZ");
const Optimized = artifacts.require("Optimized");
const MasonChance = artifacts.require("MasonChance");
const Azuki = artifacts.require("Azuki");

module.exports = function (deployer) {
  deployer.deploy(OZ);
  deployer.deploy(Optimized);
  deployer.deploy(Optimized);
  deployer.deploy(Azuki);
};
