import React from "react";
import Mybutton from "../button/Mybutton";

const Pagination = ({ pagesArray, page, changePage }) => {
  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <Mybutton
          isActive={page === p ? true : false}
          onClick={() => changePage(p)}
          key={p}
        >
          {p}
        </Mybutton>
      ))}
    </div>
  );
};

export default Pagination;
