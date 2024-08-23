import { Parallax } from "react-parallax"
import '../assets/css/Parallax.css'
import Fondo from '../../public/img/info/fondo.jpg'
import CardInfo from "./CardInfo"
import Contact from "./Contact"

const Info = () => {
  return (
    <>
        <section className="info">
            <Parallax strength={800} bgImage={Fondo} className="cover">
                    <div className="h-[auto] min-h-[80vh] mx-h-[100vh] flex justify-center items-center">
                        <div className="card-info ">
                            <div className="cards gap-5 flex justify-center flex-wrap ">
                                <CardInfo tittle={'Horarios'} info={'De lunes a sabados \n 9am a 23pm'} />
                                <CardInfo tittle={'Escribenos'} info={'3462656533'} />
                                <CardInfo tittle={'Visitanos'} info={'Calle 123 \n Ciudad X'} />
                            </div>
                        </div>
                    </div>
            </Parallax>
            <Contact />
        </section>
    </>
  )
}

export default Info
