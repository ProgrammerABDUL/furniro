import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";

// Importing Components
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import GoToTop from "@/components/GoToTop/GoToTop";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Home - Furniro",
  description: "Explore Furniro's wide range of premium furniture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
      <body className='bg-white'>
        <Navbar />
        {children}
        <GoToTop />
        <Footer />
      </body>
    </html>
  );
}
