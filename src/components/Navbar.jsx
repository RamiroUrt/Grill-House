import { Link, Outlet } from 'react-router-dom';

import { Ellipsis, X } from 'lucide-react'
import Logo from '../../public/img/LogoPng.png'
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(prevState => !prevState);
    };
  
    const closeMenu = () => {
      setMenuOpen(false);
    };
  
    useEffect(() => {
      if (menuOpen) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
    }, [menuOpen]);
  return (
    <>
        <nav className="desktop-nav">
        <div className="nav-logo">
            <img src={Logo} alt="" />
        </div>
            <div className="nav-links">
                <ul className="nav-ul-box">
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/Menu'>Menú</Link></li>
                    <li><Link to='/contacto'>Contacto</Link></li>
                </ul>
            </div>
        </nav>
        <nav className='hamburger-nav'>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className={`icon ${menuOpen ? 'hide' : 'show'}`}>
            <Ellipsis size={26} />
          </span>
          <span className={`icon ${menuOpen ? 'show' : 'hide'}`}>
            <X size={26} />
          </span>
        </div>
        <div className="nav-logo">
            <img src={Logo} alt="" />
        </div>
        {menuOpen && (
          <>
            <div className="nav-links">
                <ul className="nav-ul-box">
                    <li><Link to='/' onClick={closeMenu}>Inicio</Link></li>
                    <li><Link to='/Menu' onClick={closeMenu}>Menú</Link></li>
                    <li><Link to='/contacto' onClick={closeMenu}>Contanto</Link></li>
                </ul>
            </div>
            </>
        )}
        </nav>
        <Outlet />
    </>
  )
}

export default Navbar
