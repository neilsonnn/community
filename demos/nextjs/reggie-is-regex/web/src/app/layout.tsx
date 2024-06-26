import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reggie The Regex",
  description: "A living regex existentially pondering the nature of regexes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-black p-0 m-0 overflow-clip">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
