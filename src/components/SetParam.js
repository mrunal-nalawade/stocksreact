import React, { useState } from "react";

import "./SetParam.css";

const  SetParam = (props) => {

    const [param, setParam] = useState(props.default)

    const changeParam = (event) => {
        setParam(event.target.value)
    }
    return (
        <div className="paramContainer">
            <h2 className="paramTitle">{props.title}</h2>
            <p>Set Parameters</p>
            <div className="paramInput">
                <label>Period</label>
                <input value={param} onChange={changeParam} />
            </div>
        </div>
    );
}

export default SetParam;