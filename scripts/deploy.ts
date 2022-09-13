import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());
  
  const Greeting = await ethers.getContractFactory("Greeting");
  const greetingContract = await Greeting.deploy("Hello world");

  await greetingContract.deployed();

  console.log(`Deployed greeting to ${greetingContract.address}`);

  const Token = await ethers.getContractFactory("Token");
  const tokenContract = await Token.deploy();

  await tokenContract.deployed();

  console.log(`Deployed token to ${tokenContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
