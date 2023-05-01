import "./equipo.css"
import Colaborador from "../colaboradores"
import hexToRgba from 'hex-to-rgba';
// ☝️ esta importacion sirve para que tome un color hexadecimal y le coloque una opaciodad, se esta usando para poner el mismo color primario y secundario pero con opaciodad

const Equipo = (props) =>{

    // destructuracion
    const {colorPrimario, colorSecundario,titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const obj = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloTitulo = {borderColor: colorPrimario}

    return <> 
    {
        colaboradores.length > 0 &&
        <section className = "equipo" style={obj}>
            <input 
            type='color'
            className="input-color"
            value={colorPrimario}
            onChange={(event) =>{
                actualizarColor(event.target.value, id)
            }}
            />

        <h3 style={estiloTitulo}>{titulo}</h3>
        {/* con este h3 lo que se hace es que el titulo cambie segun sea necesario */}
        <div className = "colaboradores">
        
            {
                colaboradores.map((colaborador, index) =>
                    <Colaborador
                    datos={colaborador}
                    key={index}
                    colorPrimario={colorPrimario}
                    eliminarColaborador = {eliminarColaborador}
                    like = {like}
                      />)
            }
            
        </div>
    </section>
    }</> 
}


export default Equipo