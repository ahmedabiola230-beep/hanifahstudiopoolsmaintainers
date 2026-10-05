import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";

const jakarta = localFont({
  src: "./fonts/PlusJakartaSans-Variable.woff2",
  variable: "--font-jakarta",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cerulea Pools | Custom Pool Design, Build & Care in Austin, TX",
  description:
    "Cerulea Pools designs, builds, and maintains custom swimming pools across the Austin area. Honest quotes, one crew from start to finish, and water you can trust all year.",
  keywords: [
    "pool builder Austin",
    "pool maintenance",
    "pool construction",
    "pool renovation",
    "Cerulea Pools",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className="font-sans">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
