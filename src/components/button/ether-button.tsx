"use client";
import useEther from "@/hooks/useEther";
import React from "react";

const EtherButton = () => {
  const { owner, handleConnect } = useEther();

  return (
    <div className="text-black">
      <p
        onClick={() => {
          handleConnect();
        }}
      >
        Connect
      </p>
      Owner:{owner}
    </div>
  );
};

export default EtherButton;
