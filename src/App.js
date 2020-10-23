import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './Components/Formulario';



function App() {

  

  const [busqueda, setBusqueda] 

  useEffect (() => {
    if(busqueda === '') return;
    const imagenesPorPagina = 30;
    l    
  })

  return (
    <div className= 'cotainer'>
      <div className= 'jumbotron'>
        <p className= 'lead text-center'>Buscador de imagenes</p>
        <Formulario
          setBusqueda={setBusqueda}
        />
      </div>
    </div>
  );
};

export default App;
