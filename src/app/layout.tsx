import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JW Tech | Connect With Me",
  description:
    "Find all of JW Tech's social links in one place — portfolio, Instagram, Facebook, LinkedIn, and GitHub.",
  keywords: ["JW Tech", "social links", "developer", "portfolio", "web developer"],
  openGraph: {
    title: "JW Tech | Connect With Me",
    description:
      "Find all of JW Tech's social links in one place — portfolio, Instagram, Facebook, LinkedIn, and GitHub.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
