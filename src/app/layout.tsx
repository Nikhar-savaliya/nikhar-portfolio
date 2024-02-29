import type { Metadata } from "next";
import { Noto_Sans_Display, Averia_Serif_Libre } from "next/font/google";

import "./globals.css";
import Header from "@/components/sections/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import { ModeToggle } from "@/components/ui/ThemeModeToggler";

const noto = Noto_Sans_Display({ subsets: ["latin"], variable: "--sans" });
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
      <body className={noto.variable + " " + averia.variable}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          {children}
          <Contact />
          {/* theme toggler */}
          <div className="fixed right-10 bottom-10  z-50 scale-125">
            <ModeToggle />
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
