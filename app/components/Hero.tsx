import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div
      style={{
        background: "#050505", // Fondo ultra oscuro
        color: "white",
        fontFamily: "Arial", // Lo cambiaremos a Geist después
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "100px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px",
          flexWrap: "wrap", // Responsivo básico
        }}
      >
        {/* LADO IZQUIERDO: Texto y Botón */}
        <div style={{ flex: "1 1 500px", maxWidth: "600px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "900",
              lineHeight: "1.0",
              marginBottom: "15px",
              letterSpacing: "-2px",
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
              maxWidth: "500px",
              lineHeight: "1.5",
            }}
          >
            Máximo rendimiento. Precio inteligente. <br />
            Inspección Kinetic de 40 puntos garantizada.
          </p>

          <Link
            href="#laptops" // Apunta a la sección de portátiles (que añadiremos luego)
            style={{
              display: "inline-block",
              background: "#25D366", // Verde WhatsApp/Tech
              color: "white",
              padding: "18px 40px",
              borderRadius: "50px",
              fontWeight: "bold",
              fontSize: "18px",
              textDecoration: "none",
              transition: "transform 0.2s",
              boxShadow: "0 10px 30px rgba(37, 211, 102, 0.3)",
            }}
          >
            VER CATÁLOGO
          </Link>
        </div>

        {/* LADO DERECHO: El Portátil Flotando (Placeholders por ahora) */}
        <div
          style={{
            flex: "1 1 500px",
            height: "500px",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Un placeholder visual para que sepas dónde irá la imagen real */}
          <div
            style={{
              width: "500px",
              height: "350px",
              background: "rgba(34, 34, 34, 0.5)",
              border: "2px dashed #333",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#444",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            [IMAGEN DEL PORTÁTIL FLOTANDO]
          </div>
          
          {/* Efectos de luz sutiles */}
          <div
            style={{
              position: "absolute",
              width: "150px",
              height: "150px",
              background: "rgba(37, 211, 102, 0.1)",
              borderRadius: "50%",
              filter: "blur(50px)",
              top: "10%",
              right: "20%",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "250px",
              height: "250px",
              background: "rgba(37, 211, 102, 0.05)",
              borderRadius: "50%",
              filter: "blur(80px)",
              bottom: "10%",
              left: "10%",
            }}
          />
        </div>
      </div>
    </div>
  );
}