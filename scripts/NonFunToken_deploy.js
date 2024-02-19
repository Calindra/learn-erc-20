// scripts/GLDToken_deploy.js

const hre = require("hardhat");

async function main() {
  const NonFunToken = await hre.ethers.getContractFactory("NonFunToken");
  console.log('Deploying NonFunToken...');
  const token = await NonFunToken.deploy();

  await token.deployed();
  console.log("NonFunToken deployed to:", token.address);
  const nonFunToken = await ethers.getContractAt('NonFunToken', token.address);

  const address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
  let tx = await nonFunToken.mintCollectionNFT(address, '0');
  await tx.wait();
  console.log(`Mint NFT to ${address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
