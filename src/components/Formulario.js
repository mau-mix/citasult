import React, { Fragment, useState } from "react";
import {v4 as uuid} from 'uuid';

const Formulario = () => {

  //state de citas

const [ cita, actualizarCita ] = useState ({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: ''
  })
  const [ error, actualizarError ] = useState(false);

  //extraer valores

  const {mascota,propietario,fecha,hora,sintomas} = cita

  //cuando el usuario presiona agregar cita

  const submitCita = e => {
    e.preventDefault()
   

   //validar
   if(mascota.trim() === '' || propietario.trim() === '' || mascota.trim() === '' ||
   fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
     actualizarError(true);
     return;
   }

   //eliminar el mensaje previo
   actualizarError(false);


   //asignar Id
   cita.id = uuid();
   console.log(cita);

   //crear cita

   //reiniciar el form

  }

  //funcion que se ejecuta cuando el usuario escribe en un input

  const acualizarState = e => {
    actualizarCita({
      ...cita,
      [e.target.name] :e.target.value
    })
  }

  return (

    <Fragment>

      <h2>Crear Cita</h2>

      {error ? <p className="alerta-error">Todos los campos son obligatorios</p> :null}

      <form
        onSubmit={submitCita}
      >

          <label>Nombre  Mascota</label>
            <input 
               type="text"
               name="mascota"
               className="u-full-width"
               placeholder="Nombre Mascota"
               onChange={acualizarState}
               value={mascota}
              />

            <label>Nombre  Dueño</label>
              <input 
               type="text"
               name="propietario"
               className="u-full-width"
               placeholder="Nombre dueño de la Mascota"
               onChange={acualizarState}
               value={propietario}
              />

            <label>fecha</label>
               <input 
               type="date"
               name="fecha"
               className="u-full-width"
               onChange={acualizarState}
               value={fecha}
            />

            <label>Hora</label>
               <input 
               type="time"
               name="hora"
               className="u-full-width"
               onChange={acualizarState}
               value={hora}
               />

            <label>Sintomas</label>
               <textarea 
               className="u-full-width"
               name="sintomas" 
               onChange={acualizarState}
               value={sintomas}
               ></textarea>
               <button
               type="submit"
               className="u-full-width button-primary"

               >Agregar Cita</button>

      </form>

    </Fragment>

  );
};

export default Formulario;
