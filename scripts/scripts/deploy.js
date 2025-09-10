// scripts/deploy.js

async function main() {
  // ہم ERC20 کنٹریکٹ ڈپلائی کر رہے ہیں
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // کنٹریکٹ فیکٹری حاصل کریں
  const ADNToken = await ethers.getContractFactory("ADNToken");

  // کنٹریکٹ ڈپلائی کریں
  const adnToken = await ADNToken.deploy("ADN Coin", "ADN");

  await adnToken.deployed();

  console.log("ADN Token deployed to:", adnToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
