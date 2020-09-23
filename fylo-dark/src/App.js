import React from "react";
import "./App.css";
import "./assets/main.css";
import Cabecalho from "./components/header/Cabecalho";
import Principal from "./components/main/Principal";

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Principal />
    </div>
  );
}

export default App;
