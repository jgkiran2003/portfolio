import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import personal from "./data/personal.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${personal.name} - ${personal.role}`,
  description: `Portfolio of ${personal.name}, a software engineer building beautiful and functional web experiences.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}