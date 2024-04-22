import type { Metadata } from "next";
import { Inter, Questrial } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
});
// const secondary = Questrial({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-secondary",
// });

export const metadata: Metadata = {
  title: "Waiyan Phyoaung",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
