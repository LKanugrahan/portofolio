import React from "react";
import Card from "../cards/card.component";

const NftStore = () => {
  return (
    <Card className="text-black p-4 flex-1 flex flex-col gap-2 bg-white border-blue-400 shadow-blue-400">
      <p className="font-semibold">NFT Store</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="flex flex-col justify-start items-center gap-2"
          >
            <div className="w-32 aspect-square rounded-md bg-black" />
            <div className="flex flex-col">
              <p>Judul Lorem ipsum dolor sit</p>
              <p>Owner </p>
              <p>Price </p>
              <Card
                className=" bg-blue-400 shadow-blue-600 border-blue-600 text-white text-center"
                clickable
              >
                Buy
              </Card>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default NftStore;
