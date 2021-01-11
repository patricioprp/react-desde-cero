import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      correo: "",
      fecha: new Date()
    };
    this.changeName = this.changeName.bind(this);
    this.cambiarCorreo = this.cambiarCorreo.bind(this);
    this.cambiarFecha = this.cambiarFecha.bind(this);
  }

  changeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  cambiarCorreo(e){
    this.setState({
      correo: e.target.value
    });
  }

  cambiarFecha(){
    this.setState({
      fecha: new Date()
    });
  }
  render() {
    return (
      <div className="ed-grid">
        <h1>Formulario {this.props.name}</h1>
        <h4>Fecha actual:{Math.ceil(this.state.fecha/1000)}</h4>
        <form id="form-element">
          <div className="ed-grid m-grid-2">
            <div className="form__item">
              <label>Nombre Completo</label>
              <input type="text" onChange={this.changeName} />
            </div>
            <div className="form__item">
              <label>Correo Electronico </label>
              <input
                type="email"
                onChange={ this.cambiarCorreo}
              />
            </div>
          </div>
        </form>
        <div>
          <h2>{`Hola ${this.state.name}`}</h2>
          <span>{`Tu correro es ${this.state.correo}`}</span>
        </div>
      </div>
    );
  }

  componentDidMount(){
    //let element = document.getElementById("form-element");
    this.intervaloFecha = setInterval(()=>{
      this.cambiarFecha()
      console.log(new Date());
    },1000);
  }

  componentDidUpdate(prevProps, prevState){
    // console.log(prevProps);
    // console.log(prevState);
    // console.log("---------------------");

  }

  componentWillUnmount(){
    clearInterval(this.intervaloFecha)
    //cuando desmontemos este componente se detiene el setInterval
    //si no hacemos esto, el setintervalo seguiria ejecutandose aunque se demonte el componente
  }
}
export default Form;
