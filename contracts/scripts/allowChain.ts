import { ethers } from "hardhat";

async function main() {
  const allowSourceChain = '14767482510784806043'
  const allowListSender = '0xAE507bF7164326827513F1AA794fb777aA1A291E'

  const transferAndBuy = await  ethers.getContractAt("TransferAndBuy", "0xdC1D8ECB3636b98fc363ef1F19868c5cc784838A")

  const txChain = await transferAndBuy.allowlistSourceChain(allowSourceChain, true)
  await txChain.wait()

  console.log("Chain added");

  const txSender = await transferAndBuy.allowlistSender(allowListSender, true)
  await txSender.wait()

  console.log("Sender added");
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
