async function main() {
  const MyNFT = await ethers.getContractFactory("MyNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy();
  console.log("Contract deployed to address:", myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  
  /*
npm i
npm install dotenv --save
npx hardhat compile 
npx hardhat run scripts/deploy.js --network goerli
node scripts/mint-nft.js
node .\scripts\approveDeposit.js

  */
