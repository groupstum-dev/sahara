import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({

  subsets: ["latin"],

  variable: "--font-inter",

});


export const metadata: Metadata = {

  title: {

    default: "Sahara",

    template: "%s | Sahara",

  },


  description:
    "Reward crowdfunding platform connecting African creators, entrepreneurs, and innovators with global supporters.",


  keywords: [

    "crowdfunding",

    "Africa",

    "innovation",

    "startups",

    "entrepreneurs",

    "creators",

    "social impact"

  ],


  openGraph: {

    title: "Sahara | African Innovation Crowdfunding",

    description:
      "Support African innovators and help bring impactful ideas to life.",

    type: "website",

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
