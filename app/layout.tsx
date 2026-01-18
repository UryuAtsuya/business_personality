import type { Metadata } from "next";
import Script from "next/script";
import { M_PLUS_Rounded_1c, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-sans",
});

const mPlusRounded = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "AIビジネス人格診断",
  description: "AI時代の働き方を4軸で整理し、16タイプで実力を可視化する診断。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${notoSansJP.variable} ${mPlusRounded.variable} min-h-screen flex flex-col antialiased bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300`}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var stored=localStorage.getItem('theme');var media=window.matchMedia('(prefers-color-scheme: dark)');var system=media.matches?'dark':'light';var theme=stored==='light'||stored==='dark'?stored:system;document.documentElement.dataset.theme=theme;}catch(e){}})();`}
        </Script>
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
