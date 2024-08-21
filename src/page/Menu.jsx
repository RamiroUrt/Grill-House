import { useState } from 'react';
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroMenu from "../components/HeroMenu";
import carnesData from '../assets/json/Carnes.json';
import bebidasData from '../assets/json/Bebidas.json'
import pastasData from '../assets/json/Pastas.json'
import postresData from '../assets/json/Postres.json'

const Menu = () => {
  const [backgroundClass, setBackgroundClass] = useState('background-default');
  const [heroText, setHeroText] = useState('Carnes');
  const [items, setItems] = useState(carnesData);

  // eslint-disable-next-line no-unused-vars
  const handleButtonClick = (text, type) => {
    setHeroText(text);
    switch (text) {
      case 'Carnes':
        setBackgroundClass('background-carne');
        setItems(carnesData);
        break;
      case 'Bebidas':
        setBackgroundClass('background-bebidas');
        setItems(bebidasData);
        break;
      case 'Pastas':
        setBackgroundClass('background-pastas');
        setItems(pastasData);
        break;
      case 'Postres':
        setBackgroundClass('background-postres');
        setItems(postresData);
        break;
      default:
        setBackgroundClass('background-default');
        setItems([]);
    }
  };

  return (
    <>
      <Navbar />
      <Header backgroundClass={backgroundClass} onButtonClick={handleButtonClick} />
      <HeroMenu text={heroText} items={items} />
      {/* <Footer/> */}
      <div className="derechos absolute bottom-0 w-full">
      <p className=''>Grill House© 2024 Todos los derechos reservados</p>
    </div>
    </>
  );
};

export default Menu;
