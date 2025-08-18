import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello Page | Welcome",
  description: "A modern, elegant hello page showcasing beautiful web design",
  keywords: ["hello", "welcome", "modern design", "web page"],
  authors: [{ name: "Your App" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}