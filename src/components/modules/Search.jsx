import React from "react";

function Search({ currency, setCurrency }) {
  function selectHandler(e) {
    setCurrency(e.target.value);
  }
  return (
    <div>
      <input type="text" />
      <select value={currency} onChange={selectHandler}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
    </div>
  );
}

export default Search;
