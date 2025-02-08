import React from "react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="h-full flex items-center justify-center">{children}</section>;
}
