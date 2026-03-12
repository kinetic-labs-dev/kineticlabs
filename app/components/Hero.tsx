import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        background: "#0a0a0a",
        color: "white",
        overflow: "hidden",
        borderBottom: "1px solid #222",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* LADO IZQUIERDO: TEXTO */}
        <div style={{ flex: "1 1 100%", maxWidth: "600px" }}>
          <h1
            style={{
              fontSize: "clamp(32px, 8vw, 64px)",
              fontWeight: "900",
              lineHeight: "1.1",
              marginBottom: "20px",
              letterSpacing: "-1px",
              overflowWrap: "break-word", // Obliga a romper palabras gigantes
              wordBreak: "break-word",    // Obliga a romper palabras gigantes
              hyphens: "auto",
            }}
          >
            PORTÁTILES <br />
            REACONDICIONADOS <br />
            DE <span style={{ color: "#25D366" }}>ÉLITE</span>.
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 4vw, 20px)",
              color: "#aaa",
              marginBottom: "30px",
              lineHeight: "1.5",
              maxWidth: "100%",
            }}
          >
            Máximo rendimiento. Precio inteligente. <br />
            Inspección Kinetic de 40 puntos garantizada.
          </p>

          <a
            href="https://wa.me/34694296601"
            target="_blank"
            style={{
              display: "inline-block",
              background: "#25D366",
              color: "white",
              padding: "16px 32px",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "16px",
              textDecoration: "none",
              boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
              width: "100%",
              textAlign: "center",
            }}
          >
            Contactar por WhatsApp
          </a>
        </div>

        {/* LADO DERECHO: IMAGEN FLOTANDO */}
        <div
          style={{
            flex: "1 1 100%",
            position: "relative",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <Image
            src="/products/dell-xps-15/hero.webp"
            alt="Kinetic Labs Elite Laptop"
            fill
            style={{ objectFit: "contain", zIndex: 10 }}
            priority
          />
          {/* Efecto de luz verde de fondo (Glow) */}
          <div
            style={{
              position: "absolute",
              width: "250px",
              height: "250px",
              background: "rgba(37, 211, 102, 0.15)",
              borderRadius: "50%",
              filter: "blur(50px)",
              zIndex: 1,
            }}
          />
        </div>
      </div>
    </section>
  );
}