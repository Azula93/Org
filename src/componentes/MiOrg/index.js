import {useState} from 'react';
import "./miOrg.css";

const MiOrg = (props) =>{
    
    // forma de definir un estado const[nombredelaVariable,funcionqueActualiza] = useState(valorInicial); 
    

    // const manejarClick = () =>{
    //     console.log("mostrar /ocultar", !mostrar )
    //     actualizarMostrar(!mostrar)
    // }


    return <section className="orgSection">
        <h3 className="title">Mi Organización </h3>
        <img src = "/img/add.png" alt ="add" onClick ={props.cambiarMostrar} />
    </section>
}

export default MiOrg;