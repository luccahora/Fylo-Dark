import React from "react";
import "./SectionProdutividade.css";
import ilustracaoprodutividade from "../../assets/illustration-stay-productive.png";
import iconarrow from "../../assets/icon-arrow.svg";

function SectionProdutividade() {
  return (
    <section className="section-produtividade">
      <div>
        <img src={ilustracaoprodutividade} alt="" />
      </div>
      <div className="textos-produtividade">
        <h3>
          Fique produtivo, <br /> onde quer que esteja
        </h3>
        <p>
          Nunca deixe a localização ser um problema ao acessar seus arquivos. A
          Fylo oferece cobertura para todas as suas necessidades de
          armazenamento de arquivos.
        </p>
        <p>
          Compartilhe arquivos e pastas com segurança com amigos, familiares e
          colegas para colaboração ao vivo. Não são necessários anexos de
          e-mail.
        </p>
        <div className="link">
          <a >Veja como o Fylo funciona </a>
          <img src={iconarrow} />
        </div>
      </div>
    </section>
  );
}

export default SectionProdutividade;
