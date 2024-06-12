'use client'

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { set, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { AlertCmponent } from "./AlertCmponent";
//import { useForm } from "./hooks/useForm";


// Definir el esquema de validación con Yup
const schema = yup.object().shape({
  nombre: yup.string().required('Este campo es obligatorio'),
  email: yup.string().email('Correo electrónico no válido').required('Este campo es obligatorio'),
  telefono: yup.string().required('Este campo es obligatorio'),
  mensaje: yup.string().required('Este campo es obligatorio'),
});
export const FormContacto = () => {

  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(schema),
  });

  const [enviado, setEnviado] = useState(false)
  const [mensaje, setMensaje] = useState('')
  const formRef = useRef(null);
  const onSubmit = async (data) => {
    console.log(data);
    const res = await axios.post("/api/contactos", data);
    if(res){
      setEnviado(true);
      setMensaje(res.data.message);
      setTimeout(() => {
        setEnviado(false);
      }, 5000);
    }
    formRef.current.reset()
    // console.log('MENSAJE ENVIADO', res , 'MENSAJE', mensaje);
  };
  // const { formState, onInputChange, onResetForm } = useForm({
  //   nombre: '',
  //   email: '',
  //   telefono: '',
  //   mensaje: '',
  // });
  // const formRef = useRef(null);
  // const handleSubmit =  async(e) => {
  //   e.preventDefault();
  //   // console.log(formState);
  //   const res = await axios.post("/api/contactos", formState);
  //   formRef.current.reset()
  //   onResetForm();  
  //   //console.log(formData);
  //   //console.log('MENSAJE ENVIADO', res);
  // };

  return (
    <div className=" bg-gradient-to-tr from-gray-800 to-[#073d61] text-white text-[14px] rounded-xl m-2">
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="sm:m-6 m-4 appearance-none"
      >
        <div className="flex flex-col ">
          <label className="my-2" name="nombre">
            Nombre
          </label>
          <input
            className="w-full text-gray-800 appearance-none outline-none ring-gray-600 border-0 rounded-md p-2 focus:ring-2 focus:ring-inset focus:ring-gray-600"
            type="text"
            id="nombre"
            name="nombre"
            {...register("nombre", { required: true })}
          />
          {errors.nombre && (
            <span className="text-red-500">{errors.nombre.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="my-2" name="email">
            Correo electrónico
          </label>
          <input
            {...register("email")}
            className="w-full text-gray-800 appearance-none outline-none ring-gray-600 border-0 rounded-md p-2 focus:ring-2 focus:ring-inset focus:ring-gray-600"
            type="email"
            id="email"
            name="email"
          />

          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="my-2" name="telefono">
            Telefono
          </label>
          <input
            placeholder="(xxx) xxx-xx-xxx"
            className="w-full text-gray-800 appearance-none outline-none placeholder:text-gray-300
            ring-gray-600 border-0 rounded-md p-2 
            focus:ring-2 focus:ring-inset focus:ring-gray-600"
            type="tel"
            id="telefono"
            name="telefono"
            {...register("telefono")}
          />
          {errors.telefono && (
            <span className="text-red-500">{errors.telefono.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="my-2" name="mensaje">
            Mensaje
          </label>
          <textarea
            placeholder="Escribe aquí tu mensaje..."
            rows={3}
            className="w-full text-gray-800 appearance-none outline-none placeholder:text-gray-300
            ring-gray-600 border-0 rounded-md p-2 
            focus:ring-2 focus:ring-inset focus:ring-gray-600"
            id="mensaje"
            name="mensaje"
            {...register("mensaje")}
          />
          {errors.mensaje && (
            <span className="text-red-500">{errors.mensaje.message}</span>
          )}
        </div>
        <div className="flex gap-4"> 
          <button className="my-2" type="submit">
            Enviar
          </button>
          
            {enviado && <AlertCmponent mensaje={mensaje} />}
        </div>
        
        
      </form>
    </div>
  );
};
