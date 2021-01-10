import React from "react";
import "./styles/styles.scss";
import Curso from "./Curso";

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" alt="banner" src="tu-imagen.jpg" />
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Título del banner</p>
            <p> Subtítulo del banner</p>
            <a href="https://google.com" className="button">
              Botón del banner este es un cambio
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="ed-grid m-grid-3">
      <Curso
        image="https://edteam-media.s3.amazonaws.com/courses/small/8b7ef439-b9bc-485f-9608-d82d0d1a7a2b.png"
        title="React desde cero"
        price="20USD"
        profesor="Patricio Polito"
      />

      <Curso
        // image="https://edteam-media.s3.amazonaws.com/courses/medium/c574aade-f5b4-42ae-9d92-6b05e7919f4d.png"
         title="Html y canvas"
         price={34}
        // profesor="Roberto Juarez"
      />
    </div>
  </>
);

export default App;

// for => htmlFor
