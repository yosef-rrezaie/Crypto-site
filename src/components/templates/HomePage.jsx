import React, { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinnList } from "../../services/CryptoApi";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);
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
      <TableCoin
        coins={coins}
        isLoading={isLoading}
        currency={currency}
        setChart={setChart}
      />
      <Pagination page={page} setPage={setPage} />
      {chart ? <Chart chart={chart} setChart={setChart} /> : null}
    </div>
  );
}

export default HomePage;
