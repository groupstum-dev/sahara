import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({

  subsets: ["latin"],

  variable: "--font-inter",

  display: "swap"

});


export const metadata: Metadata = {

  title: {

    default: "Sahara",

    template: "%s | Sahara"

  },


  description:
    "Sahara is a reward crowdfunding platform empowering African creators, entrepreneurs, and innovators through global support.",


  keywords: [

    "crowdfunding",

    "Africa",

    "innovation",

    "startups",

    "entrepreneurs",

    "creators"

  ],


  openGraph: {

    title:
      "Sahara | African Innovation Crowdfunding",

    description:
      "Support African innovators building the future.",

    type: "website",

    siteName: "Sahara"

  },


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
