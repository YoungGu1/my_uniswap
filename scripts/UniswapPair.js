const { ethers } = require("hardhat");

const contractAddress = "0x31C24D6433e2B375Bdd0b4F3b814e98043dE23CC"


async function main(){

    const contract = await ethers.getContractAt("UniswapV2Pair",contractAddress);
    const token0 = await contract.getReserves();
    // console.log(token0);
    const balance = await contract.balanceOf("0x31C24D6433e2B375Bdd0b4F3b814e98043dE23CC");
    console.log(balance);

    const totalSupply = await contract.totalSupply();
    console.log(totalSupply);

}

main();