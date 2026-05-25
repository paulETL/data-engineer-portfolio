import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ebubechukwu Paul | Data Engineer",
  description: "Real-time Data Engineering Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-black text-white">{children}</body>
    </html>
  );
}
