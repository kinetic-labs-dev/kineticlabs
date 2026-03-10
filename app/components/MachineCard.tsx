import Link from "next/link"
import Image from "next/image"

export default function MachineCard({ laptop }: any) {

  const discount = Math.round(
    ((laptop.originalPrice - laptop.price) / laptop.originalPrice) * 100
  )

  return (

    <Link href={`/laptop/${laptop.id}`}>

      <div
        style={{
          background: "#111",
          borderRadius: "16px",
          padding: "24px",
          cursor: "pointer",
          transition: "0.25s",
          border: "1px solid #222",
        }}
      >

        {/* IMAGEN */}

        <div
          style={{
            position: "relative",
            width: "100%",
            height: "180px",
            marginBottom: "20px",
          }}
        >

          <Image
            src={`/products/${laptop.id}/hero.webp`}
            alt={laptop.name}
            fill
            style={{
              objectFit: "contain",
            }}
          />

        </div>

        {/* NOMBRE */}

        <h2
          style={{
            fontSize: "20px",
            marginBottom: "6px",
            color: "white",
          }}
        >
          {laptop.name}
        </h2>

        {/* CATEGORIA */}

        <p
          style={{
            color: "#aaa",
            marginBottom: "14px",
          }}
        >
          {laptop.category}
        </p>

        {/* PRECIOS */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >

          <div
            style={{
              fontSize: "22px",
              fontWeight: "bold",
              color: "#00ff9c",
            }}
          >
            {laptop.price}€
          </div>

          <div
            style={{
              color: "#777",
              textDecoration: "line-through",
              fontSize: "16px",
            }}
          >
            {laptop.originalPrice}€
          </div>

          <div
            style={{
              background: "#ff4d4f",
              color: "white",
              padding: "3px 6px",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            -{discount}%
          </div>

        </div>

      </div>

    </Link>

  )
}