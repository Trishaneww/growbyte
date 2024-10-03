import type { Metadata } from "next";
import localFont from "next/font/local";
import { Questrial} from "next/font/google";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Questrial({ weight: ["400"], subsets: ["latin"] });
const mont = Montserrat({weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] })


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
       className={cn(
        "min-h-screen antialiased",
        mont.className
      )}
      >
        {children}
      </body>
    </html>
  );
}
