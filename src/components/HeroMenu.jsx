import CardsMenu from "./CardsMenu";

// eslint-disable-next-line react/prop-types
const HeroMenu = ({ text, items }) => {
  return (
    <section className="menu">
      <div className="cards-menu">
        <h1 className="tittle-cont">{text}</h1>
        <div className="container-cards">
          <CardsMenu items={items} />
        </div>
      </div>
    </section>
  );
};

export default HeroMenu;
