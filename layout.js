import "./globals.css";

export const metadata = {
  title: "Tejas S Shetty | CSE Student & Developer",
  description: "Portfolio of Tejas S Shetty — Computer Science Engineering student, developer and community builder.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}