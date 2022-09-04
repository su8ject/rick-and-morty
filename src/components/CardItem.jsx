const CardItem = (props) => {
  const card = props.card;

  return (
    <div className="card">
      <div className="card__content">
        <img className="card__img" src={card.image} alt="" />
        <span className="card__name">{card.name}</span>
        <span className="card__text">
          {card.status} - {card.species}
        </span>
        <span className="card__text">Gender: {card.gender}</span>
        <span className="card__text">Location: {card.location.name}</span>
      </div>
    </div>
  );
};

export default CardItem;
