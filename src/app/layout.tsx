import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AppNav from "@/app/_components/app-nav";
import { publicAssetPath } from "@/app/_lib/site-paths";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  applicationName: "Next.js Learning Hub",
  title: {
    default: "Next.js Learning Hub",
    template: "%s | Next.js Learning Hub",
  },
  description: "A Next.js App Router learning sample.",
  icons: {
    apple: [{ url: publicAssetPath("/apple-icon.png"), type: "image/png" }],
    icon: [{ url: publicAssetPath("/icon.png"), type: "image/png" }],
    shortcut: [publicAssetPath("/icon.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppNav />
        {children}
      </body>
    </html>
  );
}
