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
        width: "100%", // Obliga a ocupar solo el ancho disponible
        maxWidth: "100vw",
        overflow: "hidden", // Corta lo que intente asomar
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
          justifyContent: "space-between",
          flexWrap: "wrap", // CLAVE: Permite que los elementos bajen de línea si no caben
          gap: "10px",
          boxSizing: "border-box"
        }}
      >
        {/* LOGO */}
        <Logo />

        {/* NAVEGACIÓN */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            fontSize: "14px",
            flexWrap: "wrap",
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
              whiteSpace: "nowrap" // Evita que la palabra WhatsApp se rompa
            }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}