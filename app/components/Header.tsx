import Logo from "./Logo"

export default function Header() {
  return (
    <header
      style={{
        background: "#0a0a0a",
        borderBottom: "1px solid #222",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        boxSizing: "border-box"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "12px 15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Mantiene logo a un lado y nav al otro
          gap: "10px",
          boxSizing: "border-box"
        }}
      >
        {/* LOGO */}
        <Logo />

        {/* NAVEGACIÓN (Solo textos) */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            fontSize: "14px",
          }}
        >
          <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
            Inicio
          </a>

          <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
            Portátiles
          </a>
        </div>
      </div>
    </header>
  )
}