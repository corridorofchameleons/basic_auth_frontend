import type { Metadata } from "next";
import "./globals.css";
import Header from "../../components/header";

export const metadata: Metadata = {
  title: "Test Auth"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
        {children}
      </main>
      </body>
    </html>
  );
}
