import React from "react";
import "./Formulario.css";
import BotaoPrincipal from "../Botao/BotaoPrincipal";

function Formulario() {
  return (
    <section className="section-formulario">
      <div className="titulo-formulario">
        <h3>Obtenha acesso hoje</h3>
        <p>
          A inscrição leva apenas um minuto e nosso nível de iniciante gratuito
          é extremamente generoso. Se você tiver alguma dúvida, nossa equipe de
          suporte ficará feliz em ajudá-lo.
        </p>
      </div>
      <form className="formulario">
        <input type="text" placeholder="email@exemplo.com" id="campo-email"/>
        <BotaoPrincipal titulobotao="Começar" />
      </form>
    </section>
  );
}

export default Formulario;
