import React, { Component } from "react";
import './botaoprincipal.css'

const BotaoPrincipal = (props) => {
  return <a className="botao">{props.titulobotao}</a>;
};

export default BotaoPrincipal;
