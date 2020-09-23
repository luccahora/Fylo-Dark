import React from "react";
import "./SectionInfo.css";
import celularpc from "../../assets/icon-access-anywhere.svg";
import pasta from "../../assets/icon-any-file.svg";
import collaboration from "../../assets/icon-collaboration.svg";
import security from "../../assets/icon-security.svg";

function SectionInfo() {
  return (
    <section className="section-info">
      <div className="info-item">
        <div className="icone"><img src={celularpc} alt="Icone Celular" /></div>
        <h3>Acesse seus arquivos em qualquer lugar</h3>
        <p>
          A capacidade de usar um smartphone, tablet ou computador para acessar
          sua conta significa que seus arquivos o seguem em qualquer lugar.
        </p>
      </div>
      <div className="info-item">
        <div className="icone"><img src={security} alt="Icone Security" /></div>
        <h3>Segurança em que você pode confiar</h3>
        <p>
          A autenticação de dois fatores e a criptografia controlada pelo
          usuário são apenas alguns dos recursos de segurança que permitimos
          para ajudar a proteger seus arquivos.
        </p>
      </div>
      <div className="info-item">
        <div className="icone"><img src={collaboration} alt="Icone Collaboration" /></div>
        <h3>Colaboração em tempo real</h3>
        <p>
          Compartilhe arquivos e pastas com segurança com amigos, familiares e
          colegas para colaboração ao vivo. Não são necessários anexos de e-mail.
        </p>
      </div>
      <div className="info-item">
        <div className="icone"><img src={pasta} alt="Icone Pasta" /></div>
        <h3>Armazene qualquer tipo de arquivo</h3>
        <p>
          Esteja você compartilhando fotos de férias ou documentos de trabalho,
          Fylo ajuda você, permitindo que todos os tipos de arquivo sejam
          armazenados e compartilhados com segurança
        </p>
      </div>
    </section>
  );
}

export default SectionInfo;
