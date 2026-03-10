"use client"

import { useState } from "react"
import Image from "next/image"

export default function ProductGallery({
  images,
  name,
}: {
  images: string[]
  name: string
}) {
  const [active, setActive] = useState(0)

  return (
    <div
      style={{
        width: "100%",
        marginBottom: "20px",
      }}
    >
      {/* IMAGEN PRINCIPAL */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "320px",
          marginBottom: "16px",
        }}
      >
        <Image
          src={images[active]}
          alt={name}
          fill
          style={{
            objectFit: "contain",
          }}
          priority
        />
      </div>

      {/* MINIATURAS */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          overflowX: "auto",
          paddingBottom: "4px",
        }}
      >
        {images.map((img, index) => (
          <div
            key={img}
            onClick={() => setActive(index)}
            style={{
              minWidth: "70px",
              height: "70px",
              borderRadius: "8px",
              border:
                active === index
                  ? "2px solid #25D366"
                  : "2px solid transparent",
              padding: "4px",
              cursor: "pointer",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <Image
              src={img}
              alt={name}
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}