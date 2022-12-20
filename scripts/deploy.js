// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

//async function to deploy contract
async function main() {
  //grabs contract information by contract name
  const Devon = await hre.ethers.getContractFactory("Devon");
  //deploys contract passes in name and symbol as strings
  const devon = await Devon.deploy("DevonToken", "DEV");

  await devon.deployed();

  console.log(
    `Devon token deployed ${devon.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
