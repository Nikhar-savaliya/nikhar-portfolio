import type { Metadata } from "next";
import { Averia_Serif_Libre } from "next/font/google";
import { GeistSans } from "geist/font/sans";

import "./globals.css";
import Header from "@/components/sections/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import { ModeToggle } from "@/components/ui/ThemeModeToggler";
import { Analytics } from "@vercel/analytics/react";

const averia = Averia_Serif_Libre({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--serif",
});

export const metadata: Metadata = {
  title: "Nikhar Savaliya",
  description:
    "This website serves as a portfolio, showcasing the web development skills of Nikhar Savaliya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={averia.variable + " " + GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          {children}
          <Analytics />
          <Contact />
          {/* theme toggler */}
          <div className="fixed right-10 bottom-10  z-50 scale-150">
            <ModeToggle />
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
