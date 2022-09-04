import { useEffect, useState } from "react";
import CardService from "../API/CardService";
import CardList from "../components/CardList";
import Pagination from "../components/UI/pagination/Pagination";
import { changePage, downPage, GetPagesArray, upPage } from "../utils/pages";

function Cards() {
  const [cards, setCards] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCards();
  }, [page]);

  async function fetchCards() {
    const response = await CardService.getAll(page);
    setCards(response.data.results);
    setTotalPages(response.data.info.pages);
  }

  let pagesArray = GetPagesArray(totalPages);

  return (
    <div className="cards">
      <CardList cards={cards} />
      <Pagination
        pagesArray={pagesArray}
        page={page}
        changePage={changePage}
        downPage={downPage}
        upPage={upPage}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
}

export default Cards;
