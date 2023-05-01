import "./header.css"

// se crea una funcion en donde se incluya la imagen o archivo que necesito mostar en pantalla
function Header (){
    return <header className="header">
        <img src="/img/header.png" alt="org"/>
    </header>
    
}
// las funciones deben empezar en mayuscula para identificar cuando es una funcion creada por nosotros de una etiqueta html

export default Header
// se exporta la funcion para ser leida en app.js