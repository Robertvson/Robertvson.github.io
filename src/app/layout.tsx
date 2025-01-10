import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";



const montserrat = Montserrat({
  variable: "--font-Montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scott Robertson",
  description: "Generated with Next, My CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body 
        className="bg-stone-50"
      >
        {children}
      </body>
    </html>
  );
}
