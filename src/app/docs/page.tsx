import Card from "@/components/cards/card.component";
import { menus } from "@/data/docs/data";
import React from "react";

const Docs = () => {
  return (
    <main className="sm:w-2/3 w-full px-1 py-5">
      <Card
        className={{
          w: "w-full",
          h: "h-full",
          bgC: "bg-neutral-400",
          borderC: "border-neutral-600",
          shadowC: "shadow-neutral-600",
        }}
      >
        <div className="flex flex-col justify-center items-center gap-5 py-3 px-2">
          <p className="text-5xl font-bold text-neutral-900">Attention</p>
          <p className="text-lg font-semibold text-neutral-900 sm:w-2/3 text-justify">
            {`First of all, I just want to let you know that this is my personal knowledge note-taking website for Frontend Development. If I do anything inefficiently, please let me know or contact me immediately. I would really appreciate it. So, what would you like to explore?`}
          </p>
          <div className="grid grid-cols-2 grid-rows-2 sm:grid-cols-4 sm:grid-rows-1 gap-2">
            {menus.map((value, index) => (
              <Card
                key={index}
                className={{
                  w: "max-w-96",
                  h: "h-fit",
                  bgC: "bg-blue-400",
                  borderC: "border-blue-600",
                  shadowC: "shadow-blue-600",
                }}
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

export default Docs;
