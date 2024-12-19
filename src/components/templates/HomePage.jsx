import React, { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinnList } from "../../services/CryptoApi";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  useEffect(() => {
    setIsLoading(true);
    fetch(getCoinnList(page, currency))
      .then((res) => res.json())
      .then((json) => setCoins(json));

    setIsLoading(false);
  }, [page, currency]);
  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin coins={coins} isLoading={isLoading} currency={currency}/>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
