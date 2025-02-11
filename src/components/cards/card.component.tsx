import Link from "next/link";
import React from "react";

const Card = ({
  children,
  href,
  className,
  clickable = false,
  disabled,
  target = "",
}: {
  children: React.ReactNode;
  href?: string;
  className: string;
  disabled?: boolean;
  clickable?: boolean;
  target?: React.HTMLAttributeAnchorTarget;
}) => {
  return (
    <div
      className={`${className} rounded-xl border-2 shadow-3d ${
        clickable
          ? "cursor-pointer transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:scale-[98%]"
          : disabled?"cursor-default bg-gray-400 border-gray-600 shadow-gray-600 text-gray-600":""
      }`}
    >
      {clickable && href ? (
        <Link href={href} target={target}>
          {children}
        </Link>
      ) : (
        children
      )}
    </div>
  );
};

export default Card;
