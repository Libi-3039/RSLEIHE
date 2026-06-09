import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RSLEIHE",
  description: "A Next.js 15 application with TypeScript and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
