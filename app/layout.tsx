import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({

  subsets: ["latin"],

  variable: "--font-inter",

});


export const metadata: Metadata = {

  title: "Sahara | Africa's Innovation Platform",

  description:
    "Launch ideas, fund innovation, and connect African creators with global supporters.",

};


export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {

  return (

    <html lang="en">

      <body className={inter.variable}>

        {children}

      </body>

    </html>

  );

}
