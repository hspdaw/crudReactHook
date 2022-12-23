import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import DutiesList from "./components/DutiesList";
import CreateDuty from "./components/CreateDuty";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <div className="site-card-wrapper">
        <Routes>
          <Route exact path="/" element={<DutiesList />} />
          <Route exact path="/edit/:id" element={<CreateDuty />} />
          <Route exact path="/create" element={<CreateDuty />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
