import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
