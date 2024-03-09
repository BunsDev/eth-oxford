import { ethers } from "hardhat";

async function main() {
  const investmentPool = await ethers.deployContract("InvestmentPool");
  await investmentPool.waitForDeployment();

  const price = 100;

  const ntCollection = await ethers.deployContract("NFTCollection", 
  ["AwsomeNFTCollection", "ANFTC", price, investmentPool.target]);

  await ntCollection.waitForDeployment();

  console.log(`Investment pool deployed to ${investmentPool.target}`);
  console.log(`NFT Collection deployed to ${ntCollection.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
