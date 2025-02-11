"use client";
import useEther from "@/hooks/useEther";
import React from "react";

const EtherButton = () => {
  const { data, handleConnect } = useEther();

  return (
    <div className="text-black">
      <p
        onClick={() => {
          handleConnect();
        }}
      >
        Connect
      </p>
      Owner:{data?.[0]}
      Owner:{data?.[1]}
    </div>
  );
};

export default EtherButton;
