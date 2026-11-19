import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Morel Wagala | Portfolio logiciel",
  description:
    "Portfolio de Morel Wagala, étudiant en informatique à l'Université Laval et développeur logiciel full-stack à Québec.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Morel Wagala | Portfolio logiciel",
    description:
      "Les projets de Morel Wagala comprennent YabaImmo, une plateforme de réservation de lavage auto à domicile et un jeu de tic-tac-toe événementiel.",
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
