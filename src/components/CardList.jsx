import React from "react";
import CardItem from "./CardItem";

const CardList = ({ cards }) => {
  return (
    <div>
      {cards.map((card) => (
        <CardItem card={card} key={card.id} />
      ))}
    </div>
  );
};

export default CardList;
