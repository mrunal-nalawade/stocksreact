import React from "react";

import "./ValuesList.css";

const  ValuesList = (props) => {

    return (
        <div className="valuesContainer">
        {props.values.map((val,index) => <div className="values" key={index}>{val}</div>)}
        </div>
    );
}

export default ValuesList;