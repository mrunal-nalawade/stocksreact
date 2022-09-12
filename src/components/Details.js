import React from "react";

import "./Details.css";

const  Details = (props) => {

  return (
    <div className="detailsContainer">
      <div className="titleBar">
        <p className="detailsText">{props.stock.name}</p>
        <p  className={
          props.stock.color === "red" ? "detailsText bearish" : "detailsText bullish"
        }>{props.stock.tag}</p>
      </div>
      {props.children}
    </div>
  );
}

export default Details;