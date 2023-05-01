import "./boton.css"

const Boton = (props) =>{
    // props son propiedades y se colocan en formulario js en este caso la propiedad es el texto que esta dentro del boton
    return <button className="boton">{props.texto}</button>
}

export default Boton