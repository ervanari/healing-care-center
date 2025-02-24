import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jakcare",
  description: "Jakarta Care Center",
    icons : {
        icon : ['/globe.svg']
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
