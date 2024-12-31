import { convertData } from "../../helpers/convertData";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./Chart.module.css";

import React, { useState } from "react";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  console.log(convertData(chart, type));
  console.log(chart);

  function changeType(e) {
    if (e.target.innerText === "Prices") {
      setType(e.target.innerText.toLowerCase());
    } else if (e.target.innerText === "Market Caps") {
      setType("market_caps");
    } else {
      setType("total_volumes");
    }
  }

  return (
    <div className={styles.container} onClick={() => setChart(null)}>
      {/* <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span> */}
      <div className={styles.chart}>
        <div className={styles.name}>
          <img src={chart.image} alt="" />
          <p>{chart.name}</p>
        </div>
        <div onClick={(e) => e.stopPropagation()}>
          <div className={styles.graph}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={400}
                height={400}
                data={convertData(chart, type)}
              >
                <Line
                  type="monotone"
                  dataKey={type}
                  stroke="#3874ff"
                  strokeWidth="2px"
                />
                <CartesianGrid stroke="#404042" />
                <YAxis dataKey={type} domain={["auto", "auto"]} />
                <XAxis dataKey="date" hide />
                <Legend />
                <Tooltip />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className={styles.types}>
            <button
              className={type === "prices" ? styles.selected : null}
              onClick={changeType}
            >
              Prices
            </button>
            <button
              className={type === "market_caps" ? styles.selected : null}
              onClick={changeType}
            >
              Market Caps
            </button>
            <button
              className={type === "total_volumes" ? styles.selected : null}
              onClick={changeType}
            >
              Total Volumes
            </button>
          </div>
          <div className={styles.details}>
            <div>
              <p>Prices:</p>
              <span>${chart.current_price.toLocaleString()}</span>
            </div>
            <div>
              <p>ATH:</p>
              <span>${chart.ath.toLocaleString()}</span>
            </div>
            <div>
              <p>Market Cap :</p>
              <span>${chart.market_cap.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
