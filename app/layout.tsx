import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

const gotham = localFont({
  src: [
    {
      path: "../public/font/GothamPro.ttf",
      weight: "400",
    },
    {
      path: "../public/font/GothamPro-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/font/GothamPro-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/font/GothamPro-Light.ttf",
      weight: "300",
    },
  ],
  variable: "--font-gotham",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gotham.variable} font-sans bg-neutral-100`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
