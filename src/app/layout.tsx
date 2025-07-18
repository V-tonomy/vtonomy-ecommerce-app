import "reflect-metadata";
import { Inter } from "next/font/google";
import { Metadata } from "next";

import "./globals.css";
import React, { JSX } from "react";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Vtonomy Ecommerce",
  description: "For Vietnamese, For technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
