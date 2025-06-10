import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider} from '@clerk/nextjs'
const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Trend Sniper",
  description: "rendSniper uses real-time AI to hunt down high-demand digital products across Etsy, Gumroad, Shopify,and more — so you can flip them fast and profit first.",
  icons:'/logos/icons.svg'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}>
        <ClerkProvider>
        {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
