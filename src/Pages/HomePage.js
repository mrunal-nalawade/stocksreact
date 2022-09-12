import React, { useEffect, useState, useCallback } from "react";

import StockBar from "../components/StockBar";
import "./HomePage.css";

function HomePage() {
  const [data, setData] = useState([]);

  const fetchStockAPI = useCallback(async () => {
    let response;
    try {
      response = await fetch(`http://localhost:5000/page`);
      if (!response.ok) {
        throw new Error("could not fetch expenses");
      }
    } catch (e) {
      console.log(e);
      return;
    }

    const data = await response.json();

    setData(data.stockList);
  }, []);

  useEffect(() => {
    fetchStockAPI();
  }, [fetchStockAPI]);

  return (
    <ul className="stockList">
      {data.map((bar) => (
        <StockBar key={bar.id} data={bar} />
      ))}
    </ul>
  );
}

export default HomePage;