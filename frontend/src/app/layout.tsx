import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

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
      <body className="h-screen bg-smite-blue">
        <nav className="w-full border-t-2 border-smite-gold bg-smite-dark-blue text-smite-light-gold uppercase text-xl">
          <ul className="flex justify-center items-center h-full *:h-full *:px-4 *:py-2 md:*:px-16">
            <li className="hover:bg-smite-blue">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:bg-smite-blue">
              <Link href={"/players"}>Players</Link>
            </li>
            <li className="hover:bg-smite-blue">
              <Link href={"/matches"}>Matches</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html >
  );
}
