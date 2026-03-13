import { laptops } from "./data/laptops"
import MachineCard from "./components/MachineCard"
import TrustBadges from "./components/TrustBadges"
import Hero from "./components/Hero"
import KineticStandard from "./components/KineticStandard"

export default function Home() {
  const bestValue = laptops.reduce((prev, current) =>
    current.price < prev.price ? current : prev
  )

  return (
    <main
      style={{
        background: "#050505",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Hero />
      <KineticStandard /> 

      <section
        style={{
          padding: "60px 20px 20px 20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* TÍTULO EN VERDE */}
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "30px",
            textAlign: "center",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "#25D366" 
          }}
        >
          🔥 MEJOR CALIDAD PRECIO
        </h2>
        <div style={{ maxWidth: "350px", margin: "auto" }}>
          <MachineCard laptop={bestValue} />
        </div>
      </section>

      <section
        style={{
          padding: "60px 20px 100px 20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {/* TÍTULO EN VERDE */}
        <h2
          style={{
            fontSize: "28px",
            marginBottom: "40px",
            textAlign: "center",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "#25D366" 
          }}
        >
          EQUIPOS EN STOCK
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

      <TrustBadges />
    </main>
  )
}