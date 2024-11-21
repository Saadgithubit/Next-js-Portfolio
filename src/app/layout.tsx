import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Outfit, Urbanist } from "next/font/google";

import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import theme from "./theme";
import { ThemeProvider } from "@mui/material";
import FixedButton from "./components/fixedbutton";

const outfit = Outfit({ subsets: ["latin"], weight: ['500', '600', '700', '800', '900'], variable: '--font-outfit' })
const urbanist = Urbanist({ subsets: ["latin"], weight: ['200', '300', '400', '500', '600', '700'], variable: '--font-urbanist' })

export const metadata: Metadata = {
  title: "Saad Ahmed",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${urbanist.variable} antialiased`}
      >
        <ThemeProvider theme={theme}>
          <Analytics />
          <Navbar />
          <FixedButton />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
