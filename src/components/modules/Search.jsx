import React, { useEffect, useState } from "react";
import { searchCoin } from "../../services/CryptoApi";
import { RotatingLines } from "react-loader-spinner";

function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCoins([]);
    if (!text) return;
    const controller = new AbortController();
    function search() {
      try {
        fetch(searchCoin(text), { signal: controller.signal })
          .then((res) => res.json())
          .then((json) => {
            setIsLoading(false);
            setCoins(json.coins);
          });
      } catch (error) {
        console.log(error.message);
      }
    }
    setIsLoading(true);
    search();

    return () => {
      controller.abort();
    };
  }, [text]);
  console.log(coins);

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
      <div>
        {isLoading ? (
          <RotatingLines strokeColor="blue" width="50px" height="50px" />
        ) : null}

        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              <img src={coin.thumb} alt={coin.name} />
              <p>{coin.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;
