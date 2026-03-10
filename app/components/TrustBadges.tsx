export default function TrustBadges() {
  return (
    <section
      style={{
        background: "#111",
        padding: "40px 20px",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "30px",
          textAlign: "center",
        }}
      >
        <div>
          <div style={{ fontSize: "32px", marginBottom: "10px" }}>
            🛡
          </div>
          <h3 style={{ marginBottom: "6px" }}>
            Garantía 12 meses
          </h3>
          <p style={{ color: "#aaa", fontSize: "14px" }}>
            Todos nuestros equipos están cubiertos por garantía.
          </p>
        </div>

        <div>
          <div style={{ fontSize: "32px", marginBottom: "10px" }}>
            ⚡
          </div>
          <h3 style={{ marginBottom: "6px" }}>
            Envío rápido
          </h3>
          <p style={{ color: "#aaa", fontSize: "14px" }}>
            Entrega en 24-48 horas en la mayoría de pedidos.
          </p>
        </div>

        <div>
          <div style={{ fontSize: "32px", marginBottom: "10px" }}>
            🔧
          </div>
          <h3 style={{ marginBottom: "6px" }}>
            Equipos revisados
          </h3>
          <p style={{ color: "#aaa", fontSize: "14px" }}>
            Portátiles revisados y probados por técnicos especializados.
          </p>
        </div>

        <div>
          <div style={{ fontSize: "32px", marginBottom: "10px" }}>
            💬
          </div>
          <h3 style={{ marginBottom: "6px" }}>
            Soporte directo
          </h3>
          <p style={{ color: "#aaa", fontSize: "14px" }}>
            Atención directa por WhatsApp para resolver cualquier duda.
          </p>
        </div>
      </div>
    </section>
  )
}