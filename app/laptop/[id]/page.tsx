import { notFound } from "next/navigation";
import { laptops } from "../../data/laptops";
import ProductGallery from "../../components/ProductGallery";
import ProductReviews from "../../components/ProductReviews";
import ProductUrgency from "../../components/ProductUrgency";
import StickyBuyBar from "../../components/StickyBuyBar";
import TrustBadges from "../../components/TrustBadges";

export default function LaptopPage({ params }: { params: { id: string } }) {
  const laptop = laptops.find((l) => l.id === params.id);
  
  if (!laptop) {
    return notFound();
  }

  // Preparamos las fotos sin importar si en la BD se llaman "image" o "images"
  const laptopData = laptop as any;
  const imagesArray = laptopData.images ? laptopData.images : [laptopData.image];

  return (
    <main 
      style={{ 
        background: "#050505", 
        color: "white",        
        minHeight: "100vh", 
        paddingBottom: "120px", 
        fontFamily: "var(--font-geist-sans), -apple-system, sans-serif"
      }}
    >
      <div 
        style={{ 
          maxWidth: "1200px", 
          margin: "0 auto", 
          padding: "40px 20px",
          display: "flex",
          gap: "50px",
          flexWrap: "wrap"
        }}
      >
        <div style={{ flex: "1 1 500px" }}>
          <ProductGallery images={imagesArray} name={laptopData.name} />
        </div>

        <div style={{ flex: "1 1 400px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
            <span style={{ background: "#222", color: "#aaa", padding: "4px 10px", borderRadius: "6px", fontSize: "14px", fontWeight: "bold" }}>
              Reacondicionado Grado A
            </span>
          </div>
          
          <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "900", lineHeight: "1.1", marginBottom: "15px" }}>
            {laptopData.name}
          </h1>

          <div style={{ display: "flex", alignItems: "baseline", gap: "15px", marginBottom: "25px" }}>
            <span style={{ fontSize: "36px", fontWeight: "bold", color: "#25D366" }}>
              {laptopData.price}€
            </span>
            <span style={{ fontSize: "20px", textDecoration: "line-through", color: "#666" }}>
              {laptopData.originalPrice}€
            </span>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <ProductUrgency />
          </div>

          <div style={{ background: "#111", border: "1px solid #222", borderRadius: "16px", padding: "25px", marginBottom: "30px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "15px", color: "white" }}>Especificaciones Técnicas</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#aaa", fontSize: "15px", lineHeight: "1.8" }}>
              <li>💻 <strong style={{ color: "#ddd" }}>Procesador:</strong> {laptopData.cpu || laptopData.specs?.processor}</li>
              <li>⚡ <strong style={{ color: "#ddd" }}>RAM:</strong> {laptopData.ram || laptopData.specs?.ram}</li>
              <li>💾 <strong style={{ color: "#ddd" }}>Almacenamiento:</strong> {laptopData.storage || laptopData.specs?.storage}</li>
              <li>🖥️ <strong style={{ color: "#ddd" }}>Pantalla:</strong> {laptopData.screen || laptopData.specs?.screen}</li>
            </ul>
          </div>

          <a
            href="https://wa.me/34694296601"
            target="_blank"
            style={{
              display: "block",
              width: "100%",
              background: "#25D366",
              color: "white",
              padding: "18px",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "18px",
              textAlign: "center",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(37, 211, 102, 0.2)",
              marginBottom: "40px"
            }}
          >
            Comprar ahora por WhatsApp
          </a>

          <ProductReviews />
        </div>
      </div>

      <TrustBadges />
      <StickyBuyBar name={laptopData.name} price={laptopData.price} whatsappLink="https://wa.me/34694296601" />
    </main>
  );
}