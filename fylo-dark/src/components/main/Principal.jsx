import React, { Component } from "react";
import "./principal.css";
import BotaoPrincipal from "../Botao/BotaoPrincipal";
import ilustracaointro from "../../assets/illustration-intro.png";

const principal = () => {
  return (
    <main className="container-principal">
      <div>
        <img
          src={ilustracaointro}
          alt="Ilustração"
          className="ilustracao-intro"
        />
      </div>
      <div className="principal-texto">
        <h2>
          Todos os seus arquivos em um local seguro, <br /> acessível em
          qualquer lugar.
        </h2>
        <p>
          O Fylo armazena todos os seus arquivos mais importantes em um local{" "}
          <br />
          seguro. Acesse-os onde você precisar, compartilhe e colabore com{" "}
          <br />
          amigos, familiares e colegas de trabalho.
        </p>
      </div>
      <div className="principal-texto-mobile">
        <h2>
          Todos os seus arquivos em um local seguro, acessível em qualquer
          lugar.
        </h2>
        <p>
          Acesse-os onde você precisar, compartilhe e colabore com amigos,
          familiares e colegas de trabalho.
        </p>
      </div>
      <div className="botao-comecar">
        <BotaoPrincipal titulobotao="Começar" />
      </div>
    </main>
  );
};

export default principal;
