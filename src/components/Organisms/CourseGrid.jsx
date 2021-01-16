import React from 'react';
import CourseCard from "../Molecules/CourseCard"
import withLoader from "../HOC/withLoader"

const CourseGrid = ({course}) => (
    <div className="ed-grid m-grid-4">
    {
    course.map((c) => (
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
)
export default withLoader("courses")(CourseGrid)