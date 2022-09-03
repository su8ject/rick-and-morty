import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/UI/Navbar/Navbar";
import Cards from "./pages/Cards";
import Random from "./pages/Random";
import "./style/App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
