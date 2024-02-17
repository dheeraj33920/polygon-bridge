# polygon-bridge

## NFT Collection with Cross-Chain Transfer

This project aims to create a 5-item NFT collection using DALLE 2 or Midjourney AI models, store them on IPFS using pinata.cloud, and deploy an ERC721 or ERC1155 contract to the Goerli/sepolia Ethereum Testnet. Additionally, the project includes cross-chain transfer to the Polygon Mumbai network using the FxPortal Bridge for enhanced scalability and lower transaction costs.

## Project Requirements

### 1. Generate a 5-item collection using DALLE 2 or Midjourney:

We will use the powerful DALLE 2 or Midjourney AI models to create a unique and creative collection of 5 items. These items can be images, artworks, or any other form of creative content.

### 2. Store items on IPFS using pinata.cloud:

After generating the collection items, we will upload each item to IPFS using the pinata.cloud service. This ensures the decentralized storage of our NFTs, making them easily accessible through their IPFS hashes.

### 3. Deploy an ERC721 or ERC1155 to the Goerli Ethereum Testnet:

To represent our NFT collection, we will deploy a smart contract to the Goerli Ethereum Testnet. This contract will adhere to either the ERC721 or ERC1155 standard, allowing us to mint and manage our unique NFTs.

### 4. Implement a promptDescription function on the contract:

Inside the deployed smart contract, we will implement a function called `promptDescription`. This function will return the prompt we used to generate the images or content for our NFT collection. It provides insight into the creative process and inspiration behind the NFTs.

### 5. Map Your NFT Collection using Polygon network token mapper (optional):

Though not mandatory, we can use the Polygon network token mapper to visualize our NFT collection on the Polygon network. This step enhances the user experience and provides interoperability between Ethereum and Polygon.

### 6. Write a hardhat script to batch mint all NFTs (Hint: ERC721A is optimal here):

To streamline the minting process, we will create a hardhat script that efficiently handles the batch minting of all 5 NFTs in our collection. The ERC721A standard will be used for optimal minting efficiency.

### 7. Write a hardhat script to batch transfer all NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge:

With the FxPortal Bridge, we can enable cross-chain transfers of our NFTs between Ethereum and Polygon Mumbai. We will develop a hardhat script to facilitate the smooth transfer of our NFTs to the Polygon network.

### 8. Approve the NFTs to be transferred:

Before initiating the cross-chain transfer, we must approve the NFTs for transfer as required by the FxPortal Bridge.

### 9. Deposit the NFTs to the Bridge:

Execute the cross-chain transfer process, depositing our NFTs from the Ethereum network to the Polygon Mumbai network through the FxPortal Bridge.

### 10. Test balanceOf on Mumbai:

Finally, after successful transfer, we will test the `balanceOf` function on the Polygon Mumbai network to confirm the presence of our NFTs in the designated addresses.

## How to Use the Project

1. Install the necessary dependencies by running `npm install`.

2. Generate the 5-item collection using DALLE 2 or Midjourney AI models.

3. Store each item on IPFS using pinata.cloud and note down their respective IPFS hashes.

4. Deploy the ERC721 or ERC1155 contract to the Goerli Ethereum Testnet using Hardhat.

5. Implement the `promptDescription` function inside the deployed contract.

6. Optionally, use the Polygon network token mapper to visualize your NFT collection on the Polygon network.

7. Write and run the hardhat script to batch mint all NFTs using the ERC721A standard.

8. Write and run the hardhat script to batch transfer all NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge.

9. Approve the NFTs to be transferred and then deposit them to the Bridge.

10. Test the `balanceOf` function on the Polygon Mumbai network to verify the NFTs' presence.

## Commands

```bash
npm i
npm install dotenv --save
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
node scripts/mint-nft.js
node scripts/approveDeposit.js
```
### Author
Sarvesh Shukla

### License
This project is licensed under the MIT License. See the LICENSE file for details.
