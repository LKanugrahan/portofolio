import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/navbars/navbar-main.component";

export const metadata: Metadata = {
  title: "Langgeng Dev",
};

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} text-white font-nunito bg-neutral-900 antialiased h-screen w-screen flex flex-col overflow-hidden`}
      >
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
