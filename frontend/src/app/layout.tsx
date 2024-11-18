import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Smite Toernooi",
  description: "De Boys Smite Toernooi 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-smite-blue">
        <Navbar />
        {children}
      </body>
    </html >
  );
}
