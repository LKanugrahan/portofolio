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
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        addressContract,
        addressContractABI,
        signer
      );
      const res = await contract?.getOwner();
      setOwner(res);
    }
  };

  return { owner, handleConnect };
};

export default useEther;
