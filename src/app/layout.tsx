import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Amine Lazzem | Entraîneur de Football",
  description:
    "Portfolio de Mohamed Amine Lazzem – Entraîneur de football spécialisé dans la formation des jeunes. Diplômé ISSEP Ksar Saïd, Licence STAPS.",
  keywords: [
    "entraîneur football",
    "formation jeunes",
    "coach football",
    "STAPS",
    "ISSEP Ksar Saïd",
    "Manouba",
    "Tunisie",
  ],
  authors: [{ name: "Mohamed Amine Lazzem" }],
  creator: "Mohamed Amine Lazzem",
  openGraph: {
    type: "website",
    locale: "fr_TN",
    url: "https://amine-lazzem.vercel.app",
    title: "Mohamed Amine Lazzem | Entraîneur de Football",
    description:
      "Portfolio de Mohamed Amine Lazzem – Entraîneur de football spécialisé dans la formation des jeunes.",
    siteName: "Mohamed Amine Lazzem Portfolio",
    images: [
      {
        url: "/stadium.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed Amine Lazzem – Entraîneur de Football",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Amine Lazzem | Entraîneur de Football",
    description:
      "Portfolio de Mohamed Amine Lazzem – Entraîneur de football spécialisé dans la formation des jeunes.",
    images: ["/stadium.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
