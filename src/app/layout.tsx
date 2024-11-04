import type { Metadata } from "next";
import { Handlee, Roboto } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/navbars/navbar-main.component";

export const metadata: Metadata = {
  title: "Langgeng Dev",
};

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const handlee = Handlee({
  subsets: ["latin"],
  variable: "--font-handlee",
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${handlee.variable} h-screen w-screen text-white font-handlee bg-carbon antialiased`}
      >
        <MainNavbar />
        <div className="p-4">{children}</div>
      </body>
    </html>
  );
}
