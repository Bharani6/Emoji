import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Act from "./Act";

const Routings = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/Act" element={<Act/>} />
      </Routes>
    </Router>
  );
};

export default Routings;
