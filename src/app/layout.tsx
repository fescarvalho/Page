import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fernando Carvalho | Portfolio de Engenharia de Software & Ciência de Dados",
  description: "Portfólio profissional focado em construção de pontes entre a engenharia de software e a inteligência de dados com interfaces modernas.",
  authors: [{ name: "Fernando Carvalho" }],
  keywords: ["Software Engineering", "Data Science", "React", "Next.js", "Portfolio"],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seu-portfolio.com",
    title: "Fernando Carvalho | Software Engineering & Data Science",
    description: "Construindo o futuro através de dados e código.",
    siteName: "Fernando Carvalho Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fernando Carvalho | Software Engineering & Data Science",
    description: "Engenharia de Software e Ciência de Dados com foco em performance e modernidade.",
  },
};

import CommandPalette from "@/components/ui/CommandPalette";
import MagneticCursor from "@/components/ui/MagneticCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <div className="noise" />
        <MagneticCursor />
        <CommandPalette />
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </body>
    </html>
  );
}
