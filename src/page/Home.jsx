import Navbar from "../components/Navbar"
import '../assets/css/Navbar.css'
import Header from "../components/Header"
import Hero from "../components/Hero"
import Info from '../components/Info'

const Home = () => {
  return (
    <>
    <Navbar />
    <Header />
    <Hero />
    <Info />
    {/* <Footer /> */}
    <div className="derechos mt-[20em] md:mt-[50em] b-0">
      <p className=''>Grill House© 2024 Todos los derechos reservados</p>
    </div>
    </>
  )
}

export default Home