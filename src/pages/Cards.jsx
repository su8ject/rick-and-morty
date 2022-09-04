import React, { useEffect, useState } from "react";
import CardService from "../API/CardService";
import CardList from "../components/CardList";
import Pagination from "../components/UI/pagination/Pagination";
import { getPagesArray } from "../utils/pages";

function Cards() {
  const [cards, setCards] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);

  let pagesArray = getPagesArray(totalPages);

  useEffect(() => {
    fetchCards();
  }, [page]);

  async function fetchCards() {
    const response = await CardService.getAll(page);
    setCards(response.data.results);
    setTotalPages(response.data.info.pages);
  }

  const changePage = (page) => {
    setPage(page);
  };

  const downPage = (page) => {
    page === 1 ? setPage(42) : setPage(page - 1);
  };

  const upPage = (page) => {
    page === 42 ? setPage(1) : setPage(page + 1);
  };

  return (
    <div className="cards">
      <CardList cards={cards} />
      <Pagination
        pagesArray={pagesArray}
        page={page}
        changePage={changePage}
        downPage={downPage}
        upPage={upPage}
      />
    </div>
  );
}

export default Cards;
