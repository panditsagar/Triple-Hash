import type { Metadata } from "next";
import Script from "next/script";
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
  other: {
    "facebook-domain-verification": "cno5w9daoatrzcgo9md0hpuhip9hb5",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${raleway.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3KCXVLLY1J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-3KCXVLLY1J');
          `}
        </Script>

        {/* Cloudflare Turnstile */}
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
        />

        <ScrollBar />
        <Navbar />
        {children}
        <ScrollToTop />
        <Footer />

        <Script
          src="https://www.noupe.com/embed/019f27da846070008f6a1ef1bdc4f91bb802.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
