import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kinetic Labs",
  description: "Portátiles reacondicionados de alto rendimiento",
};

// CERROJO ANTI-ZOOM MÓVIL
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body 
        className={`${geistSans.variable} ${geistMono.variable}`} 
        style={{ margin: 0, padding: 0, background: "#050505", overflowX: "hidden" }}
      >
        
        {/* LA CAJA FUERTE: Esto fuerza a que NADA pueda salir por los lados */}
        <div style={{ overflowX: "hidden", width: "100%", position: "relative", maxWidth: "100vw" }}>
          <Header />
          {children}
          <Footer />
        </div>

      </body>
    </html>
  );
}