"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const waText = encodeURIComponent("¡Hola! He visto vuestra página de Kinetic Labs y ...");
  const waLink = `https://wa.me/34694296601?text=${waText}`;

  return (
    <>
      <header style={{ 
        background: "#0a0a0a", 
        borderBottom: "1px solid #222", 
        padding: "15px 20px",
        position: "sticky",
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          
          <Logo />

          <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
            
            {/* ICONO WHATSAPP */}
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: "flex", alignItems: "center" }}
              aria-label="Contactar por WhatsApp"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.38c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.662-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.575-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>

            {/* ICONO BOLSA DE LA COMPRA */}
            <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }} aria-label="Carrito">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </button>

            {/* ICONO MENÚ HAMBURGUESA */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }} 
              aria-label="Menú"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>

          </div>
        </div>
      </header>

      {/* OVERLAY DEL MENÚ DESPLEGABLE */}
      {isMenuOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "#000000", /* Fondo negro */
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          boxSizing: "border-box"
        }}>
          {/* Botón de cerrar (X) a la derecha */}
          <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px 0" }}>
            <button 
              onClick={() => setIsMenuOpen(false)}
              style={{ background: "none", border: "none", cursor: "pointer", color: "white", padding: "10px" }}
              aria-label="Cerrar menú"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Enlaces del menú (Alineados a la IZQUIERDA) */}
          <nav style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "24px", 
            marginTop: "30px", 
            alignItems: "flex-start", /* CLAVE: Alineación a la izquierda */
            paddingLeft: "20px" /* Margen izquierdo para que no se pegue al borde de la pantalla */
          }}>
            <a 
              href="#" 
              onClick={() => setIsMenuOpen(false)} 
              style={{ color: "white", fontSize: "22px", textDecoration: "none", fontWeight: "500", letterSpacing: "0.5px" }}
            >
              MacBook Air
            </a>
            
            <a 
              href="#" 
              onClick={() => setIsMenuOpen(false)} 
              style={{ color: "white", fontSize: "22px", textDecoration: "none", fontWeight: "500", letterSpacing: "0.5px" }}
            >
              MacBook Pro
            </a>
            
            <a 
              href="#" 
              onClick={() => setIsMenuOpen(false)} 
              style={{ color: "white", fontSize: "22px", textDecoration: "none", fontWeight: "500", letterSpacing: "0.5px" }}
            >
              Surface Pro <em style={{ fontStyle: "italic", fontWeight: "400" }}>Microsoft</em>
            </a>
            
            <a 
              href="#" 
              onClick={() => setIsMenuOpen(false)} 
              style={{ color: "white", fontSize: "22px", textDecoration: "none", fontWeight: "500", letterSpacing: "0.5px" }}
            >
              HP
             </a>
          </nav>
        </div>
      )}
    </>
  );
}