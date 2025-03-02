import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "../components/Header";
import MaxWidthWrapper from "../components/ui/MaxWidthWrapper";
import QueryClientProvider from "@/providers/QueryClientProvider";


const Inter = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Rentima ",
  description: "Rent Most Modern Cars Easily!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${Inter.variable} antialiased`}>
          <Header />
          <MaxWidthWrapper>
            <QueryClientProvider>
            {children}
            </QueryClientProvider>
          
          </MaxWidthWrapper>
        </body>
      </html>
    </ClerkProvider>
  )
}
