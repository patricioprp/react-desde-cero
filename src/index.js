
import React from 'react'
import ReactDOM from "react-dom";
import App from "./components/App";

const root = document.getElementById("root");
///////////////////////// sin jsx, o sea con js puro///////////////////////////////////////
//const root = document.getElementById('root');
//const elemento = React.createElement("h1",{className:"saludo"},"hola soy el texto del h1");
//ReactDOM.render(elemento,root);
///////////////////////////fin////////////////////////////////

ReactDOM.render(<App />, root);
