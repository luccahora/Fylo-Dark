import React from "react";
import "./App.css";
import "./assets/main.css";
import Cabecalho from "./components/Header/Cabecalho";
import Principal from "./components/main/Principal";
import SectionInfo from "./components/SectionInfo/SectionInfo";
import SectionProdutividade from "./components/SectionProdutividade/SectionProdutividade";
import SectionComentarios from "./components/SectionComentarios/SectionComentarios";



function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Principal />
      <SectionInfo />
      <SectionProdutividade/>
      <SectionComentarios/>
    </div>
  );
}

export default App;
