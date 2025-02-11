import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/MMNQuQMMraS4up3t-MOwgl4JJC9ICMmc",
      accounts: [
        "0xe1838f44e53063141391404c11f9799bd62f5e8a9ffaf08e34ca19e87d3a3c2a",
      ],
    },
  },
};

export default config;
