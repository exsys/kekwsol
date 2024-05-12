import type { Metadata, Viewport } from "next";
import { Inter, Lilita_One } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lilita = Lilita_One({ weight: "400", subsets: ["latin"]});

export const metadata: Metadata = {
  title: "KEKW",
  description: "The one and only legend El Risitas is KEKW'ing through Solana.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${lilita.className} ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
