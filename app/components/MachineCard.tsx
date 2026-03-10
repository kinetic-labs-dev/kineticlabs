import Link from "next/link";
import Image from "next/image";

export default function MachineCard({ laptop }: { laptop: any }) {
  // TRUCO CTO: Extraemos la foto de forma segura para las tarjetas
  const imageSrc = laptop.images ? laptop.images[0] : laptop.image;

  return (
    <Link 
      href={`/laptop/${laptop.id}`} 
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div 
        style={{ 
          background: "#111", 
          borderRadius: "16px", 
          padding: "20px", 
          border: "1px solid #222",
          transition: "transform 0.2s, borderColor 0.2s",
          cursor: "pointer"
        }}
      >
        <Image 
          src={imageSrc} 
          alt={laptop.name} 
          width={300} 
          height={200} 
          style={{ objectFit: "contain", width: "100%", height: "auto" }} 
        />
        <h3 style={{ fontSize: "22px", marginTop: "15px", color: "white" }}>
          {laptop.name}
        </h3>
        <p style={{ color: "#888", fontSize: "14px", marginTop: "5px" }}>
          {laptop.cpu || laptop.specs?.processor}
        </p>
        <div style={{ marginTop: "15px", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "24px", fontWeight: "bold", color: "#25D366" }}>
            {laptop.price}€
          </span>
          <span style={{ textDecoration: "line-through", color: "#666" }}>
            {laptop.originalPrice}€
          </span>
        </div>
      </div>
    </Link>
  );
}