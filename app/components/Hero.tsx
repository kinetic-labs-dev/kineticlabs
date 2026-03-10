export default function Hero() {
    return (
      <section style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        height:"80vh",
        textAlign:"center"
      }}>
        
        <h1 style={{fontSize:"56px",fontWeight:"bold"}}>
          Kinetic Labs
        </h1>
  
        <p style={{
          marginTop:"20px",
          fontSize:"22px",
          color:"#9CA3AF"
        }}>
          Certified Performance Machines
        </p>
  
        <a
          href="https://wa.me/34694296601"
          style={{
            marginTop:"40px",
            background:"#3B82F6",
            padding:"16px 30px",
            borderRadius:"12px",
            textDecoration:"none",
            color:"white",
            fontWeight:"bold"
          }}
        >
          Contact via WhatsApp
        </a>
  
      </section>
    )
  }