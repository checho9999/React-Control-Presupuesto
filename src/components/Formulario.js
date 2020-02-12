import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types'

//const Formulario = ( { agregarNuevoGasto } ) => {
const Formulario = ( { guardarGasto, guardarCrearGasto } ) => {

    const [ nombre, guardarNombre ] = useState('');
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false)

    //cuando el usuario agrega un gasto
    const agregarGasto = e => {
        // para que no se envie el query string en la parte superior, ni se recarge la pagina
        e.preventDefault();

        //validar que el gasto sea valido
        if ( cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
            guardarError(true);
            return;
        }

         //Pasos a seguir si la validacion fue correcta
        guardarError(false);

        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }
        //console.log(gasto);

        //Pasar el gasto al componente principal
        //agregarNuevoGasto(gasto);
        guardarGasto(gasto);
        guardarCrearGasto(true); 

        //resetear el formulario
        guardarNombre('');
        guardarCantidad(0);

    }

    return (  
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>

            { error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto invalido" /> : null }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>    

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value), 10)}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />   

        </form>
    );
}

Formulario.propTypes = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario;
