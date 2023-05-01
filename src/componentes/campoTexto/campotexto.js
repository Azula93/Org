import { useState } from "react"
import "./campotexto.css"

const Campo = (props) =>{
    // props es un objeto con todas las propiedades que agreguemos

    const placeholderModificado = `${props.placeholder}...`

    // destructuracion
    const {type = "text"} = props

    const manejarCambio = (e) => {
       
        props.actualizarValor(e.target.value)
     
    }

    return <div className= {`campo campo-${type}`}>
        <label>{props.titulo}</label>
        {/* esto se hace para que acceda a las propiedades creadas y no tener que crear una por una */}
        <input 
        placeholder={props.placeholder} 
        required = {props.required} 
        value={props.valor} 
        onChange={manejarCambio}
        type = {type} />
    </div>
}

export default Campo