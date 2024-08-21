
import Logo from '../../public/img/LogoPng.png'


import InstagramSvg from '../../public/svg/InstagramSvg'
import WhatsappSvg from '../../public/svg/WhatsappSvg'
import FacebookSvg from '../../public/svg/FacebookSvg'
import EmailSvg from '../../public/svg/EmailSvg'
import TwitterSvg from '../../public/svg/TwitterSvg'

const Footer = () => {
  return (
    <>
    <footer className='footer sm:mt-0 '>
    <div className="container-foot flex flex-wrap lg:mt-[50em] md:mt-[50em] sm:mt-[50em]">
      <div className="logo-foot">
        <img src={Logo} alt="" />
      </div>
      <div className="links-redes">
            <div className="ig cursor-pointer">
                <InstagramSvg/>
            </div>
            <div className="wspp cursor-pointer">
                <WhatsappSvg />
            </div>
            <div className="face cursor-pointer">
                <FacebookSvg />
            </div>
            <div className="email cursor-pointer">
                <EmailSvg />
            </div>
            <div className="twitter cursor-pointer">
                <TwitterSvg />
            </div>
        </div>
    </div>
    </footer>
    <div className="derechos">
      <p className=''>Grill House© 2024 Todos los derechos reservados</p>
    </div>
    </>
  )
}

export default Footer