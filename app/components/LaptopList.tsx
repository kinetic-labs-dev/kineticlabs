import { laptops } from "../data/laptops"

export default function LaptopList() {
  return (
    <section style={{padding:"80px",textAlign:"center"}}>

      <h2 style={{fontSize:"36px",marginBottom:"40px"}}>
        Available Machines
      </h2>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
        gap:"30px"
      }}>

        {laptops.map((laptop) => (

          <div key={laptop.id}
          style={{
            background:"#111",
            padding:"25px",
            borderRadius:"12px",
            textAlign:"left"
          }}>

            <h3 style={{fontSize:"20px"}}>
              {laptop.name}
            </h3>

            <p style={{color:"#9CA3AF"}}>
              {laptop.cpu} • {laptop.ram}
            </p>

            <p style={{marginTop:"10px"}}>
              {laptop.storage} • {laptop.screen}
            </p>

            <p style={{
              marginTop:"15px",
              fontSize:"20px",
              fontWeight:"bold"
            }}>
              €{laptop.price}
            </p>

          </div>

        ))}

      </div>

    </section>
  )
}