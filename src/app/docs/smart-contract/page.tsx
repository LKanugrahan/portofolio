
import EtherButton from "@/components/button/ether-button";
import Card from "@/components/cards/card.component";
import React from "react";

const Docs = () => {
  return (
    <main className="w-full h-full p-4 pt-16">
      <Card
        className="w-full h-full bg-white border-blue-400 shadow-blue-400"
      ><EtherButton/>
      </Card>
    </main>
  );
};

export default Docs;

