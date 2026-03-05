import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fodilu Akorede — Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in backend infrastructure, distributed systems, and AI-powered products. 8+ years building systems that scale.",
  keywords: [
    "software engineer",
    "backend developer",
    "distributed systems",
    "AI engineer",
    "Toronto",
    "Python",
    "TypeScript",
    "AWS",
    "microservices",
  ],
  authors: [{ name: "Fodilu Akorede" }],
  openGraph: {
    title: "Fodilu Akorede — Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in backend infrastructure, distributed systems, and AI-powered products.",
    url: "https://fodiluakorede.com",
    siteName: "Fodilu Akorede",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fodilu Akorede — Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in backend infrastructure, distributed systems, and AI-powered products.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
