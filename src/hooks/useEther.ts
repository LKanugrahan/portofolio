/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  addressContract,
  addressContractABI,
} from "@/data/contracts/address-contract";
import { ethers } from "ethers";
import { useState } from "react";

const useEther = () => {
  const [owner, setOwner] = useState<string>();
  const handleConnect = async () => {
    if ((window as any).ethereum) {
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const contract = new ethers.Contract(
        addressContract,
        addressContractABI,
        provider
      );
      const owner = await contract?.getOwner();
      setOwner(owner);
    }
  };

  return { owner, handleConnect };
};

export default useEther;
