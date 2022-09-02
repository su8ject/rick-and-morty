import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Cards from "./pages/Cards";
import Random from "./pages/Random";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="navbar__link">
          <Link to="/cards">main</Link>
          <Link to="/random">random</Link>
        </div>
      </div>
      <Routes>
        <Route path="/random" element={<Random />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
