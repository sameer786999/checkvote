
const hre = require("hardhat");

async function main() {
  
  
const Voting=await hre.ethers.getContractFactory("Voting");
const Voting_=await Voting.deploy(["mark","panoti","pe"],20);

await Voting_.deployed();
 console.log(`contact address: ${Voting_.address}`);

}





main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
