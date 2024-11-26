import Link from "next/link";
import React from "react";
import Card from "../cards/card.component";

const MainNavbar = () => {
  return (
    <nav className="sticky top-0 h-[8%] flex items-center justify-between bg-neutral-900 py-2 px-5 z-20">
      <Link href="/" className="font-bold text-3xl">
        <span className="text-amber-400">L</span> Dev
        <span className="text-amber-400">.</span>
      </Link>
      <div className="flex gap-2">
        <Card
          className={{
            w: "w-fit",
            h: "h-fit",
            bgC: "bg-amber-400",
            borderC: "border-amber-600",
            shadowC: "shadow-amber-600",
          }}
          clickable
          href="https://tako.id/"
          target="_blank"
        >
          <p className="text-lg text-neutral-900 font-semibold py-1 px-2">
            <span className="sm:hidden">Credit</span>
            <span className="hidden sm:inline">Inspirational Credit</span>
          </p>
        </Card>
        <Card
          className={{
            w: "w-fit",
            h: "h-fit",
            bgC: "bg-emerald-400",
            borderC: "border-emerald-600",
            shadowC: "shadow-emerald-600",
          }}
          clickable
          href="https://wa.me/6282180881420"
          target="_blank"
        >
          <p className="text-lg text-white font-semibold py-1 px-2">
          <span className="sm:hidden">Contact</span>
          <span className="hidden sm:inline">Get in Touch</span>
           
          </p>
        </Card>
      </div>
    </nav>
  );
};

export default MainNavbar;
