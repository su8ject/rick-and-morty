import React from "react";
import Mybutton from "../button/Mybutton";

const Pagination = ({ pagesArray, page, changePage, downPage, upPage }) => {
  return (
    <div className="page__wrapper">
      <Mybutton onClick={() => downPage(page)}>&larr;</Mybutton>
      {pagesArray
        .filter((p) => p < page + 5 && p > page - 5)
        .map((p) => (
          <Mybutton
            isActive={page === p ? true : false}
            onClick={() => changePage(p)}
            key={p}
          >
            {p}
          </Mybutton>
        ))}
      <Mybutton onClick={() => upPage(page)}>&rarr;</Mybutton>
    </div>
  );
};

export default Pagination;
