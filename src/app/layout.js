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

export const metadata = {
  title: "Axolotron",
  description: "IT Service Provider, Academy, Elite, IT, AI, Axolotron",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.jpg" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Academy, IT, Axolotron, Solutions, Elite Course, AI, Corporate, Ecommerce, Healthcare, AI Talks, AI Workshop, AI Bootcamp, Corporate Upskilling, clients, case studies, contact us" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
