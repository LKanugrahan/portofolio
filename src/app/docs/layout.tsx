import React from "react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
