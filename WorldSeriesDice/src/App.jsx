import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Playground from "./components/Playground.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Header></Header>
      <Playground></Playground>
      <Footer></Footer>
    </div>
  );
}

export default App;
