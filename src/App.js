import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../src/Pages/HomePage";
import DetailsPage from "../src/Pages/DetailsPage";
import ParamInfo from "../src/Pages/ParamInfo";

import "./App.css";

function App() {
  return (
    <div className="stockSection">
      <Routes>
        <Route path="/page/:name/:variable" exact element={<ParamInfo />} />
        <Route path="/page/:name" exact element={<DetailsPage />} />
        <Route path="/page" exact element={<HomePage />} />
        <Route path="*" element={<Navigate to="/page" replace />} />
      </Routes>
    </div>
  );
}

export default App;
