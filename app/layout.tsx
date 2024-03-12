
import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import { ScrollProvider } from "./context/ScrollProvider";

const inter = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naruto Website",
  description: " Visit Naruto website  and explore the world of Ninja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` bg-main  ${inter.className}`}>
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
