import React from "react";
import "./SectionComentarios.css";
import pessoa1 from '../../assets/profile-1.jpg'
import pessoa2 from '../../assets/profile-2.jpg'
import pessoa3 from '../../assets/profile-3.jpg'

function SectionComentarios() {
  return (
    <section className="section-comentario">
      <div className="card-comentario">
          <div className="texto-comentario">
              <p>Fylo melhorou a produtividade de nossa equipe em uma ordem de magnitude. Desde que fizemos a troca, nossa equipe se tornou uma máquina de colaboração bem lubrificada.</p>
          </div>
          <div className="autor-comentario">
              <div>
                  <img src={pessoa1}/>
              </div>
              <div>
                  <h4 className="nome-autor">Paulo Souza</h4>
                  <p className="texto-comentario">Founder & CEO, Papel Branco</p>
              </div>
          </div>
      </div>
      <div className="card-comentario">
          <div className="texto-comentario">
              <p>Fylo melhorou a produtividade de nossa equipe em uma ordem de magnitude. Desde que fizemos a troca, nossa equipe se tornou uma máquina de colaboração bem lubrificada.</p>
          </div>
          <div className="autor-comentario">
              <div>
                  <img src={pessoa2}/>
              </div>
              <div>
                  <h4 className="nome-autor">Kleber Pereira</h4>
                  <p className="texto-comentario">CTO, Paz Tech</p>
              </div>
          </div>
      </div>
      <div className="card-comentario">
          <div className="texto-comentario">
              <p>Fylo melhorou a produtividade de nossa equipe em uma ordem de magnitude. Desde que fizemos a troca, nossa equipe se tornou uma máquina de colaboração bem lubrificada.</p>
          </div>
          <div className="autor-comentario">
              <div>
                  <img src={pessoa3}/>
              </div>
              <div>
                  <h4 className="nome-autor">Sabrina Silva</h4>
                  <p className="texto-comentario">CEO, Viva Tech</p>
              </div>
          </div>
      </div>
    </section>
  );
}

export default SectionComentarios;
