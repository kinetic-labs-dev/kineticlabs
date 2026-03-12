import Logo from "./Logo"

export default function Footer() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid #222", padding: "60px 20px", textAlign: "center" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
        
        <Logo />
        
        <p style={{ color: "#888", marginTop: "20px", fontSize: "16px", lineHeight: "1.6", whiteSpace: "nowrap" }}>
          Equipos profesionales reacondicionados y optimizados <br />
          para el máximo rendimiento.
        </p>
        
        <div style={{ marginTop: "40px", color: "#444", fontSize: "14px" }}>
          &copy; {new Date().getFullYear()} Kinetic Labs. Todos los derechos reservados.
        </div>

      </div>
    </footer>
  )
}