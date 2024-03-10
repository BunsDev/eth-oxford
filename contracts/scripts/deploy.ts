import { ethers } from "hardhat";

async function main() {
  const investmentPool = await ethers.deployContract("InvestmentPool");
  await investmentPool.waitForDeployment();

  const routerAddress = '0x1035CabC275068e0F4b745A29CEDf38E13aF41b1'
  const linkContract = '0x326C977E6efc84E512bB9C30f76E30c160eD06FB'

  const transferAndBuy = await  ethers.deployContract("TransferAndBuy", [routerAddress, linkContract]);

  await transferAndBuy.waitForDeployment();

  const price = 100;

  const ntCollection = await ethers.deployContract("NFTCollection", 
  ["AwsomeNFTCollection", "ANFTC", price, investmentPool.target]);

  await ntCollection.waitForDeployment();

  const ntCollectionMumai = await ethers.deployContract("NFTCollection", 
  ["AwsomeNFTCollection", "ANFTC", price, transferAndBuy.target]);

  await ntCollectionMumai.waitForDeployment();

  console.log(`Investment pool deployed to ${investmentPool.target}`);
  console.log(`NFT Collection deployed to ${ntCollection.target}`);
  console.log(`NFT Collection Mumbai deployed to ${ntCollectionMumai.target}`);
  console.log(`TransferAndBuy deployed to ${transferAndBuy.target}`);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
