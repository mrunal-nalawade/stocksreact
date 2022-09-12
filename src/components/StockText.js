import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./StockText.css";

const StockText = (props) => {
  const [textJSX, setJsx] = useState([]);
  const loc = useLocation();

  useEffect(() => {
    const JSX = props.stock.criteria.reduce((arr, info, index) => {
      if (info.type === "plain_text") {
        arr.push(info.text);
      } else {
        let infoText = info.text;
        let infoTextarr = [];
        const varaKey = Object.keys(info.variable);
        for (const key of varaKey) {
          if (info.variable[key].type === "value") {
            infoTextarr = infoText.split(key);
            infoText = infoTextarr[1];
            arr.push(infoTextarr[0]);
            arr.push(
              <a
                key={key}
                className="stockRef"
                href={`${loc.pathname}/${key}`}
              >{`(${info.variable[key].values[0]})`}</a>
            );
          } else {
            infoTextarr = infoText.split(key);
            infoText = infoTextarr[1];
            arr.push(infoTextarr[0]);
            arr.push(
              <a
                key={key}
                className="stockRef"
                href={`${loc.pathname}/${key}`}
              >{`(${info.variable[key].default_value})`}</a>
            );
          }
        }
        if (infoTextarr[1] !== "[object Object]") arr.push(infoTextarr[1]);
      }

      if (index < props.stock.criteria.length - 1) {
        arr.push(<p>and</p>);
      }
      return arr;
    }, []);

    setJsx(JSX);
  }, [props.stock.criteria, loc.pathname]);

  return <div className="stockInfo">{textJSX}</div>;
};

export default StockText;
