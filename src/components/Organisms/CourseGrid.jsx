import React from "react";
import CourseCard from "../Molecules/CourseCard"

const course = [
  {
    id: 1,
    titulo: "Recact desde cero",
    image: "https://ux.ed.team/img/curso-portada.png",
    price: 40,
    professor: "Patricio Polito",
  },
  {
    id: 2,
    titulo: "Laravel desde cero",
    image: "https://ux.ed.team/img/curso-portada.png",
    price: 40,
    professor: "Patricio Polito",
  },
  {
    id: 3,
    titulo: "Java desde cero",
    image: "https://ux.ed.team/img/curso-portada.png",
    price: 40,
    professor: "Patricio Polito",
  },
  {
    id: 4,
    titulo: "Html desde cero",
    image: "https://ux.ed.team/img/curso-portada.png",
    price: 40,
    professor: "Patricio Polito",
  },
  {
    id: 5,
    titulo: "Express desde cero",
    image: "https://ux.ed.team/img/curso-portada.png",
    price: 40,
    professor: "Patricio Polito",
  },
];

const CourseGrid = () => (
  <div className="ed-grid m-grid-4">
    {course.map((c) => (
      <CourseCard
       key={c.id}
       id={c.id}
       title={c.title}
       image={c.image}
       price={c.price}
       professor={c.professor}
        />
    ))}
  </div>
);
export default CourseGrid