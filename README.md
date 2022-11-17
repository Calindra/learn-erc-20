# ERC-20 GLD Token to test on Cartesi

This is just a ERC-20 token contract to test with the Cartesi Portal

## Deploy the Smart Contract

Install all the dependencies:
```shell
yarn
```

Compile:
```shell
yarn hardhat compile
```

Deploy the contract:
```shell
yarn hardhat run scripts/GLDToken_deploy.js
```

The output will be something like this:
```shell
yarn run v1.22.19
$ /home/oshiro/calindra/learn-erc-20/node_modules/.bin/hardhat run scripts/GLDToken_deploy.js
Deploying GLDToken...
GLDToken deployed to: 0x9E545E3C0baAB3E08CdfD552C960A1050f373042
Done in 1.51s.
```

The token address is 0x9E545E3C0baAB3E08CdfD552C960A1050f373042

## Cartesi Portal

Today, 17 nov 2022, checkout the rollups-examples at: 
```shell
git clone git@github.com:Calindra/rollups-examples.git
cd ./rollups-examples
git checkout feature/solana-adapter
cd ./frontend-console
yarn
```

Do the commom setup procedures documented at Cartesi docs.

Run the deposit command with the token address deployed as argument.
```shell

yarn start erc20 deposit --erc20 0x9E545E3C0baAB3E08CdfD552C960A1050f373042 --amount 1234
```

Output:
```shell
yarn run v1.22.19
$ ts-node src/index.ts erc20 deposit --erc20 0x9E545E3C0baAB3E08CdfD552C960A1050f373042 --amount 1234
connecting to http://localhost:8545
connected to chain 31337
connect to contracts address=0xF8C694fd58360De278d5fF2276B7130Bfdc0192A
using ERC-20 token contract at address "0x9E545E3C0baAB3E08CdfD552C960A1050f373042"
using account "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
approving allowance of 1234 tokens...
depositing 1234 tokens...
transaction: 0xee2f1e7cd56244cc84ebe4c7d2f6f57484d20adb8a3e48a9648ebc4607646e92
waiting for confirmation...
deposit successfully executed as input 4 of epoch 0
Done in 12.04s.
```