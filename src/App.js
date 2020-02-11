import React, { useState } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario';

function App() {

  const [ presupuesto, guardarPresupuesto ] = useState(0)
  const [ restante, guardarRestante ] = useState(0)
  const [ mostrarpregunta, actualizarPregunta ] = useState(true)
  const [ gastos, guardarGastos ] = useState([])

  //cuando agreguemos un nuevo gasto
  const agregarNuevoGasto = gasto => {
    //console.log(gasto);
    guardarGastos([
      ...gastos,
      gastos    
    ])
  }

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido"> 
          { mostrarpregunta ?
            //Los parentesis no son obligatorios pero son recomendables
            (
              <Pregunta 
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizarPregunta={actualizarPregunta}
              />
            ) : (
              <div className="row">
                <div className="one-half column">
                  <Formulario 
                    agregarNuevoGasto={agregarNuevoGasto}
                  />
                </div>

                <div className="one-half column">
                  Listado de Gastos
                </div>
              </div>                 
            )
          }    
        </div>
      </header>
    </div>
  );
}

export default App;
