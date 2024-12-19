import React, { useEffect, useState } from "react";
import { searchCoin } from "../../services/CryptoApi";
import { RotatingLines } from "react-loader-spinner";

import styles from "./Search.module.css";

function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCoins([]);
    if (!text) {
      setIsLoading(false);
      return;
    }
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
    <div className={styles.searchBox}>
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
      {(coins.length > 0 || isLoading) ? (
        <div className={styles.searchResult}>
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
      ) : null}
    </div>
  );
}

export default Search;
