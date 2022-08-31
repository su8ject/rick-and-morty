import axios from "axios";
import React, { useState } from "react";
import CardService from "./API/CardService";
import CardItem from "./components/CardItem";
import CardList from "./components/CardList";
import "./style/App.css";

function App() {
  const [cards, setCards] = useState([]);

  async function fetchCards() {
    const card = await CardService.getAll();
    setCards(card);
  }

  const createCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  return (
    <div className="App">
      <button onClick={fetchCards}>234534</button>
      <CardList cards={cards} />
    </div>
  );
}

export default App;
