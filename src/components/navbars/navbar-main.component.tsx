import Link from "next/link";
import React from "react";

const MainNavbar = () => {
  return (
    <nav className="sticky top-0 h-[8%] flex items-center bg-neutral-900 py-2">
      <Link href="/" className="font-bold text-3xl mx-5">
        <span className="text-amber-400">L</span> Dev<span className="text-amber-400">.</span>
      </Link>
      <div className="flex justify-center gap-4">
      </div>
    </nav>
  );
};

export default MainNavbar;
