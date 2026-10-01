import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrbitSocialIcons from "@/components/OrbitSocialIcons";
import BookingModal from "@/components/BookingModal";
import SiteLoader from "@/components/SiteLoader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AST Solutions | India's Premium Tempo Traveller Service",
  description: "Experience the best and fastest tempo traveller and cab services in India with AST Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <SiteLoader />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
          <OrbitSocialIcons />
          <BookingModal />
        </SmoothScroll>
      </body>
    </html>
  );
}
