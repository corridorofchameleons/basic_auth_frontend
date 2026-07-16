import type { Metadata } from "next";
import "./globals.css";
import Header from "../../components/header";
import { getUserData } from "../../utils/cookies";
import { UserProvider } from "../../providers/UserProvider";

export const metadata: Metadata = {
  title: "Test Auth"
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  let user = null

  const userData = await getUserData()
  if (userData) {
    user = {
      id: userData.sub,
      email: userData.email,
      role: userData.role
    }
  }

  return (
    <html lang="en">
      <body>
        <UserProvider user={user}>
          <Header />
          <main>
          {children}
        </main>
        </UserProvider>

      </body>
    </html>
  );
}
