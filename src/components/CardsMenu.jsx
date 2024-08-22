import '../assets/css/Cards.css';

// eslint-disable-next-line react/prop-types
const CardsMenu = ({ items }) => {
  return (
    <div className="cards-menu">
      {items.map(item => (
        <div key={item.id} className="button-bg rounded-[20px]">
          <div className="tarjeta">
            <div className="tarjeta-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h1 className="tittle text-center">{item.title}</h1>
            <p className="tarjeta-body">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsMenu;
