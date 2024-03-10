async function main() {
    const MyNFT = await ethers.getContractFactory("MyERC1155NFT");
    const myNFT = await MyNFT.deploy();
    const txHash = myNFT.deployTransaction.hash;
    const txReceipt = await ethers.provider.waitForTransaction(txHash);
    console.log("Contract deployed to address:", txReceipt.contractAddress);
    const ercToken = await ethers.getContractAt('MyERC1155NFT', txReceipt.contractAddress);
    for (let i = 0; i < 10; i++) {
        const tx = await ercToken.mintNFT('0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266', 'http://127.0.0.1/nft.json');
        await tx.wait();
        console.log(`${i}`)
    }
}

module.exports = main

// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });
