import React from "react";

const cursos = [
  {
    id: 1,
    titulo: "Recact desde cero",
    image: "https://ux.ed.team/img/curso-portada.png",
    price: 40,
    profesor: "Patricio Polito",
  },
  {
    id: 2,
    titulo: "Laravel desde cero",
    image: "https://ux.ed.team/img/curso-portada.png",
    price: 40,
    profesor: "Patricio Polito",
  },
  {
    id: 3,
    titulo: "Java desde cero",
    image: "https://ux.ed.team/img/curso-portada.png",
    price: 40,
    profesor: "Patricio Polito",
  },
  {
    id: 4,
    titulo: "Html desde cero",
    image: "https://ux.ed.team/img/curso-portada.png",
    price: 40,
    profesor: "Patricio Polito",
  },
  {
    id: 5,
    titulo: "Express desde cero",
    image: "https://ux.ed.team/img/curso-portada.png",
    price: 40,
    profesor: "Patricio Polito",
  },
];

const Course = ({ match }) => {
  const cursoActual = cursos.filter(
    (c) => c.id === parseInt(match.params.id)
  )[0];
  return (
    <div className="ed-grid m-grid-3">
      {cursoActual ? (
        <>
          <h1 className="m-cols-3"> {cursoActual.titulo}</h1>
          <img
            className="m-cols-1"
            src={cursoActual.image}
            alt={cursoActual.titulo}
          />
          <p className="m-cols-2">Profesor: {cursoActual.profesor}</p>
        </>
      ) : (
        <h1>No hay Cursos</h1>
      )}
    </div>
  );
};

export default Course;
