"use client"

export default function ProductReviews() {

  const reviews = [
    {
      name: "Carlos M.",
      rating: 5,
      text: "El portátil llegó en perfecto estado. Muy rápido y batería increíble.",
    },
    {
      name: "Laura G.",
      rating: 5,
      text: "La pantalla 4K es brutal. Muy recomendable por este precio.",
    },
    {
      name: "David R.",
      rating: 4,
      text: "Muy buen rendimiento para trabajo y edición. Envío rápido.",
    },
  ]

  return (
    <div
      style={{
        marginTop: "40px",
        background: "white",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        ⭐ Opiniones de clientes
      </h2>

      {reviews.map((review, index) => (
        <div
          key={index}
          style={{
            marginBottom: "20px",
            borderBottom: "1px solid #eee",
            paddingBottom: "15px",
          }}
        >
          <div style={{ fontWeight: "bold" }}>
            {review.name}
          </div>

          <div style={{ color: "#ffaa00" }}>
            {"⭐".repeat(review.rating)}
          </div>

          <p style={{ marginTop: "5px", color: "#555" }}>
            {review.text}
          </p>
        </div>
      ))}
    </div>
  )
}