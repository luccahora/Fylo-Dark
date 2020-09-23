import React from "react";
import "./App.css";
import "./assets/main.css";
import Cabecalho from "./components/Header/Cabecalho";
import Principal from "./components/main/Principal";
import SectionInfo from "./components/SectionInfo/SectionInfo";

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Principal />
      <SectionInfo />
    </div>
  );
}

export default App;
