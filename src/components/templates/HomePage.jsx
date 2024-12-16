import React, { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinnList } from "../../services/CryptoApi";

function HomePage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(getCoinnList())
      .then((res) => res.json())
      .then((json) => setCoins(json));
  }, []);
  return (
    <div> <TableCoin coins={coins} /></div>                         
  );
}

export default HomePage;
