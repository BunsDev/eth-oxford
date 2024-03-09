import { ethers } from "hardhat";

async function main() {
  const investmentPool = await ethers.deployContract("InvestmentPool");
  await investmentPool.waitForDeployment();

  const oneHour = 3600;
  const currentTime = Math.floor(Date.now() / 1000);
  const oneHourFromNow = currentTime + oneHour;

  const ntCollection = await ethers.deployContract("NFTCollection", 
  ["AwsomeNFTCollection", "ANFTC", oneHourFromNow, investmentPool.target]);

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
