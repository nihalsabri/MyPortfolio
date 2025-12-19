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
  title: "Nihal Sabri - Frontend Developer",
  description: "Portfolio of Nihal Sabri, a frontend developer specializing in creating engaging and user-friendly web applications.",
  keywords: [
    "Nihal Sabri",
    "Frontend Developer",
    "Portfolio",
    "Web Development",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "CSS",
    "HTML",
  ],
  authors: [{ name: "Nihal Sabri", url: "mailto: nihalsabri60@gmail.com" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
