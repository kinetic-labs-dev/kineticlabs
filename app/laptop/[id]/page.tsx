import { laptops } from "./data/laptops"
import MachineCard from "./components/MachineCard"
import TrustBadges from "./components/TrustBadges"
import Hero from "./components/Hero"
import KineticStandard from "./components/KineticStandard" // 👈 1. AÑADE ESTA IMPORTACIÓN ARRIBA

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
      }}
    >
      {/* HERO PROFESIONAL */}
      <Hero />

      {/* NUEVO: EL ESTÁNDAR KINETIC (Justo debajo del Hero) */}
      <KineticStandard /> 

      {/* MEJOR CALIDAD PRECIO */}
      <section
        style={{
          padding: "60px 20px 20px 20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "30px",
            textAlign: "center",
            fontWeight: "bold"
          }}
        >
          🔥 Mejor calidad-precio
        </h2>
        <div style={{ maxWidth: "350px", margin: "auto" }}>
          <MachineCard laptop={bestValue} />
        </div>
      </section>

      {/* PORTÁTILES DISPONIBLES */}
      <section
        style={{
          padding: "60px 20px 100px 20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "40px",
            textAlign: "center",
            fontWeight: "bold"
          }}
        >
          Equipos en stock
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "30px",
          }}
        >
          {laptops.map((laptop) => (
            <MachineCard key={laptop.id} laptop={laptop} />
          ))}
        </div>
      </section>

      {/* SECCIÓN DE CONFIANZA */}
      <TrustBadges />
    </main>
  )
}