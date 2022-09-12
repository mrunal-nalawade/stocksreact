import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

import Details from "../components/Details";
import StockText from "../components/StockText";

const DetailsPage = () => {
  const { name } = useParams();

  const [stock, setStock] = useState({});

  const fetchStockAPI = useCallback(async (id) => {
    let response;
    try {
      response = await fetch(`http://localhost:5000/page/${id}`);
      if (!response.ok) {
        throw new Error("could not fetch expenses");
      }
    } catch (e) {
      console.log(e);
      return;
    }

    const data = await response.json();

    setStock(data.stock);
  }, []);

  useEffect(() => {
    let id;
    switch (name) {
      case "top_gainers":
        id = 1;
        break;
      case "intraday_buying":
        id = 2;
        break;
      case "open_high":
        id = 3;
        break;
      case "cci_reversal":
        id = 4;
        break;
      case "rsi_overbought":
        id = 5;
        break;
      default:
        id = 1;
        break;
    }
    fetchStockAPI(id);
  }, [name, fetchStockAPI]);

  return (
    <Details stock={stock}>
      {stock.criteria && <StockText stock={stock} />}
    </Details> 
  );
};

export default DetailsPage;
