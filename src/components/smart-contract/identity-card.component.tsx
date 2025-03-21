import React from "react";
import Card from "../cards/card.component";

const IdEther = ({ data }: { data: string[] }) => {
  return (
    <Card className="p-4 h-fit md:w-fit flex gap-1 sm:gap-4 justify-between bg-white border-blue-400 shadow-blue-400">
      <div className="flex flex-col">
        <p className="text-black font-semibold">Identity Card</p>
        <div className="text-black flex gap-2">
        <div className="flex justify-between w-16">
          <p>Owner</p>
          <p>:</p>
        </div>
        <p>
          {data?.[0]?.slice(0, 7)}...{data?.[0]?.slice(-5)}
        </p>
      </div>
      <div className="text-black flex gap-2">
        <div className="flex justify-between w-16">
          <p>Balance</p>
          <p>:</p>
        </div>
        <p>{data?.[1]?.substring(0, 6)} SepoliaETH</p>
      </div>
      </div>

      <Card className="w-10 h-10 flex justify-center items-center bg-yellow-400 border-yellow-600 shadow-yellow-600 !rounded-full">
          <p className="text-4xl font-black">L</p>
        </Card>
    </Card>
  );
};

export default IdEther;
