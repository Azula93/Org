import "./colaborador.css"
// este import 👇 importa el icono de "close" que ejecuta la funcion "eliminar colaborador" y el otro importa el icono de "corazon" cuando se da like y cuando se quita el like
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Colaborador = (props) =>{

    const {nombre,puesto,foto,equipo,id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props

    return <div className = "colaborador">
        {/* este 👇 span con el onclick llama a la funcion eliminar colaborador cuando se hace click sobre el icono */}
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)}/>
        <div className = "encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt = {nombre} />
        </div>

        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/> }
            {/* aqui ☝️ se hace un ternario en donde si "fav" es true se muestra el corazon rojo y si es false se muestra solo el icono del contorno del corazon */}
            
            
        </div>
    </div>
}

export default Colaborador