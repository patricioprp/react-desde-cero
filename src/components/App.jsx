import React from "react";
import "../styles/styles.scss"
import Home from "../components/Pages/Home"
import Form from "./Pages/Form"
import Courses from "./Pages/Courses"
import Course from "./Pages/Course"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import MainMenu from "./Organisms/MainMenu"
import History from "./Pages/History"
import User from "./Pages/User"

const App = () => (
  <Router>
     <MainMenu />{/* quiero que esto se muestre en todas las paginas  tiene que estar fuera del switch*/}
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cursos/:id" component={Course} />
      <Route path="/cursos" component={Courses} />
      <Route path="/historial/:valor" component={History} />
      <Route path="/historial" component={History} />
      <Route path="/usuarios" component={User} />
      <Route
        path="/formulario"
        component={() => <Form nombre="Pagina de contacto" />}
      />
      <Route
        component={() => (
          <div className="ed-grid">
            <h1>Error 404</h1>
            <span>Pagina no encontrada</span>
          </div>
        )}
      />
    </Switch>
  </Router>
);

export default App;

// for => htmlFor
