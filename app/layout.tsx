import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morel Wagala | Portfolio logiciel",
  description:
    "Portfolio de projets personnels de Morel Wagala, développeur logiciel junior full-stack à Québec.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Morel Wagala | Portfolio logiciel",
    description:
      "Deux projets full-stack de Morel Wagala : YabaImmo et une plateforme de réservation de lavage auto à domicile.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
