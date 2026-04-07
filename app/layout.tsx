import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bishal Deb Roy | Junior Software Engineer",
  description: "Creative and detail-oriented Software Engineer specializing in building accessible and optimized web apps. Inspired by Attack on Titan.",
  keywords: ["Software Engineer", "React", "Next.js", "TypeScript", "Web Developer", "Bangladesh"],
  authors: [{ name: "Bishal Deb Roy" }],
  openGraph: {
    title: "Bishal Deb Roy | Portfolio",
    description: "Junior Software Engineer - Building accessible and optimized web apps",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
