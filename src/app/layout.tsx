import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header";
import { UserProvider } from "../providers/UserProvider";

export const metadata: Metadata = {
  title: "Test Auth"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <UserProvider>
          <Header />
          <main>
          {children}
          </main>
        </UserProvider>

      </body>
    </html>
  );
}
