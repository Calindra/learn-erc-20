// scripts/GLDToken_deploy.js

const hre = require("hardhat");

async function main() {

  const GLDToken = await hre.ethers.getContractFactory("GLDToken");
  console.log('Deploying GLDToken...');
  const token = await GLDToken.deploy('10000000000000000000000');

  await token.deployed();
  console.log("GLDToken deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  