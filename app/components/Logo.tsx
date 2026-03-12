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
      {/* Tu nuevo logo en PNG */}
      <Image
        src="/logo.png"
        alt="Kinetic Labs Logo"
        width={35}   /* Tamaño ajustado para el Header */
        height={35}
        style={{ objectFit: "contain" }}
        priority
      />
      {/* El texto de la marca */}
      <span 
        style={{ 
          color: "white", 
          fontSize: "20px", 
          fontWeight: "bold", 
          letterSpacing: "-0.5px" 
        }}
      >
        Kinetic Labs
      </span>
    </a>
  );
}