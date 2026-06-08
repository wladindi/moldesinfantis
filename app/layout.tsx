import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://biblioteca-moldes-infantis.example.com"),
  title: {
    default: "Biblioteca Premium de Moldes Infantis | +150 Moldes Prontos",
    template: "%s | Biblioteca Premium de Moldes Infantis",
  },
  description:
    "Pare de perder horas criando moldes do zero. Acesse mais de 150 moldes infantis profissionais prontos para imprimir, cortar e costurar. Acesso imediato por R$ 37,90.",
  keywords: [
    "moldes infantis",
    "moldes de costura infantil",
    "moldes PDF",
    "costura para iniciantes",
    "moldes para imprimir",
    "biblioteca de moldes",
    "moldes infantis prontos",
  ],
  authors: [{ name: "Biblioteca Premium de Moldes Infantis" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Biblioteca Premium de Moldes Infantis",
    description:
      "+150 moldes infantis prontos para imprimir, cortar e costurar. Acesso imediato.",
    siteName: "Biblioteca Premium de Moldes Infantis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biblioteca Premium de Moldes Infantis",
    description: "+150 moldes infantis prontos para imprimir. R$ 37,90.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f43f6f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${display.variable}`}>
      <body>
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
