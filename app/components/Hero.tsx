import Image from "next/image";

export default function Hero() {
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
              boxSizing: "border-box"
            }}
          >
            Contactar por WhatsApp
          </a>
        </div>

        {/* LADO DERECHO: MACBOOK AIR GIGANTE */}
        <div
          style={{
            flex: "1 1 100%",
            position: "relative",
            height: "280px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px",
            width: "100%",
            maxWidth: "100vw",
            boxSizing: "border-box"
          }}
        >
          {/* Asegúrate de tener la foto en public/products/macbook-air/hero.png o .webp */}
          <Image
            src="/products/macbook-air/hero.png" 
            alt="MacBook Air M3 Elite"
            fill
            style={{ objectFit: "contain", zIndex: 10 }}
            priority
          />
          <div
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              background: "rgba(37, 211, 102, 0.15)",
              borderRadius: "50%",
              filter: "blur(50px)",
              zIndex: 1,
              maxWidth: "100%"
            }}
          />
        </div>
      </div>
    </section>
  );
}