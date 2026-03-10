"use client"

import { useEffect, useState } from "react"

export default function ProductUrgency() {

  const [viewers, setViewers] = useState(0)

  useEffect(() => {

    const randomViewers = Math.floor(Math.random() * 8) + 4
    setViewers(randomViewers)

  }, [])

  return (
    <div
      style={{
        background: "#fff7e6",
        border: "1px solid #ffd591",
        padding: "14px",
        borderRadius: "10px",
        marginTop: "20px",
        marginBottom: "20px",
        fontSize: "15px",
        lineHeight: "22px"
      }}
    >
      <div style={{fontWeight:"bold"}}>
        ⚡ Solo quedan 3 unidades
      </div>

      <div style={{color:"#8c6d1f"}}>
        {viewers} personas están viendo este producto ahora
      </div>
    </div>
  )
}