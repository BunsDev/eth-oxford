import { ethers } from "hardhat";

async function main() {
  const investmentPool = await ethers.deployContract("InvestmentPool");

  await investmentPool.waitForDeployment();

  console.log(` deployed to ${investmentPool.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
