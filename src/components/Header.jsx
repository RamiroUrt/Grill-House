

import Button from "./Button";
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Header = ({ backgroundClass, onButtonClick }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header>
      <div className={`picture ${backgroundClass}`}>
        <div className="buttons-header flex flex-wrap justify-center">
          {currentPath === '/' && (
            <>
              <Button text="Menú" link="/Menu" />
              <Button text="Contacto" link={'/Contacto'} />
            </>
          )}
          {currentPath === '/Menu' && (
            <>
              <Button text="Carnes" onClick={() => onButtonClick('Carnes', 'carnes')} />
              <Button text="Bebidas" onClick={() => onButtonClick('Bebidas', 'bebidas')} />
              <Button text="Pastas" onClick={() => onButtonClick('Pastas', 'pastas')} />
              <Button text="Postres" onClick={() => onButtonClick('Postres', 'postres')} />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

