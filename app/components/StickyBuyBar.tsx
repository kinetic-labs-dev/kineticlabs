"use client"

export default function StickyBuyBar({
  name,
  price,
  whatsappLink,
}: {
  name: string
  price: number
  whatsappLink: string
}) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        background: "white",
        borderTop: "1px solid #eee",
        padding: "12px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 -4px 12px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <div>
        <div style={{ fontSize: "14px", color: "#666" }}>
          {name}
        </div>

        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "#25D366",
          }}
        >
          {price}€
        </div>
      </div>

      <a href={whatsappLink} target="_blank">
        <button
          style={{
            background: "#25D366",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Comprar
        </button>
      </a>
    </div>
  )
}