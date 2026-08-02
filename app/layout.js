export const metadata = {
  title: "Sahara",
  description: "Reward-based crowdfunding platform for African innovators"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
