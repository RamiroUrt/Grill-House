
import Plato from '../../public/img/hero/plato.jpg'

const Hero = () => {
  return (
    <>
        <section className="hero">
            <div className="container-hero">
                <div className="picture-hero">
                    <img src={Plato} alt="" />
                </div>
                <div className="tex-hero flex flex-wrap">
                    <h1>Grill House</h1>
                    <h2>Grill House: Donde la Tradición y el Sabor se Encuentran desde 1974</h2>
                    <p>Grill House ha sido el destino predilecto para los amantes de la buena cocina. Con más de cuatro décadas de tradición, nuestro restaurante se ha ganado una reputación incomparable por ofrecer una experiencia gastronómica única, donde la calidad y el sabor son protagonistas en cada plato.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero