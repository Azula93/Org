
import { useState } from 'react';
import {v4 as uuid} from 'uuid'
import './App.css';
import Header from './componentes/Header/header.js';
// se debe exportar la funcion para que se muestren los archivos, imagenes, etc en la pantalla
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/footer';


function App() {

  // esta 👇 funcion se enlaza con la imagen por medio del onclik para ocultar o mostar el contenido
  const[mostrarFormulario,actualizarMostar] = useState(true);

  const [colaboradores, actualizarColaboradores] = useState([{id : uuid(), 
    
    equipo:"Front End", 
    foto:"https://github.com/azula93.png" , 
    nombre: "Azula", 
    puesto:"Junior",
    fav: true
  }])
  // se ponen estos datos para que siempre se  muestren desde el inicio estos colaboradores ☝️

  const [equipos, actualizarEquipos] = useState([
    {
      id : uuid(),
      titulo: "Programacion",
      colorPrimario:"#57C278 ",
      colorSecundario:"#D9F7E9",
    },

    {
      id : uuid(),
      titulo: "Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF",
    },

    {
      id : uuid(),
      titulo:  "Data Science",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2",
    },

    {
      id : uuid(),
      titulo: "DevOps",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8",
    },

    {
      id : uuid(),
      titulo: "UX y Diseño", 
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5",
    },

    {
      id : uuid(),
      titulo:  "Movil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9",
    },

    {
      id : uuid(),
      titulo: "Innovacion y Gestion",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF",
    },
  ])
 
  const cambiarMostrar = () =>{
    actualizarMostar(!mostrarFormulario)
  }

  /* ternario: condicion ? seMuestra :"sino" NoSemuestra  (el ternario es como un condicional)*/
  // el ternario tambien se puede representar asi : condicion && seMuestra | quiere decir que si la condicion es true se ejecuta una accion, no es necesario poner un else porque si es false no se muestra nada

  // Registrar colaborador
  const registrarColaborador = (colaborador) =>{
    console.log ("nuevo colaborador", colaborador)
    // spread operator : son trespuntos ... que se colocan dentro de un arreglo y lo que hace es copiar los datos de ese arreglo
    actualizarColaboradores([...colaboradores, colaborador])
  }

// eliminar colaborador
const eliminarColaborador = (id) =>{
  console.log("eliminarColaborador", id)
  const nuevosColaboradores = colaboradores.filter((colaborador)=>
    colaborador.id !==id)
    actualizarColaboradores(nuevosColaboradores)
  
}

// Actualizar color de equipo

const actualizarColor = (color, id) =>{
 const equiposActualizados = equipos.map((equipo) =>{
  if(equipo.id === id){
    equipo.colorPrimario = color
  }
  return equipo
 })

 actualizarEquipos(equiposActualizados)

}

// crear equipo

const crearEquipo = (nuevoEquipo) =>{
  actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid}])
}

// funcion like
 const like = (id) => {
  const colaboradoresActualizados = colaboradores.map((colaborador) =>{ 
    if (colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })

  actualizarColaboradores(colaboradoresActualizados)
 }



  return (
    // aqui se colocan las secciones de la pagina se llaman con la estrcutura </> estas se crean en la carpeta complementos y se llaman aqui
    <div >
      {/* aqui se menciona el header para que aprezca en pantalla */}
      <Header /> 
      {/* {mostrar formulario ? <Formulario/> : <></>} */}
      {
        mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador = {registrarColaborador}
        crearEquipo = {crearEquipo}
        />
      }
       
      {/* con este ☝️ ternario lo que hace es que al dar click en el boton "+" se oculte el formulario y si se da clic otra vez se muestra, si es true muestra el frommulario y si es false muestra el div vacio */}
      {/* <div></div> se puede quitar el div y solo dejar los <></> para representar vacio */}
      {/* el === true se puede quitar porque react sobre entiende que si la condicion es true debe hacer algo */}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) =>{
          return <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores ={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador = {eliminarColaborador}
          actualizarColor = {actualizarColor}
          like = {like}
          />
        })
        // en react cada que se trabaja con map se debe usar key porque este le da un indicador unico e internamente el sabe que va en cada espacio, en este ejemplo le coloca el titulo a cada seccion en el orden que aparece en el objeto
      }

      <Footer/>
    </div>
  );
}

export default App;
