import Navbar from "../components/Navbar"

import Header from "../components/Header"
import HeroContact from "../components/HeroContact"

const Contact = () => {
  return (
    <>
        <Navbar />
        <Header backgroundClass="background-default" />
        <HeroContact />
        {/* <Footer /> */}
        <div className="derechos">
          <p className=''>Grill House© 2024 Todos los derechos reservados</p>
        </div>
    </>
  )
}

export default Contact
