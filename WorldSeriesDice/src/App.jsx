import { useState } from "react";
import "./App.css";
import Playground from "./components/Playground.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Playground></Playground>
      <Footer></Footer>
    </div>
  );
}

export default App;
