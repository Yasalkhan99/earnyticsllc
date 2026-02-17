import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Earnytics LLC - Business Solutions",
  description: "Comprehensive business solutions to take your new business to the next level",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
