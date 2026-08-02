import "./globals.css";


export const metadata = {

  title: "Sahara",

  description:
    "Reward crowdfunding platform for African innovators"

};



export default function RootLayout({

  children

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="en">


      <body>

        {children}

      </body>


    </html>

  );

}
