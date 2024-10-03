import type { Metadata } from "next";
import localFont from "next/font/local";
import { Questrial} from "next/font/google";
import "./globals.css";

const inter = Questrial({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GrowByte",
  description: "Marketing company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`inter.className antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
