const main = async () => {
  const dogeFactory = await hre.ethers.getContractFactory("Dogecoin");
  const dogeContract = await dogeFactory.deploy();
  await dogeContract.deployed();
  console.log("DogecoinToken deployed to:", dogeContract.address);

  const linkFactory = await hre.ethers.getContractFactory("Link");
  const linkContract = await linkFactory.deploy();
  await linkContract.deployed();
  console.log("LinkToken deployed to:", linkContract.address);

  const daiFactory = await hre.ethers.getContractFactory("Dai");
  const daiContract = await daiFactory.deploy();
  await daiContract.deployed();
  console.log("DaiToken deployed to:", daiContract.address);

  const ngCoinFactory = await hre.ethers.getContractFactory("Ngcoin");
  const ngCoinContract = await ngCoinFactory.deploy();
  await ngCoinContract.deployed();
  console.log("NgcoinToken deployed to:", ngCoinContract.address);

  const usdcFactory = await hre.ethers.getContractFactory("Usdc");
  const usdcContract = await usdcFactory.deploy();
  await usdcContract.deployed();
  console.log("UsdcToken deployed to:", usdcContract.address);

  const actionCoinFactory = await hre.ethers.getContractFactory("Actioncoin");
  const actionCoinContract = await actionCoinFactory.deploy();
  await actionCoinContract.deployed();
  console.log("ActioncoinToken deployed to:", actionCoinContract.address);
};

(async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
})();
