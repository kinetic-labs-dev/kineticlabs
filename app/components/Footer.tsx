export default function Footer() {
  return (
    <footer
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid #222",
        padding: "60px 20px 30px 20px",
        color: "#888",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            fontWeight: "bold",
            color: "white",
            fontSize: "20px",
            marginBottom: "15px",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
            <polygon points="50,5 95,27 95,73 50,95 5,73 5,27" fill="#25D366" />
          </svg>
          Kinetic Labs
        </div>

        <p style={{ marginBottom: "30px", fontSize: "14px", lineHeight: "1.6" }}>
          Equipos profesionales reacondicionados y optimizados <br />
          para el máximo rendimiento.
        </p>

        <div
          style={{
            borderTop: "1px solid #222",
            paddingTop: "20px",
            fontSize: "12px",
          }}
        >
          © {new Date().getFullYear()} Kinetic Labs. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}