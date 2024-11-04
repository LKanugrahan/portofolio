import Link from "next/link";
import React from "react";

const MainNavbar = () => {
  return (
    <nav className="sticky top-0 h-[8%] flex items-center bg-carbon">
      <Link href="/" className="font-bold text-3xl mx-5">
        <span className="text-gold">L</span> Dev<span className="text-gold">.</span>
      </Link>
      <div className="flex justify-center gap-4">
        <Link href="/docs">Docs</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
};

export default MainNavbar;
