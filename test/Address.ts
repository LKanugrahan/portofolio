import { expect } from "chai";
import { ethers } from "hardhat";
import { Address } from "../typechain-types";

describe("Address Contract", function () {
  let address: Address;
  let owner: any;
  let otherAccount: any;

  beforeEach(async function () {
    [owner, otherAccount] = await ethers.getSigners();

    // Deploy kontrak
    const Address = await ethers.getContractFactory("Address");
    address = (await Address.deploy()) as Address;
    await address.waitForDeployment();
  });

  it("Harus mengatur owner dengan benar saat deploy", async function () {
    expect(await address.owner()).to.equal(owner.address);
  });

  it("getOwner() harus mengembalikan owner jika dipanggil oleh pemilik", async function () {
    expect(await address.getOwner()).to.equal(owner.address);
  });

  it("getOwner() harus gagal jika dipanggil oleh alamat lain", async function () {
    await expect(address.connect(otherAccount).getOwner()).to.be.revertedWithCustomError(
      address,
      "Ownership"
    );
  });
});
