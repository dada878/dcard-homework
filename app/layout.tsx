import { config } from "@fortawesome/fontawesome-svg-core";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "@fortawesome/fontawesome-svg-core/styles.css";

import Navbar from "@/components/navbar/navbar";
import "@/styles/globals.css";
import { defaultSEO } from "@/utils/seo";

const Provider = dynamic(() => import("@/components/utilities/provider"), {
  ssr: true,
});

config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = defaultSEO();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-mirage-100 text-black transition dark:bg-mirage-1000 dark:text-white`}
      >
        <Provider>
          <div className="z-30">
            <NextTopLoader
              shadow={false}
              showSpinner={false}
              crawl={true}
              color="#0078be"
            />
          </div>

          <Navbar />
          <div className="mt-14">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
