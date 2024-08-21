
import '../assets/css/From.css'

const Contact = () => {
  return (
    <>
    <div className="contact">
<div className="contact-border">
        <div className="container">
            <form className="form">
              <div className="descr">
                <h2 className='tittle text-black'>Hacé tu reserva</h2>
              </div>
              <div className="">
                  <label>Nombre</label>
                  <input required=""type="text"/>
              </div>
    
              <div className="">
                  <label>Mensaje</label>
                  <textarea required="" rows="1" id="message"></textarea>
              </div>
              <button>Solicitar Reserva→</button>
            </form>
        </div>
    </div>
    </div>

    </>
  )
}

export default Contact