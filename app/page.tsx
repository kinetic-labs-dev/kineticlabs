import { laptops } from "./data/laptops"
import MachineCard from "./components/MachineCard"
import TrustBadges from "./components/TrustBadges"
import Hero from "./components/Hero"
import KineticStandard from "./components/KineticStandard"

export default function Home() {
  const bestValue = laptops.reduce((prev, current) =>
    current.price < prev.price ? current : prev
  )

  // 👑 NUEVO TRUCO CTO: El gradiente Azul Metálico con reflejos de neón
  // Usando tu color base #0303F7
  const blueTextGradient = {
    background: "linear-gradient(135deg, #0202A4 0%, #7676FF 30%, #0303F7 50%, #7676FF 70%, #0202A4 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block"
  };

  return (
    <main
      style={{
        background: "#f5f5f7", /* Mantenemos fondo claro premium */
        minHeight: "100vh",
        color: "#1d1d1f",
      }}
    >
      <Hero />
      <KineticStandard /> 

      <section
        style={{ padding: "60px 20px 20px 20px", maxWidth: "1200px", margin: "auto" }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "30px", textAlign: "center", fontWeight: "900", textTransform: "uppercase", ...blueTextGradient }}>
          🔥 MEJOR CALIDAD PRECIO
        </h2>
        <div style={{ maxWidth: "350px", margin: "auto" }}>
          <MachineCard laptop={bestValue} />
        </div>
      </section>

      <section
        style={{ padding: "60px 20px 100px 20px", maxWidth: "1200px", margin: "auto" }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "40px", textAlign: "center", fontWeight: "900", textTransform: "uppercase", ...blueTextGradient }}>
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