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
          padding: "16px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >

        {/* LOGO */}

        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Kinetic Labs
        </div>


        {/* NAVEGACIÓN */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            fontSize: "14px",
          }}
        >

          <a href="/" style={{ color: "#aaa" }}>
            Inicio
          </a>

          <a href="/" style={{ color: "#aaa" }}>
            Portátiles
          </a>

          <a
            href="https://wa.me/34694296601"
            target="_blank"
            style={{
              background: "#25D366",
              padding: "8px 14px",
              borderRadius: "8px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            WhatsApp
          </a>

        </div>

      </div>
    </header>
  )
}