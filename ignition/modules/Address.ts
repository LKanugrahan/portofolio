import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("AddressModule", (m) => {
  const addressContract = m.contract("Address", []);

  return { addressContract };
});
