import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OrbitSocialIcons from "@/components/OrbitSocialIcons";
import BookingModal from "@/components/BookingModal";
import SiteLoader from "@/components/SiteLoader";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beach Travel",
  description: "Escape to the Coast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} antialiased`}>
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
