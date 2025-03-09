import logo1 from "@/assets/img/logo1.png" 
import logo2 from "@/assets/img/logo2.png"
import logo3 from "@/assets/img/logo3.png"
import logo4 from "@/assets/img/logo4.png"
import "./logos.css"


const logos = [
  logo1, logo2, logo3, logo4
]

export const Logos = () => {
  return (
    <section className="logos section">
      <div className="logos__container container">
      {logos.map((logo, index) => (
        <img className="logo" src={logo} alt="logo" key={index}/>
      ))}
      </div>
    </section>
  )
}
