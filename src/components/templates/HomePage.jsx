import React, { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinnList } from "../../services/CryptoApi";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setIsLoading(true);
    fetch(getCoinnList(page))
      .then((res) => res.json())
      .then((json) => setCoins(json));

    setIsLoading(false);
  }, [page]);
  return (
    <div>
      <TableCoin coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
