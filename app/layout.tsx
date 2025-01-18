import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
          <title>Stitched By Izz</title>
          <meta name="description" content="A handmade clothing portfolio by Isabella." />
          <link rel="icon" href="./favicon.png" />
      </head>
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
