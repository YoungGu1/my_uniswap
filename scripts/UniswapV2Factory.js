
const hre = require("hardhat");

async function main() {
    const [owner] = await ethers.getSigners();

    const UniswapV2Factory = await hre.ethers.getContractFactory("UniswapV2Factory");
    const uniswapV2FactoryContract = await UniswapV2Factory.deploy(owner.address);
    await uniswapV2FactoryContract.deployed();

    console.log(`UniswapV2Factory deployed to ${uniswapV2FactoryContract.address}`);
    const initCodeHash = await uniswapV2FactoryContract.getInitCodeHash();
    console.log("initCodeHash:",initCodeHash);

}

main();

