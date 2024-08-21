import '../assets/css/Cards.css';

// eslint-disable-next-line react/prop-types
const CardsMenu = ({ items }) => {
  return (
    <div className="cards-menu">
      {items.map(item => (
        <div key={item.id} className="tarjeta">
          <div className="tarjeta-image">
            <img src={item.image} alt={item.title} /> 
          </div>
          <p className="tarjeta-title text-center">{item.title}</p>
          <p className="tarjeta-body">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CardsMenu;
