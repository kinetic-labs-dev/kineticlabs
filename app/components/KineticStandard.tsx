export default function KineticStandard() {
  const steps = [
    { icon: "🔬", title: "Auditoría de 40 Puntos", desc: "Test de estrés térmico, de hardware y software antes de ser aprobado." },
    { icon: "🔋", title: "Baterías Certificadas", desc: "Solo aceptamos equipos con baterías en estado óptimo de retención." },
    { icon: "✨", title: "Mantenimiento Deep-Clean", desc: "Higienización ultrasónica y renovación de pasta térmica." },
    { icon: "🛡️", title: "Garantía de Élite", desc: "1 año de garantía Kinetic y soporte prioritario y directo por WhatsApp." }
  ];

  // Gradiente Azul Metálico
  const blueTextGradient = {
    background: "linear-gradient(135deg, #0202A4 0%, #7676FF 30%, #0303F7 50%, #7676FF 70%, #0202A4 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
  };

  return (
    <section style={{ padding: "80px 20px", background: "#ffffff", borderTop: "1px solid #e5e5ea", borderBottom: "1px solid #e5e5ea" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: "900", marginBottom: "15px", color: "#1d1d1f", letterSpacing: "-1px" }}>
          EL ESTÁNDAR <span style={blueTextGradient}>KINETIC</span>
        </h2>
        <p style={{ color: "#555", fontSize: "18px", marginBottom: "60px", maxWidth: "700px", margin: "0 auto 50px", lineHeight: "1.6" }}>
          No vendemos portátiles de segunda mano. Construimos máquinas reacondicionadas de élite preparadas para el máximo nivel de exigencia técnica.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px" }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              background: "#f5f5f7",
              border: "1px solid #e5e5ea",
              borderRadius: "16px",
              padding: "30px",
              display: "flex",               
              flexDirection: "column",       
              alignItems: "center",          
              textAlign: "center",           
            }}>
              <div style={{ fontSize: "40px", marginBottom: "20px" }}>{step.icon}</div>
              <h3 style={{ color: "#1d1d1f", fontSize: "20px", marginBottom: "12px", fontWeight: "bold" }}>{step.title}</h3>
              <p style={{ color: "#666", lineHeight: "1.6", fontSize: "15px" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}