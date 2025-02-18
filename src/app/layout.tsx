import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Instrument_Sans } from 'next/font/google';

export const metadata: Metadata = {
  title: "Scott Robertson",
  description: "Generated with Next, My CV",
};

const instrument = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-Instrument', 
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-Montserrat', 
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${instrument.variable}`}>
        {children}
    </html>
  );
}
