import Logo from "./Logo" // Asegúrate de importar el logo

export default function Header() {
  return (
    <header
      style={{
        background: "#0a0a0a",
        borderBottom: "1px solid #222",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >

        {/* LOGO */}
        <Logo />

        {/* NAVEGACIÓN */}
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

          <a
            href="https://wa.me/34694296601"
            target="_blank"
            style={{
              background: "#25D366",
              padding: "8px 12px",
              borderRadius: "8px",
              color: "white",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}