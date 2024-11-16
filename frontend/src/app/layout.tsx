import type { Metadata } from "next";
import "./globals.css";

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
      <body className="h-screen flex justify-center items-center">
        {children}
      </body>
    </html>
  );
}
