import { config as dotenvConfig } from "dotenv";
dotenvConfig();
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-contract-sizer";
import "solidity-coverage";
import "@typechain/hardhat";
import { ethers } from "ethers";
import "hardhat-gas-reporter";

const defaultEtherBalance = "100000000";
const defaultKey =
  "0000000000000000000000000000000000000000000000000000000000000001";
const defaultRpcUrl = "https://localhost:8545";

export default {
	gasReporter: {
		enabled: true,
		currency: "ETH",
		gasPrice: "auto",
		showInChart: true,
	},
	paths: {
		sources: "./contracts",
		cache: "./cache",
		artifacts: "./build",
		tests: "./tests",
	},
	networks: {
		hardhat: {
			chainId: 1337,
			accounts: [
				{
					privateKey: process.env.PRIVATE_KEY,
					balance: ethers.utils
						.parseEther(
							defaultEtherBalance
						)
						.toString(),
				},
			],
			allowUnlimitedContractSize: false,
		},
		goerli: {
			url: process.env.GOERLI_URL || defaultRpcUrl,
			accounts: [process.env.PRIVATE_KEY || defaultKey]
		  },
	},
	solidity: {
		compilers: [
			{
				version: "0.8.9",
				settings: {
					optimizer: {
						enabled: false,
						runs: 200,
					},
				},
			},
		],
	},
	typechain: {
		outDir: "build/typechain",
		target: "ethers-v5",
		alwaysGenerateOverloads: false,
		externalArtifacts: ["externalArtifacts/*.json"],
	},
};
