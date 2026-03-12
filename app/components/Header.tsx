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
          justifyContent: "space-between",
          gap: "10px",
          boxSizing: "border-box"
        }}
      >
        {/* LOGO: Intocable, tal y como pediste */}
        <Logo />

        {/* NAVEGACIÓN: Minimalismo puro estilo Apple */}
        <div
          style={{
            display: "flex",
            gap: "24px", /* Espaciado generoso para que respiren los iconos */
            alignItems: "center",
            color: "#f5f5f7", /* Blanco roto premium */
          }}
        >
          {/* 1. Lupa (Búsqueda) */}
          <button style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0, display: "flex" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          {/* 2. Bolsa (Carrito) */}
          <button style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0, display: "flex" }}>
            <svg width="18" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 8h14l1 14H4L5 8z"></path>
              <path d="M9 8V5a3 3 0 0 1 6 0v3"></path>
            </svg>
          </button>

          {/* 3. Menú de 2 líneas (Hamburguesa minimalista) */}
          <button style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0, display: "flex" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="10" x2="21" y2="10"></line>
              <line x1="3" y1="16" x2="21" y2="16"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}