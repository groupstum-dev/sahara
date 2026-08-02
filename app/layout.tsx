import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({

  subsets: ["latin"],

  variable: "--font-inter",

  display: "swap",

});


export const metadata: Metadata = {

  title: {

    default: "Sahara",

    template: "%s | Sahara",

  },


  description:
    "Sahara is a reward-based crowdfunding platform empowering African creators, entrepreneurs, and innovators through global support.",


  keywords: [

    "Sahara",

    "African innovation",

    "crowdfunding",

    "startups",

    "entrepreneurs",

    "creators",

    "funding",

    "social impact",

    "technology"

  ],


  authors: [

    {

      name: "Sahara",

    },

  ],


  creator: "Sahara",


  openGraph: {

    title:
      "Sahara | Empowering African Innovation Through Global Support",


    description:
      "Discover, support, and fund innovative projects created by African entrepreneurs and innovators.",


    type: "website",

    siteName: "Sahara",

  },


  twitter: {

    card: "summary_large_image",

    title:
      "Sahara | African Innovation Crowdfunding",


    description:
      "Support African creators building the future.",

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
