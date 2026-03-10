import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        background: "#0a0a0a",
        color: "white",
        fontFamily: "Arial",
        overflow: "hidden",
        borderBottom: "1px solid #222",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* LADO IZQUIERDO: TEXTO */}
        <div style={{ flex: "1 1 400px", maxWidth: "600px" }}>
          <h1
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: "900",
              lineHeight: "1.1",
              marginBottom: "20px",
              letterSpacing: "-1px",
            }}
          >
            PORTÁTILES <br />
            REACONDICIONADOS <br />
            DE <span style={{ color: "#25D366" }}>ÉLITE</span>.
          </h1>
          <p
            style={{
              fontSize: "20px",
              color: "#aaa",
              marginBottom: "40px",
              lineHeight: "1.5",
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
              fontSize: "18px",
              textDecoration: "none",
              boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
            }}
          >
            Contactar por WhatsApp
          </a>
        </div>

        {/* LADO DERECHO: IMAGEN FLOTANDO */}
        <div
          style={{
            flex: "1 1 400px",
            position: "relative",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
              width: "300px",
              height: "300px",
              background: "rgba(37, 211, 102, 0.15)",
              borderRadius: "50%",
              filter: "blur(60px)",
              zIndex: 1,
            }}
          />
        </div>
      </div>
    </section>
  );
}