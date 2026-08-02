import "./globals.css";

export const metadata = {
  title: "Sahara | African Innovation Crowdfunding",
  description:
    "A reward-based crowdfunding platform connecting African innovators with global supporters."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
