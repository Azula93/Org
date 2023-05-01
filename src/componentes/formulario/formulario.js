// estas funciones se llaman componenets y es donde se crea el disñeo de cada parte de la pagina en esta seccion creamos el formulario de registro
import { useState } from "react"
import "./formulario.css"
import CampoTexto from "../campoTexto/campotexto"
import ListaOpciones from "../listaOpciones"
import Boton from "../boton"

const Formulario = (props) =>{

    // Destructuracion
    const[nombre,actualizarNombre] = useState ("")
    const[puesto,actualizarPuesto] = useState ("")
    const[foto,actualizarFoto] = useState ("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props


    const manejarEnvio = (e) =>{
        e.preventDefault();
        
        let datosAEnviar = {
            nombre,
            puesto,
            foto, 
            equipo
        }

        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault();
        crearEquipo({titulo,colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit ={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo ="Nombre" placeholder="Ingresa Nombre"
             required
              valor ={nombre} 
              actualizarValor={actualizarNombre} />

            <CampoTexto titulo ="Puesto" placeholder="Ingresa Puesto" 
            required 
            valor ={puesto} 
            actualizarValor={actualizarPuesto}/>

            <CampoTexto titulo ="Foto" placeholder="Ingresar enlace de Foto" 
            required 
            valor ={foto} 
            actualizarValor={actualizarFoto}/>

            <ListaOpciones 
                valor ={equipo} 
                actualizarEquipo = {actualizarEquipo} 
                equipos = {props.equipos}
                />

            <Boton texto="Crear"/>
        </form>

        <form onSubmit ={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el Equipo.</h2>
            <CampoTexto titulo ="Titulo" placeholder="Ingresa Titulo"
             required
              valor ={titulo} 
              actualizarValor={actualizarTitulo} />

            <CampoTexto titulo ="Color" placeholder="Ingresa el color" 
            required 
            valor ={color} 
            actualizarValor={actualizarColor}
            type="color"/>

            <Boton texto="Crear equipo"/>
        </form>
    </section>

}

export default Formulario