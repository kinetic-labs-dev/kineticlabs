import Image from "next/image";

export default function Hero() {
  // 👈 AQUÍ PONES LAS RUTAS DE TUS IMÁGENES
  // Si tus fotos acaban en .webp o .jpg, cámbialo aquí abajo:
  const heroImages = [
    "/products/macbook-air/mac1.png", 
    "/products/macbook-air/mac2.png",
    "/products/macbook-air/mac3.png",
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
      {/* TRUCO CTO: Ocultar la barra de scroll nativa para un diseño más limpio */}
      <style dangerouslySetInnerHTML={{__html: `
        .swipe-gallery::-webkit-scrollbar { display: none; }
        .swipe-gallery { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "50px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
          boxSizing: "border-box",
          width: "100%",
          textAlign: "center"
        }}
      >
        {/* LADO IZQUIERDO: TEXTO */}
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
              marginBottom: "30px",
              lineHeight: "1.5",
              maxWidth: "100%",
              boxSizing: "border-box"
            }}
          >
            Equipos profesionales reacondicionados y optimizados para el máximo rendimiento.
          </p>

          <a
            href="https://wa.me/34694296601"
            target="_blank"
            style={{
              display: "inline-block",
              background: "#25D366",
              color: "white",
              padding: "16px 20px",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "16px",
              textDecoration: "none",
              boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
              width: "100%",
              maxWidth: "350px",
              textAlign: "center",
              boxSizing: "border-box",
              marginBottom: "10px"
            }}
          >
            Contactar por WhatsApp
          </a>
          
          <span style={{ fontSize: "12px", color: "#666", display: "flex", alignItems: "center", gap: "5px" }}>
            <span style={{ display: "inline-block", width: "8px", height: "8px", background: "#25D366", borderRadius: "50%", animation: "pulse 2s infinite" }}></span>
            Atención Inmediata
          </span>
        </div>

        {/* LADO DERECHO: GALERÍA DESLIZABLE */}
        <div
          style={{
            flex: "1 1 100%",
            position: "relative",
            height: "300px", // Altura de la galería
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
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
              scrollSnapType: "x mandatory", // Efecto imán al deslizar
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
                  flex: "0 0 100%", // Ocupa todo el ancho
                  scrollSnapAlign: "center", // Se centra al soltar el dedo
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
                  priority={index === 0} // Carga la primera foto al instante
                />
              </div>
            ))}
          </div>

          {/* Indicador visual "Desliza" (Solo aparece si hay más de 1 foto) */}
          {heroImages.length > 1 && (
             <div style={{ position: "absolute", bottom: "-20px", left: "0", right: "0", textAlign: "center", color: "#555", fontSize: "12px", zIndex: 11 }}>
               ← Desliza para ver más →
             </div>
          )}
        </div>
      </div>
    </section>
  );
}