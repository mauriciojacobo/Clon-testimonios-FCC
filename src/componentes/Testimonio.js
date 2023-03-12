import React from 'react';
import '../stylesheets/Testimonio.css'

function Testimonio (props){
  const testimonioConNegrita = props.testimonio.split(props.negrita);
  
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={require(`../imagenes/testimonio-${props.imagen}.png`)}
      alt={`Foto de ${props.imagen}`}/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'> 
          <strong>{props.nombre} </strong>in <strong>{props.pais}</strong>
        </p>
        <p className='cargo-testimonio'>
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className='textyo-testimonio'>
          {testimonioConNegrita[0]}
            <strong> {props.negrita}</strong>
          {testimonioConNegrita[1]}
        </p>

      </div>
    </div>
  )
}

export default Testimonio;