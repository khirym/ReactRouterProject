import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import MainContainer from "./MainContainer";
import Footer from "./Footer";

function App() {
  return (
    <div id="container">
      <Navbar />
      <MainContainer />
      <Footer/>
    </div>
  );
}

export default App;
