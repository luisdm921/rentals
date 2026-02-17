import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer, WhatsAppButton } from "@/components";

const siteUrl = "https://rentals-houses.vercel.app";

export const metadata: Metadata = {
  title: "Renta de Casas - Encuentra tu Hogar Ideal",
  description:
    "Encuentra la casa perfecta para rentar. Amplio catálogo de propiedades en las mejores ubicaciones. Proceso rápido, seguro y transparente.",
  keywords: [
    "renta de casas",
    "casas en renta",
    "alquiler de casas",
    "renta de propiedades",
    "casas amuebladas",
    "renta residencial",
    "alquiler de viviendas",
    "rentas",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "Renta de Casas",
    title: "Renta de Casas - Encuentra tu Hogar Ideal",
    description:
      "Encuentra la casa perfecta para rentar. Amplio catálogo de propiedades en las mejores ubicaciones.",
    images: [
      {
        url: `${siteUrl}/images/hero-house.jpg`,
        width: 1200,
        height: 630,
        alt: "Casas en Renta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renta de Casas - Encuentra tu Hogar Ideal",
    description:
      "Encuentra la casa perfecta para rentar. Amplio catálogo de propiedades en las mejores ubicaciones.",
    images: [`${siteUrl}/images/hero-house.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
