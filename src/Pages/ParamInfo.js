import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import ValuesList from "../components/ValuesList";
import SetParam from "../components/SetParam";

const ParamInfo = () => {
  const { name, variable } = useParams();
  const [paramInfo, setParamInfo] = useState({});

  const fetchStockAPI = useCallback(async (id, variable) => {
    let response;
    try {
      response = await fetch(
        `http://localhost:5000/page/${id}/${variable}`
      );
      if (!response.ok) {
        throw new Error("could not fetch expenses");
      }
    } catch (e) {
      console.log(e);
      return;
    }

    const data = await response.json();

    setParamInfo(data.paramInfo)
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

    fetchStockAPI(id, variable);
  }, [name, variable, fetchStockAPI]);

  return (
    <React.Fragment>
      {paramInfo.type === "indicator" && (
        <SetParam
          default={paramInfo.default_value}
          title={paramInfo.study_type.toUpperCase()}
        />
      )}
      {paramInfo.type === "value" && <ValuesList values={paramInfo.values} />}
    </React.Fragment>
  );
};

export default ParamInfo;
