import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { Footer } from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fancy",
  description: "The best online store in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <MobileNavigation />
        <Footer />
      </body>
    </html>
  );
}
