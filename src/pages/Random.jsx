import { useEffect, useMemo, useState } from "react";
import CardService from "../API/CardService";
import CardList from "../components/CardList";
import MyButton from "../components/UI/button/MyButton";

const randomId = () => Math.floor(Math.random() * 826) + 1;

const Random = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCardsById();
  }, []);

  useMemo(() => {
    if (cards.length === 5) {
      setCards(cards.shift());
    }
  }, [cards]);

  async function fetchCardsById() {
    const response = await CardService.getById(randomId());
    setCards([...cards, response.data]);
  }
  return (
    <div className="random">
      <MyButton onClick={fetchCardsById}>ADD</MyButton>
      <CardList cards={cards} />
    </div>
  );
};

export default Random;
