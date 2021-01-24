//este es un compente de orden superior es una funcion que recibe un componente y retorna otro componente
//es una funcion que retorna una clase
import React, { Component } from "react"

const withLoader = (propValue) => (WrappedComponent) => {
    return class WithLoader extends Component {

        render() {
            return  this.props[propValue].length === 0
            ? <h1>Cargando ...</h1>
            : <WrappedComponent {...this.props} />
        }

    }
}

export default  withLoader