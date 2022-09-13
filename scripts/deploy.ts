import { ethers } from "hardhat";

async function main() {

  const greeting = "Hello World";

  const Greeting = await ethers.getContractFactory("Greeting");
  const greetingContract = await Greeting.deploy(greeting);

  await greetingContract.deployed();

  console.log(`Deployed to ${greetingContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
