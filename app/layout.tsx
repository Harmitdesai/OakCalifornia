import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oak California | General Contracting & Construction",
  description:
    "Oak California is a full-service construction and contracting company serving California. We specialize in residential remodeling, commercial construction, custom builds, and project management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
