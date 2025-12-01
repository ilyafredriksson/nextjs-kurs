import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: '%s | Min Next.js App',
    default: 'Min Next.js App',
  },
  description: 'En modern webbapplikation byggd med Next.js',
  keywords: ['Next.js', 'React', 'JavaScript', 'Webbutveckling'],
  authors: [{ name: 'Ditt Namn' }],
  creator: 'Ditt Namn',
  metadataBase: new URL('https://example.com'),
  
  // Viewport meta tag för responsiv design
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  
  // Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: 'Min Next.js App',
    description: 'En modern webbapplikation byggd med Next.js',
    url: 'https://example.com',
    siteName: 'Min Next.js App',
    locale: 'sv_SE',
    type: 'website',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Min Next.js App',
    description: 'En modern webbapplikation byggd med Next.js',
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body
       className={`${geistSans.variable} ${geistMono.variable} font-sans`}  
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
