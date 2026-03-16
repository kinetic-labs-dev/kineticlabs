import { laptops } from "./data/laptops"
import MachineCard from "./components/MachineCard"
import TrustBadges from "./components/TrustBadges"
import Hero from "./components/Hero"
import KineticStandard from "./components/KineticStandard"

export default function Home() {
  const bestValue = laptops.reduce((prev, current) =>
    current.price < prev.price ? current : prev
  )

  // 👑 TRUCO CTO: El gradiente dorado metálico con reflejos de luz
  const goldTextGradient = {
    background: "linear-gradient(135deg, #BF953F 0%, #FCF6BA 30%, #D4AF37 50%, #FBF5B7 70%, #AA771C 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block"
  };

  return (
    <main
      style={{
        background: "#f5f5f7", /* Fondo claro para toda la web */
        minHeight: "100vh",
        color: "#1d1d1f",
      }}
    >
      <Hero />
      <KineticStandard /> 

      <section
        style={{ padding: "60px 20px 20px 20px", maxWidth: "1200px", margin: "auto" }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "30px", textAlign: "center", fontWeight: "900", textTransform: "uppercase", ...goldTextGradient }}>
          🔥 MEJOR CALIDAD PRECIO
        </h2>
        <div style={{ maxWidth: "350px", margin: "auto" }}>
          <MachineCard laptop={bestValue} />
        </div>
      </section>

      <section
        style={{ padding: "60px 20px 100px 20px", maxWidth: "1200px", margin: "auto" }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "40px", textAlign: "center", fontWeight: "900", textTransform: "uppercase", ...goldTextGradient }}>
          EQUIPOS EN STOCK
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "30px" }}>
          {laptops.map((laptop) => (
            <MachineCard key={laptop.id} laptop={laptop} />
          ))}
        </div>
      </section>

      <TrustBadges />
    </main>
  )
}