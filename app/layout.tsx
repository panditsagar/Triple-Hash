import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";
import ScrollBar from "@/components/ScrollBar/ScrollBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Triple Hash",
  description: "Innovate. Integrate. Elevate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
        ></script>
        <meta name="facebook-domain-verification" content="cno5w9daoatrzcgo9md0hpuhip9hb5" />
      </head>
      <body
        className={`${geistSans.variable}${raleway.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollBar />
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />
        <script src='https://www.noupe.com/embed/019f27da846070008f6a1ef1bdc4f91bb802.js'></script>
      </body>
    </html>
  );
}
