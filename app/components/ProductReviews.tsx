export default function ProductReviews() {
  const reviews = [
    { name: "Carlos M.", text: "El portátil llegó en perfecto estado. Muy rápido y batería increíble.", rating: 5 },
    { name: "Laura G.", text: "La pantalla 4K es brutal. Muy recomendable por este precio.", rating: 5 },
    { name: "David R.", text: "Muy buen rendimiento para trabajo y edición. Envío rápido.", rating: 4 },
  ];

  return (
    <div style={{ background: "#111", borderRadius: "16px", padding: "25px", border: "1px solid #222", marginTop: "30px" }}>
      <h3 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "20px", color: "white" }}>
        ⭐ Opiniones de clientes
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {reviews.map((r, i) => (
          <div 
            key={i} 
            style={{ 
              borderBottom: i !== reviews.length - 1 ? "1px solid #222" : "none", 
              paddingBottom: i !== reviews.length - 1 ? "20px" : "0" 
            }}
          >
            {/* AQUÍ ARREGLAMOS LOS NOMBRES QUE SEÑALASTE */}
            <h4 style={{ fontWeight: "bold", color: "white", marginBottom: "5px" }}>{r.name}</h4>
            
            <div style={{ color: "#FFD700", marginBottom: "8px", fontSize: "14px" }}>
              {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
            </div>
            <p style={{ color: "#aaa", fontSize: "15px", lineHeight: "1.5" }}>{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}