import MyButton from "../button/MyButton";

const Pagination = ({
  pagesArray,
  page,
  changePage,
  downPage,
  upPage,
  totalPages,
  setPage,
}) => {
  return (
    <div className="page__wrapper">
      <MyButton onClick={() => downPage(page, totalPages, setPage)}>
        &larr;
      </MyButton>
      {pagesArray.slice(page < 5 ? 0 : page - 5, page + 4).map((p) => (
        <MyButton
          isActive={page === p ? true : false}
          onClick={() => changePage(p, setPage)}
          key={p}
        >
          {p}
        </MyButton>
      ))}
      <MyButton onClick={() => upPage(page, totalPages, setPage)}>
        &rarr;
      </MyButton>
    </div>
  );
};

export default Pagination;
