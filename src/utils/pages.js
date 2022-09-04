import { useMemo } from "react";

const results = [];

export const GetPagesArray = (totalPages) => {
  useMemo(() => {
    for (let i = 0; i < totalPages; i++) {
      results.push(i + 1);
    }
  }, [totalPages]);
  return results;
};

export const changePage = (page, setPage) => {
  setPage(page);
};

export const downPage = (page, totalPages, setPage) => {
  page - 1 === 0 ? setPage(totalPages) : setPage(page - 1);
};

export const upPage = (page, totalPages, setPage) => {
  page + 1 === totalPages + 1 ? setPage(1) : setPage(page + 1);
};
