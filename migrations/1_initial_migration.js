const OZ = artifacts.require("OZ");
const Optimized = artifacts.require("Optimized");

module.exports = function (deployer) {
  deployer.deploy(OZ);
  deployer.deploy(Optimized);
};
