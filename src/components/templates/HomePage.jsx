import React, { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinnList } from "../../services/CryptoApi";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(getCoinnList())
      .then((res) => res.json())
      .then((json) => setCoins(json));

    setIsLoading(false);
  }, []);
  return (
    <div>
      <TableCoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default HomePage;
