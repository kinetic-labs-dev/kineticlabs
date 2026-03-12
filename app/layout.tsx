export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ margin: 0, padding: 0, background: "#050505" }}>
        
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