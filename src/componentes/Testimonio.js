import React from 'react';

function Testimonio (){
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={require('../imagenes/testimonio-emma.png')}
      alt='Foto de Emma'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'> Emma Bostian en Suecia</p>


      </div>
    </div>
  )
}