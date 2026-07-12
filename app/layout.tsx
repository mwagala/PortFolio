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
      "Applications d'affaires, automatisation, jeux web et projets full-stack orientés stage en génie logiciel.",
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
