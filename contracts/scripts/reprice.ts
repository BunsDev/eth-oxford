import { ethers } from "hardhat";

async function main() {
  const nftCollection = await ethers.getContractAt("NFTCollection", "0xeace4472633D3Aa422Ba24b38fb0Ba439DF39E74")

  const tx = await nftCollection.setPrice(500);

  await tx.wait();

  console.log(`Repriced NFT Collection to 500 wei`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
