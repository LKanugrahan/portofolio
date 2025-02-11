"use client";
import useEther from "@/hooks/useEther";
import React from "react";

const EtherButton = () => {
  const { owner, handleConnect } = useEther();

  return (
    <div>
      <p
        onClick={() => {
          handleConnect();
          console.log('testing')
        }}
      >
        Connect
      </p>
      {owner}
    </div>
  );
};

export default EtherButton;
