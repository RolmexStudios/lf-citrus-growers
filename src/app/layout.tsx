import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BackgroundShift } from "@/components/shared/background-shift";
import { MomentumScroll } from "@/components/shared/momentum-scroll";
import { siteChrome } from "@/lib/site-content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const chrome = siteChrome();

export const metadata: Metadata = {
  title: chrome.businessName,
  description: chrome.description || chrome.businessName,
  icons: chrome.faviconUrl ? { icon: chrome.faviconUrl } : undefined,
  openGraph: {
    title: chrome.businessName,
    description: chrome.description || chrome.businessName,
    images: chrome.shareImageUrl ? [chrome.shareImageUrl] : undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-nav="on-light"
      data-scroll-behavior="smooth"
      className={inter.variable}
    >
      <body>
        {children}
        <BackgroundShift />
        <MomentumScroll />
      </body>
    </html>
  );
}
