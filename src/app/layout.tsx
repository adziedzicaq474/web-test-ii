import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import bg from "../../public/assets/bg.png";
import { Providers } from "./provider";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toast/toaster";
import HeaderSelector from "@/components/headerSelector";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const myFont = localFont({
  src: "assets/fonts/my-font.woff2",
  variable: "--font-my-custom",
});

export const metadata: Metadata = {
  title: "Pumpbit",
  description: "Generated by create next app",
  icons: {
    icon: {
      url: "/assets/Logo-White.png",
      type: "image/png",
      sizes: "32x32",
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${myFont.variable}`}>
        <Providers>
          <div className="bg-gradient-bg min-h-screen min-w-screen relative">
            <div className="bg-donut-pattern  bg-center bg-cover bg-no-repeat">
              <HeaderSelector>{children}</HeaderSelector>
            </div>
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
