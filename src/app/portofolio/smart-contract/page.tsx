"use client";
import Card from "@/components/cards/card.component";
import IdEther from "@/components/smart-contract/identity-card.component";
import NftStore from "@/components/smart-contract/nft-card.component";
import useEther from "@/hooks/useEther";
import Image from "next/image";
import React, { useState } from "react";
import metamask from "@/../public/metamask.jpg";
import metaaccount from "@/../public/meta-account.jpg";
import metanetwork from "@/../public/meta-network.jpg";
import testnet from "@/../public/testnet.jpg";
import drip from "@/../public/drip.jpg";
import sepolia from "@/../public/sepolia-faucet.jpg";
import Loading from "@/components/loading/loading.component";

const SmartContract = () => {
  const { data, isLoading, handleConnect } = useEther();
  const [desc, setDesc] = useState(true);
  return (
    <>
      {desc ? (
        <main className="pt-16 px-5 py-1">
          <Card className="h-fit p-4 bg-transparent border-white shadow-white">
            <div className="flex justify-between items-center">
              <p className="text-2xl font-bold">How to use Smart Contract</p>{" "}
              <Card
                className="hidden sm:block h-fit w-fit px-2 py-1 bg-blue-400 border-blue-600 shadow-blue-600 text-white"
                clickable
                onClick={() => {
                  setDesc(!desc);
                }}
              >{`Let's Go`}</Card>
            </div>
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                <div className="flex gap-2 lg:row-start-1 lg:col-start-1">
                  <p>1.</p>
                  <div className="flex flex-col gap-2">
                    <p>Install MetaMask from Chrome Extensions</p>
                    <Image
                      src={metamask}
                      alt="metamask"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex gap-2 lg:row-start-2 lg:col-start-1">
                  <p>2.</p>
                  <div className="flex flex-col gap-2">
                    <p>Create an account for Testnet</p>
                    <Image
                      src={metaaccount}
                      alt="metaaccount"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex gap-2 lg:row-start-1 lg:col-start-2">
                  <p>3.</p>
                  <div className="flex flex-col gap-2">
                    <p>Click network list</p>
                    <Image
                      src={metanetwork}
                      alt="metanetwork"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <div className="flex gap-2 lg:row-start-2 lg:col-start-2">
                  <p>4.</p>
                  <div className="flex flex-col gap-2">
                    <p>Scroll down, enable test network and choose Sepolia</p>
                    <Image src={testnet} alt="testnet" className="rounded-lg" />
                  </div>
                </div>
                <div className="flex gap-2 lg:row-start-1 lg:col-start-3">
                  <p>5.</p>
                  <div className="flex flex-col gap-2">
                    <p>{`Search "Sepolia Faucet" in google`}</p>
                    <Image src={sepolia} alt="sepolia" className="rounded-lg" />
                  </div>
                </div>
                <div className="flex gap-2 lg:row-start-2 lg:col-start-3">
                  <p>6.</p>
                  <div className="flex flex-col gap-2">
                    <p>{`Copy your wallet id (address) beside network in pic.3 and make request to receive SepoliaETH`}</p>
                    <Image src={drip} alt="drip" className="rounded-lg" />
                  </div>
                </div>
              </div>
              <Card
                className="sm:hidden self-end h-fit w-fit px-2 py-1 bg-blue-400 border-blue-600 shadow-blue-600 text-white"
                clickable
                onClick={() => {
                  setDesc(!desc);
                }}
              >{`Let's Go`}</Card>
            </div>
          </Card>
        </main>
      ) : (
        <main
          className={`${
            data.length
              ? "pt-16 px-5 py-1 flex gap-3 flex-col md:flex-row"
              : "h-full flex justify-center items-center"
          }`}
        >
          {data.length ? (
            <>
              <IdEther data={data} />
              <NftStore />
            </>
          ) : (
            <Card className="h-fit p-4 flex flex-col justify-center items-center gap-4 bg-white border-blue-400 shadow-blue-400">
              <Card className="aspect-square flex justify-center items-center bg-yellow-400 border-yellow-600 shadow-yellow-600 !rounded-full">
                <p className="text-8xl font-black">L</p>
              </Card>
              <Card
                className="text-lg bg-blue-400 border-blue-600 shadow-blue-600 px-8 py-1"
                clickable={!isLoading}
                disabled={isLoading}
                onClick={() => {
                  if (!isLoading) handleConnect();
                }}
              >
                <div className="font-semibold">{isLoading?<Loading  className="bg-gray-600"/>:"Connect"}</div>
              </Card>
            </Card>
          )}
        </main>
      )}
    </>
  );
};

export default SmartContract;
