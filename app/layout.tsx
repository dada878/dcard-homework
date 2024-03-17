import type { Metadata } from "next";

import { Inter } from "next/font/google";

import Navbar from "@/components/global/navbar";
import "@/assets/globals.css";

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

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
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-mirage-100 text-black dark:text-white dark:bg-mirage-1000 transition`}>
        <Navbar />
        <div className="mt-14">{children}</div>
      </body>
    </html>
  );
}
