import "./listaOpciones.css"

const ListaOpciones = (props) =>{
    // este componente crea una lista de opciones que el usuario puede escoger 
    
   

    const manejarCambio = (e) =>{
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className = "listaOpciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Selecciona un Equipo</option>
            {/* este option ☝️ se usa para poner el "seleccionar equipo" y que se muestre en la lista de opciones como un placeholder */}

            {/* se usa .map para recorrer el arreglo porque devuele un nuevo arreglo NO forEach */}
            { props.equipos.map((equipo, index) =>{
                // el index es la posicion en la que se encuentra la opcion ej: "programacion" esta en la posicion 0 y asi sucesivamente
                return <option key={index}>{equipo}</option>
                // key es como un id para react que se usa para darle un valor unico a cada elemento
                // al pasarle index a key se recorre el arreglo y al pasarle equipo en medio de la etiqueta se le da el nombre de cada opcion que tenemos en el arreglo
            })}
        </select>
    </div>
}

export default ListaOpciones