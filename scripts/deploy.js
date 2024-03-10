const gld = require("./GLDToken_deploy")
const nft = require("./NonFunToken_deploy")
const erc1155 = require("./MultiToken1155")

async function main() {
    await gld()
    await nft()
    await erc1155()
}

main()
