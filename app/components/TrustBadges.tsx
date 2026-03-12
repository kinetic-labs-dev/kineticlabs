export default function TrustBadges() {
  const badges = [
    { icon: "🚚", title: "Envío 24/48h", desc: "A toda la península" },
    { icon: "🛡️", title: "1 Año de Garantía", desc: "Cobertura total Kinetic" },
    { icon: "💬", title: "Soporte Directo", desc: "Atención por WhatsApp" },
    { icon: "💳", title: "Pago Seguro", desc: "Múltiples métodos" }
  ];

  return (
    <section style={{ padding: "50px 20px", background: "#0a0a0a", borderTop: "1px solid #111" }}>
      <div style={{ 
        maxWidth: "1200px", 
        margin: "0 auto", 
        display: "flex", 
        justifyContent: "center", /* LA CLAVE PARA CENTRAR LOS ICONOS */
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "40px",
        textAlign: "center"
      }}>
        {badges.map((badge, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "200px" }}>
            <span style={{ fontSize: "36px", marginBottom: "10px" }}>{badge.icon}</span>
            <h4 style={{ color: "white", fontSize: "16px", fontWeight: "bold", marginBottom: "5px" }}>{badge.title}</h4>
            <p style={{ color: "#888", fontSize: "13px" }}>{badge.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}