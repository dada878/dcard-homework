import type { Metadata } from "next";

import { Inter } from "next/font/google";

import Navbar from "@/components/global/navbar";
import "@/assets/globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dada's Blog",
  description: "我會在這裡分享各種技術文章及日常生活中有趣的事物",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
