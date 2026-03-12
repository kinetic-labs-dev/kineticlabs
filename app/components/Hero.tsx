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
          justifyContent: "space-between",
          gap: "30px",
          flexWrap: "wrap",
          boxSizing: "border-box",
          width: "100%"
        }}
      >
        {/* LADO IZQUIERDO: TEXTO */}
        <div style={{ flex: "1 1 100%", maxWidth: "100%", boxSizing: "border-box" }}>
          <h1
            style={{
              fontSize: "clamp(26px, 8vw, 64px)", // Reducido el tamaño mínimo
              fontWeight: "900",
              lineHeight: "1.1",
              marginBottom: "15px",
              letterSpacing: "-1px",
              overflowWrap: "anywhere", // LA REGLA NUCLEAR: rompe la palabra donde sea necesario
              wordBreak: "break-word",
              width: "100%",
              boxSizing: "border-box"
            }}
          >
            PORTÁTILES <br />
            REACONDICIONADOS <br />
            DE <span style={{ color: "#25D366" }}>ÉLITE</span>.
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 4vw, 20px)",
              color: "#aaa",
              marginBottom: "30px",
              lineHeight: "1.5",
              maxWidth: "100%",
              wordBreak: "break-word",
              boxSizing: "border-box"
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
              padding: "16px 15px", // Ajustado padding para móvil
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "16px",
              textDecoration: "none",
              boxShadow: "0 4px 15px rgba(37, 211, 102, 0.3)",
              width: "100%",
              textAlign: "center",
              boxSizing: "border-box" // CLAVE para que no se salga
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
          <Image
            src="/products/dell-xps-15/hero.webp"
            alt="Kinetic Labs Elite Laptop"
            fill
            style={{ objectFit: "contain", zIndex: 10 }}
            priority
          />
          {/* Efecto de luz verde */}
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
