import React, { Fragment, useState } from 'react';
import Error from './Error'
import PropTypes from 'prop-types';

const Pregunta = ( { guardarPresupuesto , guardarRestante, actualizarPregunta } ) => {

    //definir el state    
    const [ cantidad, guardarCantidad ] = useState(0)
    const [ error, guardarError ] = useState(false)

    //funcion para leer el presupuesto
    const definirPresupuesto = e => {
        //parseInt para que sea un entero (se ve en azul en la consola...sino 
        //es un string que se de color negro...en gral en un input viene un string
        //aunque su type sea un number
        //console.log(parseInt(e.target.value));
        guardarCantidad(parseInt(e.target.value, 10))
    }

    //
    const agregarPresupuesto = e => {
        // para que no se envie el query string en la parte superior, ni se recarge la pagina
        e.preventDefault();

        //validar que el presupuesto sea valido
        if ( cantidad < 1 || isNaN(cantidad) ) {
            guardarError(true);
            return;
        }

        //Pasos a seguir si la validacion fue correcta
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);

    }

    return (  
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            { error ? <Error mensaje="El Presupuesto es invalido" /> : null }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
    // Esta es otra opcion por si no se quiere crear la funcion definirPresupuesto                    
    //              onChange={ e => guardarCantidad(parseInt(e.target.value,1)) }        
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}

Pregunta.propTypes = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;