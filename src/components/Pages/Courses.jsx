import React from "react";
import CourseGrid from "../Organisms/CourseGrid"
import axios from 'axios'

class Courses extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      course: [],
    };
  }

  componentDidMount(){
    const apiUrl = 'https://my-json-server.typicode.com/patricioprp/json-db/cursos';
    axios.get(apiUrl)
    .then((repos) => {
      const course = repos.data;
      this.setState({
          course: course
      })
    });
}

  render(){
    const {course} = this.state;
    return <CourseGrid course = {course}/>
  }
}
export default Courses