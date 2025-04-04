import React, { useState } from "react";
import styles from "./pagination.module.css";

function Pagination({ page, setPage }) {
  //   const [page, setPage] = useState(1);

  const previousHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };

  const nextHandler = () => {
    if (page >= 10) return;
    setPage((page) => page + 1);
  };

  const clickHandler = (e) => {
    setPage(Number(e.target.innerText));
  };
  return (
    <div className={styles.pagination}>
      <button
        onClick={previousHandler}
        className={page === 1 ? styles.disabled : null}
      >
        previous
      </button>
      <p onClick={clickHandler} className={page === 1 ? styles.selected : null}>
        1
      </p>
      <p onClick={clickHandler} className={page === 2 ? styles.selected : null}>
        2
      </p>
      {page > 2 && page < 9 && (
        <>
          <span>...</span>
          <p className={styles.selected}>{page}</p>
        </>
      )}
      <span>...</span>
      <p onClick={clickHandler} className={page === 9 ? styles.selected : null}>
        9
      </p>
      <p
        onClick={clickHandler}
        className={page === 10 ? styles.selected : null}
      >
        10
      </p>
      <button
        onClick={nextHandler}
        className={page === 10 ? styles.disabled : null}
      >
        next
      </button>
    </div>
  );
}

export default Pagination;
