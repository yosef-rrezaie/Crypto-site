import { convertData } from "../../helpers/convertData";
import styles from "./Chart.module.css";

import React, { useState } from "react";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");
  console.log(convertData(chart, type));

  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      {/* <div className={styles.chart}>
        <div className={styles.graph}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart>

            </LineChart>
          </ResponsiveContainer>
        </div>
      </div> */}
    </div>
  );
}

export default Chart;
