import React from "react";
import { useNavigate } from "react-router-dom";

import "./StockBar.css";

const StockBar = (props) => {
  const navigate = useNavigate();

  const goTodetails = () => {
    let detailsPath;
    switch (props.data.id) {
      case 1:
        detailsPath = "top_gainers";
        break;
      case 2:
        detailsPath = "intraday_buying";
        break;
      case 3:
        detailsPath = "open_high";
        break;
      case 4:
        detailsPath = "cci_reversal";
        break;
      case 5:
        detailsPath = "rsi_overbought";
        break;
    }
    navigate(`/page/${detailsPath}`);
  };

  return (
    <li className="barBox" onClick={goTodetails}>
      <h4 className="stocktitle">{props.data.name}</h4>
      <p
        className={
          props.data.color === "red" ? "stockTag bearish" : "stockTag bullish"
        }
      >
        {props.data.tag}
      </p>
    </li>
  );
};

export default StockBar;
