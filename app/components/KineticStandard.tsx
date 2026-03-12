export default function KineticStandard() {
  const steps = [
    { 
      icon: "🔬", 
      title: "Auditoría de 40 Puntos", 
      desc: "Cada equipo pasa por un test de estrés térmico, de hardware y software antes de ser aprobado." 
    },
    { 
      icon: "🔋", 
      title: "Baterías Certificadas", 
      desc: "Solo aceptamos equipos con baterías en estado óptimo de retención. Autonomía profesional." 
    },
    { 
      icon: "✨", 
      title: "Mantenimiento Deep-Clean", 
      desc: "Higienización ultrasónica y renovación de pasta térmica de alto rendimiento." 
    },
    { 
      icon: "🛡️", 
      title: "Garantía de Élite", 
      desc: "1 año de garantía Kinetic y soporte prioritario y directo a través de WhatsApp." 
    }
  ];

  return (
    <section style={{ padding: "80px 20px", background: "#050505", borderTop: "1px solid #111", borderBottom: "1px solid #111" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
        {/* Título SIN el punto final */}
        <h2 style={{ fontSize: "clamp(28px, 5vw, 44px)", fontWeight: "900", marginBottom: "15px", color: "white", letterSpacing: "-1px" }}>
          EL ESTÁNDAR <span style={{ color: "#25D366" }}>KINETIC</span>
        </h2>
        <p style={{ color: "#aaa", fontSize: "18px", marginBottom: "60px", maxWidth: "700px", margin: "0 auto 50px", lineHeight: "1.6" }}>
          No vendemos portátiles de segunda mano. Construimos máquinas reacondicionadas de élite preparadas para el máximo nivel de exigencia técnica.
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px"
        }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              background: "#111",
              border: "1px solid #222",
              borderRadius: "16px",
              padding: "30px",
              textAlign: "left",
              transition: "transform 0.3s ease, borderColor 0.3s ease",
            }}>
              <div style={{ fontSize: "40px", marginBottom: "20px" }}>{step.icon}</div>
              <h3 style={{ color: "white", fontSize: "20px", marginBottom: "12px", fontWeight: "bold" }}>{step.title}</h3>
              <p style={{ color: "#888", lineHeight: "1.6", fontSize: "15px" }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}