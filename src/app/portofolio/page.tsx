import Card from "@/components/cards/card.component";
import { menus } from "@/data/portofolio/data";
import React from "react";

const Portofolio = () => {
  return (
    <main className="sm:mx-[10%] md:mx-[20%] h-full px-1 py-5 flex justify-center items-center">
      <Card
        className="bg-white border-blue-400 shadow-blue-400"
      >
        <div className="flex flex-col justify-center items-center gap-5 py-3 px-2">
          <p className="text-5xl font-bold text-neutral-900">Attention</p>
          <p className="text-lg font-semibold text-neutral-900 sm:w-4/5 text-justify">
            {`First of all, I just want to let you know that this is my personal portofolio. If I do anything inefficiently, please let me know or contact me immediately. I would really appreciate it. So, shall we?`}
          </p>
          <div className="">
            {menus.map((value, index) => (
              <Card
                key={index}
                className="max-w-96 h-fit bg-blue-400 border-blue-600 shadow-blue-600"
                clickable
                href={value.href}
              >
                <p className="text-lg font-semibold text-white p-2 text-center">
                  {value.label}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </main>
  );
};

export default Portofolio;
