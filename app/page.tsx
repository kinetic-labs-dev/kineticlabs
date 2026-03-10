import { laptops } from "./data/laptops"
import MachineCard from "./components/MachineCard"
import TrustBadges from "./components/TrustBadges"

export default function Home() {

  const bestValue = laptops.reduce((prev, current) =>
    current.price < prev.price ? current : prev
  )

  return (

    <main
      style={{
        background: "#0a0a0a",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
      }}
    >

      {/* HERO */}

      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
        }}
      >

        <h1
          style={{
            fontSize: "46px",
            marginBottom: "20px",
          }}
        >
          Kinetic Labs
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#aaa",
            marginBottom: "30px",
          }}
        >
          Equipos reacondicionados de alto rendimiento
        </p>

        <a
          href="https://wa.me/34694296601"
          target="_blank"
        >
          <button
            style={{
              background: "#25D366",
              color: "white",
              border: "none",
              padding: "16px 28px",
              fontSize: "18px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Contactar por WhatsApp
          </button>
        </a>

      </section>


      {/* MEJOR CALIDAD PRECIO */}

      <section
        style={{
          padding: "40px 20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >

        <h2
          style={{
            fontSize: "28px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          🔥 Mejor calidad-precio
        </h2>

        <div
          style={{
            maxWidth: "350px",
            margin: "auto",
          }}
        >

          <MachineCard laptop={bestValue} />

        </div>

      </section>


      {/* PORTÁTILES DISPONIBLES */}

      <section
        style={{
          padding: "60px 20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >

        <h2
          style={{
            fontSize: "28px",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Portátiles disponibles
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "30px",
          }}
        >

          {laptops.map((laptop) => (

            <MachineCard
              key={laptop.id}
              laptop={laptop}
            />

          ))}

        </div>

      </section>


      {/* SECCIÓN DE CONFIANZA */}

      <TrustBadges />

    </main>
  )
}