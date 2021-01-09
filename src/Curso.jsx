import React from "react";

const mayorDeEdad = (edad) => edad > 18;

const persona = { nombre: "Patricio", apellido: "Polito", edad: 34 };

const Curso = () => (
  <>
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="https://ux.ed.team/img/curso-portada.png" alt="" />
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        {mayorDeEdad(persona.edad) ? (
            <h3 className="center">
             Hola, soy mayor
            </h3>
        ) : (
          <p>soy menor</p>
        )}
        <div className="s-main-center">
          <a
            className="button--ghost-alert button--tiny"
            href="http://google.com"
          >
            $ 20USD
          </a>
        </div>
      </div>
    </article>
  </>
);
export default Curso;
