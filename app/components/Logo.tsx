export default function Logo() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        fontWeight: "bold",
        fontSize: "20px",
        color: "white",
      }}
    >
      {/* ICONO */}

      <svg
        width="28"
        height="28"
        viewBox="0 0 100 100"
        fill="none"
      >
        <polygon
          points="50,5 95,27 95,73 50,95 5,73 5,27"
          fill="#25D366"
        />
      </svg>

      {/* TEXTO */}

      <span>Kinetic Labs</span>
    </div>
  )
}