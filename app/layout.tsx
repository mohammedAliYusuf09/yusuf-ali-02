import type { Metadata } from "next";
import { Ovo, Outfit } from "next/font/google";
import "./globals.css";


type FontWeight = '400' | '500' | '600' | '700';
type FontWeightB = '400';

// Define a type for font subsets
type FontSubset = 'latin';

// Define a type for the font configuration
interface FontConfig {
  subsets: FontSubset[];
  weight: FontWeight[];
}
interface FontConfigB {
  subsets: FontSubset[];
  weight: FontWeightB[];
}


const outfit = Outfit({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
} as FontConfig);

const ovo = Ovo({
  subsets: ["latin"],
  weight: ['400']
} as FontConfigB);


export const metadata: Metadata = {
  title: "Yusuf Ali",
  description: "frontend web developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
