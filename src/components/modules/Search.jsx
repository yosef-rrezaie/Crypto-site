import React, { useEffect, useState } from "react";
import { searchCoin } from "../../services/CryptoApi";

function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (!text) return;
    fetch(searchCoin(text))
      .then((res) => res.json())
      .then((json) => setCoins(json.coins));
  }, [text]);
  console.log(coins)

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
    </div>
  );
}

export default Search;
