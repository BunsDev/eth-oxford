import { ethers } from "hardhat";

async function main() {
  const investmentPool = await ethers.getContractAt("InvestmentPool", "0x7d7e4EdbC4F391Cfb1DEF64EEE348936A26dCE08")

  const tx = await investmentPool.stake(500, "0xeace4472633D3Aa422Ba24b38fb0Ba439DF39E74", {value: 500});

  await tx.wait();

  console.log(`Investment made`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
