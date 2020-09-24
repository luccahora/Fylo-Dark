import React from "react";
import "./App.css";
import "./assets/main.css";
import Cabecalho from "./components/Header/Cabecalho";
import Principal from "./components/main/Principal";
import SectionInfo from "./components/SectionInfo/SectionInfo";
import SectionProdutividade from "./components/SectionProdutividade/SectionProdutividade";
import SectionComentarios from "./components/SectionComentarios/SectionComentarios";
import Formulario from "./components/Formulario/Formulario"


function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Principal />
      <SectionInfo />
      <SectionProdutividade/>
      <SectionComentarios/>
      <Formulario/>
    </div>
  );
}

export default App;
