import Image from "next/image";

export default function Logo() {
  return (
    <a 
      href="/" 
      style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "10px", 
        textDecoration: "none" 
      }}
    >
      {/* Tu logo en PNG */}
      <Image
        src="/logo.png"
        alt="Kinetic Labs Logo"
        width={32}
        height={32}
        style={{ objectFit: "contain" }}
        priority
      />
      {/* Texto reducido a la mitad de tamaño */}
      <span 
        style={{ 
          color: "white", 
          fontSize: "12px", /* Estaba en 20px */
          fontWeight: "bold", 
          letterSpacing: "0.5px",
          textTransform: "uppercase" /* Queda más premium en tamaño pequeño */
        }}
      >
        Kinetic Labs
      </span>
    </a>
  );
}