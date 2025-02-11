"use client";
import Card from "@/components/cards/card.component";
import useEther from "@/hooks/useEther";
import React from "react";

const EtherCard = () => {
  const { data, isLoading, handleConnect } = useEther();

  return (
    <Card
      className={`${
        data.length ? "" : "w-7/12 sm:w-4/12 md:w-3/12"
      } h-fit p-4 flex flex-col justify-center items-center gap-4 bg-white border-blue-400 shadow-blue-400`}
    >
      <Card className="w-28 aspect-square flex justify-center items-center bg-yellow-400 border-yellow-600 shadow-yellow-600 !rounded-full">
        <p className="text-8xl font-black">L</p>
      </Card>
      {data.length ? (
        <div className="text-black grid grid-flow-col-dense grid-rows-2 gap-x-2">
          <div className="flex justify-between">
            <p>Owner</p>
            <p>:</p>
          </div>
          <div className="flex justify-between">
            <p>Balance</p>
            <p>:</p>
          </div>

          <div className="col-span-2">
            <p className="hidden sm:block">{data?.[0]}</p>{" "}
            <p className="sm:hidden ">{data?.[0]?.substring(0, 9)}...</p>
          </div>
          <p>{data?.[1]?.substring(0, 6)} SepoliaETH</p>
        </div>
      ) : (
        <Card
          className="text-lg bg-blue-400 border-blue-600 shadow-blue-600 px-8 py-1"
          clickable={!isLoading}
          disabled={isLoading}
        >
          <p
            onClick={() => {
              if (!isLoading) handleConnect();
            }}
            className="font-semibold"
          >
            Connect
          </p>
        </Card>
      )}
    </Card>
  );
};

export default EtherCard;
