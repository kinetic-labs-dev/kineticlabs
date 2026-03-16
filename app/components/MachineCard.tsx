"use client"; // 👈 LA LÍNEA CLAVE PARA PERMITIR INTERACTIVIDAD

import Image from "next/image";
import Link from "next/link";

// Definimos la estructura de datos que recibe la tarjeta
interface Laptop {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  cpu?: string;
  ram?: string;
  storage?: string;
}

export default function MachineCard({ laptop }: { laptop: Laptop }) {
  const electricBlue = "#0303F7";

  return (
    <Link href={`/laptop/${laptop.id}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
      <div
        style={{
          background: "#EBEBEB", /* El fondo grisáceo */
          borderRadius: "16px",
          padding: "30px 20px",
          textAlign: "center",
          transition: "transform 0.2s ease, boxShadow 0.2s ease",
          boxSizing: "border-box",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        /* Efecto hover interactivo */
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {/* IMAGEN DEL EQUIPO */}
        <div style={{ position: "relative", width: "100%", height: "180px", marginBottom: "25px" }}>
          <Image
            src={laptop.image}
            alt={laptop.name}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* TÍTULO */}
        <h3 style={{ fontSize: "20px", fontWeight: "bold", color: "#1d1d1f", marginBottom: "8px", letterSpacing: "-0.5px" }}>
          {laptop.name}
        </h3>

        {/* SUBTÍTULO (Especificaciones) */}
        <p style={{ fontSize: "14px", color: "#666", marginBottom: "20px", lineHeight: "1.4" }}>
          {laptop.cpu ? `${laptop.cpu} / ${laptop.ram} / ${laptop.storage}` : "Máxima configuración técnica"}
        </p>

        {/* PRECIOS */}
        <div style={{ marginTop: "auto", display: "flex", alignItems: "baseline", justifyContent: "center", gap: "8px" }}>
          {/* Precio final en Azul Eléctrico */}
          <span style={{ fontSize: "26px", fontWeight: "900", color: electricBlue, letterSpacing: "-1px" }}>
            {laptop.price}€
          </span>
          {/* Precio original tachado */}
          <span style={{ fontSize: "16px", color: "#999", textDecoration: "line-through", fontWeight: "500" }}>
            / {laptop.originalPrice}€
          </span>
        </div>
      </div>
    </Link>
  );
}