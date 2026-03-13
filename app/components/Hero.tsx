import Image from "next/image";

export default function Hero() {
  const heroImages = [
    "/products/macbook-air/mac1.png", 
    "/products/macbook-air/mac2.png",
    "/products/macbook-air/mac3.png",
    "/products/macbook-air/mac4.png",
    "/products/macbook-air/mac5.png",
    "/products/macbook-air/mac6.png",
  ];

  return (
    <section
      style={{
        background: "#0a0a0a",
        color: "white",
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        borderBottom: "1px solid #222",
        boxSizing: "border-box"
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        .swipe-gallery::-webkit-scrollbar { display: none; }
        .swipe-gallery { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes greenPulse {
          0%, 100% { color: #888; }
          50% { color: #25D366; }
        }
      `}} />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "50px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px", 
          flexWrap: "wrap",
          boxSizing: "border-box",
          width: "100%",
          textAlign: "center"
        }}
      >
        {/* LADO IZQUIERDO: TEXTOS PRINCIPALES */}
        <div style={{ flex: "1 1 100%", maxWidth: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1
            style={{
              fontWeight: "900",
              lineHeight: "1.1",
              marginBottom: "15px",
              letterSpacing: "-1px",
              width: "100%",
              boxSizing: "border-box"
            }}
          >
            <span style={{ fontSize: "clamp(32px, 9vw, 64px)", display: "block" }}>
              PORTÁTILES
            </span>
            <span style={{ fontSize: "clamp(32px, 9vw, 64px)", display: "block" }}>
              DE <span style={{ color: "#25D366" }}>ÉLITE</span>
            </span>
            <span 
              style={{ 
                fontSize: "clamp(24px, 6vw, 42px)", 
                fontWeight: "800",
                color: "white", 
                display: "block", 
                marginTop: "8px", 
                letterSpacing: "1px", 
              }}
            >
              REACONDICIONADOS
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(15px, 4vw, 20px)",
              color: "#aaa",
              marginBottom: "40px",
              lineHeight: "1.5",
              maxWidth: "100%",
              boxSizing: "border-box"
            }}
          >
            Equipos profesionales reacondicionados y optimizados para el máximo rendimiento.
          </p>

          {/* BLOQUE APPLE CARD CON BOTONES EN 1 LÍNEA */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "10px", width: "100%" }}>
            <h2 style={{ fontSize: "clamp(26px, 6vw, 38px)", fontWeight: "bold", margin: "0 0 5px 0", color: "white", letterSpacing: "-0.5px" }}>
              MacBook Air 15" M3
            </h2>
            <p style={{ fontSize: "clamp(14px, 3.5vw, 18px)", margin: "0 0 20px 0", color: "#888" }}>
              Máxima configuración. 24GB RAM. 2TB SSD.
            </p>
            
            {/* AQUÍ ESTÁ LA MAGIA: flexWrap "nowrap" para forzar 1 sola línea */}
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "nowrap", width: "100%", maxWidth: "400px" }}>
              <a
                href="#stock"
                style={{
                  padding: "10px 16px", /* Padding ajustado */
                  borderRadius: "50px",
                  border: "2px solid #25D366",
                  color: "#25D366",
                  textDecoration: "none",
                  fontWeight: "600",
                  fontSize: "clamp(13px, 3.5vw, 16px)", /* Fuente dinámica */
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap", /* Prohíbe que el texto del botón se parta */
                  flex: "1", /* Hace que ambos botones ocupen lo mismo */
                  textAlign: "center"
                }}
              >
                Más información
              </a>
              <a
                href="https://wa.me/34694296601"
                target="_blank"
                style={{
                  padding: "10px 16px", /* Padding ajustado */
                  borderRadius: "50px",
                  background: "#25D366",
                  border: "2px solid #25D366",
                  color: "#050505", 
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "clamp(13px, 3.5vw, 16px)", /* Fuente dinámica */
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap", /* Prohíbe que el texto del botón se parta */
                  flex: "1", /* Hace que ambos botones ocupen lo mismo */
                  textAlign: "center"
                }}
              >
                Comprar
              </a>
            </div>
          </div>
        </div>

        {/* LADO DERECHO: GALERÍA DESLIZABLE */}
        <div
          style={{
            flex: "1 1 100%",
            position: "relative",
            height: "300px",
            display: "flex",
            alignItems: "center",
            marginTop: "0px",
            width: "100%",
            maxWidth: "100vw",
            boxSizing: "border-box"
          }}
        >
          {/* Luz de fondo */}
          <div
            style={{
              position: "absolute",
              width: "250px",
              height: "250px",
              background: "rgba(37, 211, 102, 0.15)",
              borderRadius: "50%",
              filter: "blur(50px)",
              zIndex: 1,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
          />

          {/* Carrusel Swipe */}
          <div 
            className="swipe-gallery"
            style={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              width: "100%",
              height: "100%",
              zIndex: 10,
              gap: "20px",
              padding: "0 10px"
            }}
          >
            {heroImages.map((src, index) => (
              <div 
                key={index}
                style={{
                  flex: "0 0 100%", 
                  scrollSnapAlign: "center", 
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  src={src}
                  alt={`Kinetic Labs MacBook vista ${index + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                  priority={index === 0} 
                />
              </div>
            ))}
          </div>

          {/* INDICADOR VISUAL */}
          {heroImages.length > 1 && (
             <div style={{
               position: "absolute",
               bottom: "10px", 
               left: "0",
               right: "0",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               gap: "10px",
               color: "#888",
               fontSize: "14px",
               fontWeight: "bold",
               letterSpacing: "1px",
               zIndex: 11,
               animation: "greenPulse 2.5s infinite"
             }}>
               <span style={{ fontSize: "18px" }}>⟵</span>
               Desliza
               <span style={{ fontSize: "18px" }}>⟶</span>
             </div>
          )}
        </div>
      </div>
    </section>
  );
}