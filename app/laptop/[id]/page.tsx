import { laptops } from "../../data/laptops"
import ProductGallery from "../../components/ProductGallery"
import StickyBuyBar from "../../components/StickyBuyBar"
import ProductReviews from "../../components/ProductReviews"
import ProductUrgency from "../../components/ProductUrgency"

export default async function LaptopPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params

  const laptop = laptops.find((l) => l.id === id)

  if (!laptop) {
    return <div>Laptop not found</div>
  }

  const images = [
    "/products/dell-xps-15/hero.webp",
    "/products/dell-xps-15/frontal.webp",
    "/products/dell-xps-15/teclado.webp",
    "/products/dell-xps-15/lateral.webp",
    "/products/dell-xps-15/trasera.webp",
    "/products/dell-xps-15/closed.webp",
    "/products/dell-xps-15/closed-front.webp",
  ]

  const discount = Math.round(
    ((laptop.originalPrice - laptop.price) / laptop.originalPrice) * 100
  )

  const savings = laptop.originalPrice - laptop.price

  const message = encodeURIComponent(
    `Hola, estoy interesado en el ${laptop.name} que tenéis en Kinetic Labs.`
  )

  const whatsappLink = `https://wa.me/34694296601?text=${message}`

  return (
    <>
      <main
        style={{
          background: "#f6f6f6",
          minHeight: "100vh",
          padding: "20px",
          fontFamily: "Arial",
          maxWidth: "500px",
          margin: "auto",
          paddingBottom: "120px",
        }}
      >
        <ProductGallery images={images} name={laptop.name} />

        <div
          style={{
            background: "#ff4d4f",
            color: "white",
            display: "inline-block",
            padding: "6px 10px",
            borderRadius: "6px",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          🔥 -{discount}%
        </div>

        <h1
          style={{
            fontSize: "30px",
            marginBottom: "8px",
          }}
        >
          {laptop.name}
        </h1>

        <div style={{ marginBottom: "10px" }}>
          <span
            style={{
              textDecoration: "line-through",
              color: "#999",
              marginRight: "10px",
              fontSize: "18px",
            }}
          >
            {laptop.originalPrice}€
          </span>

          <span
            style={{
              fontSize: "30px",
              color: "#25D366",
              fontWeight: "bold",
            }}
          >
            {laptop.price}€
          </span>
        </div>

        <div
          style={{
            color: "#25D366",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Ahorras {savings}€
        </div>

        <ProductUrgency />

        <ul
          style={{
            lineHeight: "32px",
            marginBottom: "30px",
            fontSize: "18px",
          }}
        >
          <li>CPU: {laptop.cpu}</li>
          <li>RAM: {laptop.ram}</li>
          <li>Storage: {laptop.storage}</li>
          <li>Screen: {laptop.screen}</li>
        </ul>

        <ProductReviews />

        <a href={whatsappLink} target="_blank">
          <button
            style={{
              background: "#25D366",
              color: "white",
              border: "none",
              width: "100%",
              padding: "18px",
              fontSize: "18px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
              marginTop: "30px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            Comprar ahora por WhatsApp
          </button>
        </a>
      </main>

      <StickyBuyBar
        name={laptop.name}
        price={laptop.price}
        whatsappLink={whatsappLink}
      />
    </>
  )
}