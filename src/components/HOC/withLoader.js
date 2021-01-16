//este es un compente de orden superior es una funcion que recibe un componente y retorna otro componente
//es una funcion que retorna una clase
import React,{Component} from "react"

const withLoader = (WrappedComponent) => {
    return class WithLoader extends Component{
        constructor(props){
            super(props)
        }

        render(){
            return <WrappedComponent {...this.props}/>
        }

    }
}

export default withLoader