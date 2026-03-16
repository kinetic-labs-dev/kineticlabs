"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const heroImages = [
    "/products/macbook-air/mac1.png", 
    "/products/macbook-air/mac2.png",
    "/products/macbook-air/mac3.png",
    "/products/macbook-air/mac4.png",
    "/products/macbook-air/mac5.png",
    "/products/macbook-air/mac6.png",
  ];

  // Variables del dorado con reflejos
  const goldTextGradient = {
    background: "linear-gradient(135deg, #BF953F 0%, #FCF6BA 30%, #D4AF37 50%, #FBF5B7 70%, #AA771C 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block"
  };

  const goldButtonGradient = "linear-gradient(135deg, #BF953F 0%, #FCF6BA 20%, #D4AF37 50%, #FBF5B7 80%, #AA771C 100%)";

  return (
    <>
      <section style={{ background: "#f5f5f7", color: "#1d1d1f", width: "100%", maxWidth: "100vw", overflow: "hidden", borderBottom: "1px solid #e5e5ea", boxSizing: "border-box" }}>
        <style dangerouslySetInnerHTML={{__html: `
          .swipe-gallery::-webkit-scrollbar { display: none; }
          .swipe-gallery { -ms-overflow-style: none; scrollbar-width: none; }
          @keyframes goldPulse { 0%, 100% { color: #888; } 50% { color: #D4AF37; } }
          @keyframes modalFadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        `}} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "50px 20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", flexWrap: "wrap", boxSizing: "border-box", width: "100%", textAlign: "center" }}>
          
          <div style={{ flex: "1 1 100%", maxWidth: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center" }}>
            
            <h1 style={{ fontWeight: "900", lineHeight: "1.1", marginBottom: "15px", letterSpacing: "-1px", width: "100%", boxSizing: "border-box" }}>
              <span style={{ fontSize: "clamp(32px, 9vw, 64px)", display: "block" }}>PORTÁTILES</span>
              <span style={{ fontSize: "clamp(32px, 9vw, 64px)", display: "block" }}>DE <span style={goldTextGradient}>ÉLITE</span></span>
              <span style={{ fontSize: "clamp(24px, 6vw, 42px)", fontWeight: "800", color: "#1d1d1f", display: "block", marginTop: "8px", letterSpacing: "1px" }}>REACONDICIONADOS</span>
            </h1>

            <p style={{ fontSize: "clamp(15px, 4vw, 20px)", color: "#555", marginBottom: "40px", lineHeight: "1.5", maxWidth: "100%", boxSizing: "border-box" }}>
              Equipos profesionales reacondicionados y optimizados para el máximo rendimiento.
            </p>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "10px", width: "100%" }}>
              <h2 style={{ fontSize: "clamp(26px, 6vw, 38px)", fontWeight: "bold", margin: "0 0 5px 0", color: "#1d1d1f", letterSpacing: "-0.5px" }}>
                MacBook Air 15" M3
              </h2>
              <p style={{ fontSize: "clamp(14px, 3.5vw, 18px)", margin: "0 0 20px 0", color: "#555" }}>
                Máxima configuración. 24GB RAM. 2TB SSD.
              </p>
              
              <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "nowrap", width: "100%", maxWidth: "400px" }}>
                <button
                  onClick={() => setIsModalOpen(true)}
                  style={{ background: "transparent", cursor: "pointer", padding: "10px 16px", borderRadius: "50px", border: "2px solid #D4AF37", color: "#D4AF37", fontWeight: "600", fontSize: "clamp(13px, 3.5vw, 16px)", transition: "all 0.3s ease", whiteSpace: "nowrap", flex: "1", textAlign: "center" }}
                >
                  Más información
                </button>
                <a href="https://wa.me/34694296601" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 16px", borderRadius: "50px", background: goldButtonGradient, border: "none", color: "#000000", textDecoration: "none", fontWeight: "bold", fontSize: "clamp(13px, 3.5vw, 16px)", transition: "all 0.3s ease", whiteSpace: "nowrap", flex: "1", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  Comprar
                </a>
              </div>
            </div>
          </div>

          <div style={{ flex: "1.2 1 100%", position: "relative", height: "340px", display: "flex", alignItems: "center", marginTop: "10px", width: "100%", maxWidth: "100vw", boxSizing: "border-box" }}>
            <div style={{ position: "absolute", width: "250px", height: "250px", background: "rgba(212, 175, 55, 0.15)", borderRadius: "50%", filter: "blur(50px)", zIndex: 1, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />

            <div className="swipe-gallery" style={{ display: "flex", overflowX: "auto", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", width: "100%", height: "100%", zIndex: 10, gap: "20px", padding: "0 10px" }}>
              {heroImages.map((src, index) => (
                <div key={index} style={{ flex: "0 0 100%", scrollSnapAlign: "center", position: "relative", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Image src={src} alt={`MacBook vista ${index + 1}`} fill style={{ objectFit: "contain" }} priority={index === 0} />
                </div>
              ))}
            </div>

            {heroImages.length > 1 && (
               <div style={{ position: "absolute", bottom: "10px", left: "0", right: "0", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", color: "#888", fontSize: "14px", fontWeight: "bold", letterSpacing: "1px", zIndex: 11, animation: "goldPulse 2.5s infinite" }}>
                 <span style={{ fontSize: "18px" }}>⟵</span> Desliza <span style={{ fontSize: "18px" }}>⟶</span>
               </div>
            )}
          </div>
        </div>
      </section>

      {/* POP-UP MODAL */}
      {isModalOpen && (
        <div onClick={() => setIsModalOpen(false)} style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(255, 255, 255, 0.8)", backdropFilter: "blur(10px)", zIndex: 99999, display: "flex", justifyContent: "center", alignItems: "center", padding: "20px", boxSizing: "border-box" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: "#ffffff", border: "1px solid #e5e5ea", borderRadius: "24px", padding: "40px 30px 30px", width: "100%", maxWidth: "450px", position: "relative", animation: "modalFadeIn 0.3s ease-out", boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}>
            <button onClick={() => setIsModalOpen(false)} style={{ position: "absolute", top: "20px", right: "20px", background: "#f5f5f7", border: "none", width: "32px", height: "32px", borderRadius: "50%", color: "#1d1d1f", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div style={{ position: "relative", height: "120px", marginBottom: "20px" }}>
              <Image src="/products/macbook-air/mac1.png" fill style={{ objectFit: "contain" }} alt="MacBook M3" />
            </div>

            <h3 style={{ fontSize: "24px", fontWeight: "900", color: "#1d1d1f", textAlign: "center", marginBottom: "30px", letterSpacing: "-0.5px" }}>
              MacBook Air 15" M3
            </h3>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 35px 0", display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { label: "Procesador", desc: "Chip Apple M3 (CPU 8 núc. / GPU 10 núc.)" },
                { label: "Memoria", desc: "24GB Memoria Unificada" },
                { label: "Almacenamiento", desc: "2TB SSD NVMe de ultra alta velocidad" },
                { label: "Pantalla", desc: '15.3" Liquid Retina con True Tone' },
                { label: "Estado", desc: "Reacondicionado Grado A (Batería 100%)" },
                { label: "Garantía", desc: "1 año de Garantía Kinetic Élite" }
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "2px" }}>
                    <defs>
                      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#BF953F" />
                        <stop offset="50%" stopColor="#FCF6BA" />
                        <stop offset="100%" stopColor="#AA771C" />
                      </linearGradient>
                    </defs>
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div style={{ fontSize: "15px", lineHeight: "1.4" }}>
                    <span style={{ color: "#1d1d1f", fontWeight: "bold", display: "block" }}>{item.label}</span>
                    <span style={{ color: "#555" }}>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>

            <button onClick={() => setIsModalOpen(false)} style={{ width: "100%", padding: "16px", borderRadius: "12px", background: "#f5f5f7", border: "1px solid #e5e5ea", color: "#1d1d1f", fontSize: "16px", fontWeight: "bold", cursor: "pointer" }}>
              Cerrar especificaciones
            </button>
          </div>
        </div>
      )}
    </>
  );
}